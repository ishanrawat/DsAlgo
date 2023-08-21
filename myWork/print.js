const { findOne, find, core } = require('@hdworks/dynamo-db-wrapper')
const _ = require('underscore')
const testFunc = async () => {
    let bankRedeemNumberSlab = await find('ace_config', { _id: "pf-redeem-amount-limits" })
    let user = { totalRedeemCount: 3 }
    console.log(bankRedeemNumberSlab)
    let minRedeemAmount = (user.totalRedeemCount >= 6) ? (_.findWhere(bankRedeemNumberSlab, { 's_key': '6_all' })).min_redeemamt : (_.findWhere(bankRedeemNumberSlab, { 's_key': (user.totalRedeemCount + 1) + '_all' })).min_redeemamt
    console.log(minRedeemAmount)
    let minRedeemAmount1 = bankRedeemNumberSlab.filter((slab)=>{
        if(user.totalRedeemCount>=6 && slab.s_key == '6_all')return slab
        else if(slab.s_key === `${user.totalRedeemCount+1}_all`) return slab
    })
    console.log(minRedeemAmount1.min_redeemamt)
}


testFunc()