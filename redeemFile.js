const { findOne, find, core } = require('@hdworks/dynamo-db-wrapper')
const { redeemStatusCodes } = require('../../error/index')
const _ = require('underscore')
const { getDataFromDynamoDB } = require('../../utils/getDataFromDynamoDB')

exports.redeemDetails = async (decoded) => {
    try {
      console.log('Inside redeemDetails', decoded.screenName);
      let resObject = {}
      let selectedConfig = {}
      let addCashRequired = true
      let inProcessing = false
      let currentBankSlab = {}
      let user = {},redeemGlobalConfig = {} ,blockedStates= {} ,aceLevelChanges= {}
      let dynamodbRequests = [
        { 'table': 'ace_config', 'data': [{ '_id': 'pf-redeem-global-config', 's_key': 'redeemaddcash' }, { '_id': 'pf-redeem-blocked-states', 's_key': 'redeemAmounts' }] },
        { 'table': 'ace_level_changes', 'data': { 'userId': decoded._id } },
        { 'table': 'users', 'data': { '_id': decoded._id } }
      ]
      let dynamodbResponses = await getDataFromDynamoDB(dynamodbRequests)
      dynamodbResponses.forEach((response) => {
        if (response.table === 'ace_config') {
          if (response.data._id === 'pf-redeem-global-config') {
            redeemGlobalConfig = response.data
          } else if (response.data._id === 'pf-redeem-blocked-states') {
            blockedStates = response.data.s_value
          }
        } else if (response.table === 'ace_level_changes') {
          aceLevelChanges = response.data[0]
        } else if (response.table === 'users') {
          user = response.data
        }
      })

      // DB Calls, I know we're making an uncomfortable amount of DB calls but if DB is structured in such way, WHAT CAN U DO!!!
      console.log(decoded.screenName, 'finding user in db using token')
      // let user = await findOne('users', { '_id': decoded._id })
      console.log(decoded.screenName, 'finding redeemChannelConfig in ace_config using pf-redeem-channel-config with key redeemaddcash')
      // let redeemGlobalConfig = await findOne('ace_config', { _id: 'pf-redeem-global-config', s_key: 'redeemaddcash' })
      addCashRequired = (user.totalDepositsCount <= 0)
      // let blockedStates = await findOne('ace_config', { _id: 'pf-redeem-blocked-states', s_key: 'redeemAmounts' })
      console.log(decoded.screenName, 'finding aceLevelChanges of user using token')
      // let aceLevelChanges = await find('ace_level_changes', { 'userId': decoded._id })
      // aceLevelChanges = aceLevelChanges[0]
      console.log(decoded.screenName, 'finding aceConfig in ace_config using pf-redeem-channel-config')
      let aceConfig = await find('ace_config', { _id: "pf-redeem-limit-acelevel-config" })
      console.log(decoded.screenName, 'finding redeemChannelConfig in ace_config using pf-redeem-channel-config')
      let redeemChannelConfig = await find('ace_config', { _id: "pf-redeem-channel-config" })
      console.log(decoded.screenName, 'finding bankRedeemNumberSlab in ace_config using pf-redeem-amount-limits')
      let bankRedeemNumberSlab = await find('ace_config', { _id: "pf-redeem-amount-limits" })
      let minRedeemAmount = (user.totalRedeemCount >= 6) ? (_.findWhere(bankRedeemNumberSlab, { 's_key': '6_all' })).min_redeemamt : (_.findWhere(bankRedeemNumberSlab, { 's_key': (user.totalRedeemCount + 1) + '_all' })).min_redeemamt
      if (addCashRequired) minRedeemAmount = redeemGlobalConfig.minRedeemWithoutAddcash
      const tdsConfig = await findOne('settings', { _id: 'tds_scenario', type: 'tds_config' })

      let params = {
        TableName: 'user_wallet',
        KeyConditions: {
          userID: { ComparisonOperator: 'EQ', AttributeValueList: [user._id] },
          createdAt: { ComparisonOperator: 'BETWEEN', AttributeValueList: [new Date().setHours(0, 0, 0, 0), +new Date()] }
        },
        QueryFilter: {
          type: { ComparisonOperator: 'IN', AttributeValueList: ['withdraw-request', 'withdraw', 'withdraw-processing'] }
        },
        IndexName: 'userID-createdAt-index',
        ScanIndexForward: false
      }
      console.log(decoded.screenName, 'Finding redeem Details in user_wallet')
      let result = await core('query', params, true)
      console.log(decoded.screenName, 'Finding type of redeem to be withdraw-processing or withdraw-request')
      result?.Items?.map(x => { if (x.type === 'withdraw-processing' || x.type === 'withdraw-request') inProcessing = true })

      if (user.manualRedeemFlag) {
        console.log(decoded.screenName, 'user.manualRedeemFlag is true , finding user redeem limits in user_redeem_limits')
        let customConfig = await findOne('user_redeem_limits', { userID: user._id, type: "redeemlimit" })
        selectedConfig = customConfig
        console.log(decoded.screenName, 'redeem limit found', selectedConfig)
      } else {
        console.log(decoded.screenName, 'user.manualRedeemFlag is true , setting user limit by comparing ace_level ')
        aceConfig?.map(x => { if (x.ace_level === aceLevelChanges?.currentAceLevel) selectedConfig = x })
      }

      let kycRequired = user.totalRedeem > 20 ? true : false
      console.log(decoded.screenName, 'selectedConfig', selectedConfig)
      let maxRedeemAmount = selectedConfig?.maxamount_per_request
      if (selectedConfig) {
        // Wallet Limits
        resObject.minAmount = minRedeemAmount
        resObject.maxAmount = addCashRequired ? redeemGlobalConfig?.maxRedeemWithoutAddcash : selectedConfig?.maxamount_per_request
        // resObject.maxAmount = user.manualRedeemFlag ? selectedConfig?.maxamount_per_request : selectedConfig?.wallets || redeemGlobalConfig?.maxRedeemWithoutAddcash
        // wallet Max amount
        resObject.walletMinAmount = minRedeemAmount
        resObject.walletMaxAmount = addCashRequired ? redeemGlobalConfig?.maxRedeemWithoutAddcash : (selectedConfig?.wallets || selectedConfig?.maxamount_per_request)
        // Bank Limits and UPI Limits
        resObject.bankMinAmount = minRedeemAmount
        resObject.bankMaxAmount = addCashRequired ? redeemGlobalConfig?.maxRedeemWithoutAddcash : selectedConfig?.maxamount_per_request

        resObject.requestsPerDay = selectedConfig.requests_per_day
        resObject.userRequestsPerDay = result.Count
        resObject.addCashRequired = user.totalDepositsCount ? false : redeemGlobalConfig?.redeemAddCashReq ? true : false
        resObject.kycRequired = kycRequired


        resObject.totalDepositsCount = user.totalDepositsCount || 0
        resObject.redeemableAmount = Number((user.win).toFixed(2)) || 0 // Removed bon in bon-hotfix
        resObject.kycStatus = user.kycStatus
        resObject.disableRedeemCancelFlag = user.disableRedeemCancelFlag || false
      }

      if (user.state && (blockedStates.blockedStates).length > 0) {
        if ((blockedStates.blockedStates).includes(user.state)) {
          resObject.minAmount = blockedStates.minRedeem
          resObject.walletMinAmount = blockedStates.minRedeem
          resObject.bankMinAmount = blockedStates.minRedeem
        }
      }

      // Adding Taxable Running Winnings
      resObject.taxableRunningNetWinnings = user.taxableRunningNetWinnings || 0
      resObject.cumulativeTaxPaidFinYear = user.cumulativeTaxPaidFinYear || 0
      resObject.cummulativeRedeemFinYear = user.cummulativeRedeemFinYear || 0
      resObject.panMandatory = tdsConfig.tds_scenario_3.configMap.panMandatoryForAllClients
      resObject.tdsPercentage = Number(tdsConfig.tds_scenario_3.configMap.TDS_PERCENTAGE)

      resObject.redeemLimits = aceConfig?.sort((a, b) => b.ace_level - a.ace_level).map(x => ({ aceLevel: x.s_key, reqPerDay: x.requests_per_day, maxAmount: x.maxamount_per_request }))

      if (redeemChannelConfig) resObject.redeemOptions = redeemChannelConfig?.filter(x => x.status).map(x => {
        let obj = {}
        obj.type = x.s_key
        obj.status = x.status
        obj.name = x.name
        obj.deletableByUser = x.deletableByUser
        console.log(decoded.screenName, 'setting the walletType , redeemChannelConfig is true')
        if (x.s_key === "amazonPay") { obj.list = user.walletList?.amazonPay ? [user.walletList.amazonPay] : [] }

        if (x.s_key === "paytmWallet") { obj.list = user.walletList?.paytm ? [user.walletList.paytm] : [] }

        if (x.s_key === "bankAccount") { obj.list = user?.bankList?.filter(x => x.bankStatus === 'processing' || x.bankStatus === 'approved') || [] }

        if (x.s_key === "upi") {
          if (user?.upiList?.length) {
            let formatList = user?.upiList?.filter(x => x.upiState === 'processing' || x.upiState === 'approved')?.map(x => ({ upi: x.upi, linked: x.upiStatus, upiState: x.upiState }))
            obj.list = formatList
          } else {
            obj.list = []
          }
        }

        return obj
      })
      let newList = resObject.redeemOptions.filter(x => {
        if ((x.type === 'amazonPay' && x.list.length) || (x.type === 'paytmWallet' && x.list.length)) return x.list[0]['status']
        if (x.type === 'upi') return true
        else return true
      })
      resObject.redeemOptions = newList
      // resObject.redeemOptions.filter(x => ((x.type === "amazonPay" && user.walletList?.amazonPay?.status)) || (x.type === "paytmWallet" && user.walletList?.paytm?.status) || (x.type === "bankAccount") || (x.type === 'upi')))
      // Checks
      if (inProcessing) return ({ ...resObject, ...redeemStatusCodes.WithdrawalInProcess })
      if ((user.win) < selectedConfig.minamount_per_request) resObject = { ...resObject, ...redeemStatusCodes.InsufficientBalance } // Removed bon in bon-hotfix
      if (redeemGlobalConfig.redeemAddCashReq && !user.totalDepositsCount) resObject = { ...resObject, ...redeemStatusCodes.AddCashRequired }
      if (user.kycStatus === 'approved') return resObject
      if (user.totalRedeem > redeemGlobalConfig?.redeemKycRequirement) resObject = { ...resObject, ...redeemStatusCodes.KYCNotVerified }

      console.log(decoded.screenName, 'Returning redeemDetails')
      return resObject

    } catch (error) {
      console.log('Error occurred inside redeemDetails , throwing error', error)
      throw error
    }

  }
