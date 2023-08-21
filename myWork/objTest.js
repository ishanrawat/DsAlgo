

//  function invokeGlobal() {
//     global.arr = []
// }

// var longestPalindrome = function (s) {
//     if (s.split('').reverse().join('') === s) return s
//     let frontString = longestPalindrome(s.slice(1, s.length))
//     let backString = longestPalindrome(s.slice(0,s.length - 1))

//     return frontString.length > backString.length ? frontString : backString
// };


// console.log(longestPalindrome("babad"))

// var longestPalindrome = function (s) {
//     let substr = ''

//   for(let i = 0 ; i<= s.length ; i++){
//       for(let j = i ;j <=s.length;j++){
//           let sliced = s.slice(i,j)
//           if(sliced.split('').reverse().join('')===sliced){
//               if(sliced.length>substr.length) substr = sliced
//           }
//       }
//   }
//   return substr
// };

// console.log(longestPalindrome("a"))
// const { findOne, insertOne, updateOne } = require("@hdworks/dynamo-db-wrapper")

// const tdsCallculations = async (user, amount, tdsConfig) => {
//     try {
//         // in user meta data new values will be stored
//         let user_metadata = await findOne('users_metadata', { pk: `user#${user._id}`, sk: 'redeem' })
//         if (!user_metadata) {
//             user_metadata = { pk: `user#${user._id}`, sk: 'redeem', netWinnings: 0, openingBalanceFinYear: 0, cummulativePurchaseFinYear: user.totalDeposits || 0, cummulativeRedeemFinYear: 0, taxedNetWinnings: 0, TDSDeductedFinYear: 0 }
//             await insertOne('users_metadata', user_metadata)
//         }
//         console.log(user_metadata)
//         // Initialize all the veriables for callculations
//         let tdsAmount = 0
//         let tdsPercentage = Number(tdsConfig.tds_scenario_3.configMap.TDS_PERCENTAGE)
//         let newRedeemAmount
//         let bonusBucket = 0
//         let newBonus = user.bonus
//         let tdsActiveConfig = tdsConfig?.active
//         let netWinnings = (user_metadata.cummulativeRedeemFinYear + amount) - (user_metadata.cummulativePurchaseFinYear - user_metadata.openingBalanceFinYear)
//         let taxableNetWinnings = netWinnings - user_metadata.taxedNetWinnings
//         let winningBucket = 0
//         let newWinnings = 0
//         let runningNetWinnings = user.taxableRunningNetWinnings || 0
//         let newRunningNetWinnings = 0
//         // Net winnings = total withdrawals - total deposits
//         // openingBalanceFinYear - user’s opening balance
//         // cummulativePurchaseFinYear - user deposits
//         // cummulativeRedeemFinYear - user redeems
//         // taxedNetWinnings  - tot winnings on which user has been taxed
//         // TDSDeductedFinYear - tot tax deducted for the user in this fin year


//         // callculate the tds amount and new redeem amount
//         if (tdsConfig?.active === 'tds_scenario_3' && taxableNetWinnings > 0) {

//             console.log(user.screenName, 'netWinForTDSCallculation', taxableNetWinnings)
//             tdsAmount = Number((taxableNetWinnings / 100 * tdsPercentage).toFixed(2))
//             newRedeemAmount = Number((amount - tdsAmount).toFixed(2))
//             user_metadata.taxedNetWinnings = Number((user_metadata.taxedNetWinnings + taxableNetWinnings).toFixed(2))
//             user_metadata.TDSDeductedFinYear = Number((user_metadata.TDSDeductedFinYear + tdsAmount).toFixed(2))
//             user_metadata.cummulativeRedeemFinYear = Number((user_metadata.cummulativeRedeemFinYear + amount).toFixed(2))
//             user_metadata.netWinnings = Number((netWinnings).toFixed(2))
//             console.log(user_metadata)
//             delete user_metadata['pk'];
//             delete user_metadata['sk'];
//             await updateOne('users_metadata', { pk: `user#${user._id}`, sk: 'redeem' }, { $set: user_metadata })
//         }
//         else {
//             newRedeemAmount = amount
//         }
//         winningBucket = newRedeemAmount
//         newWinnings = Number((user.win - amount).toFixed(2))

//         console.log(user.screenName, "tdsAmount", tdsAmount, "newRunningNetWinnings", newRunningNetWinnings, "runningNetWinnings", runningNetWinnings)
//         console.log({
//             tdsActiveConfig,
//             netWinOnTDSCallculated: taxableNetWinnings,
//             tdsPercentage: tdsPercentage,
//             runningNetWinnings: runningNetWinnings,
//             tdsAmount: tdsAmount,
//             newRunningNetWinnings: newRunningNetWinnings,
//             redeemAmount: amount,
//             newRedeemAmount: newRedeemAmount,
//             newWinnings,
//             winningBucket,
//             bonusBucket,
//             newBonus
//         })
//         return ({
//             tdsActiveConfig,
//             netWinOnTDSCallculated: taxableNetWinnings,
//             tdsPercentage: tdsPercentage,
//             runningNetWinnings: runningNetWinnings,
//             tdsAmount: tdsAmount,
//             newRunningNetWinnings: newRunningNetWinnings,
//             redeemAmount: amount,
//             newRedeemAmount: newRedeemAmount,
//             newWinnings,
//             winningBucket,
//             bonusBucket,
//             newBonus
//         })


//     } catch (error) {
//         console.log(error)
//         throw error
//     }
// }
// let user = {
//     "_id": "a172a2123372a54f",
//     "a23ConvDate": 1597938200000,
//     "a23RegDate": 1597937880000,
//     "a23UserID": "kUy0204",
//     "aadharApproved": false,
//     "aceLevelUpdatedAt": 1597938200000,
//     "ace_level": 1,
//     "address": "hydhsakhdka kjds",
//     "avatar": "jdlasdjinkznad",
//     "bankList": [
//         {
//             "accountName": "Savings",
//             "accountNumber": "hhhhhhhhhh",
//             "bankApproved": true,
//             "bankName": "ICICI Bank",
//             "bankStatus": "approved",
//             "bankUpdatedAt": 1597948200000,
//             "ifscCode": "ICIC0000009",
//             "isActive": true
//         }
//     ],
//     "bon": 0,
//     "code": "4J4PQJ",
//     "contactPreferences": {
//         "email": true,
//         "fromTime": null,
//         "language1": "English",
//         "language2": "Tamil",
//         "mobile": true,
//         "postOffice": true,
//         "pushNotification": true,
//         "sms": true,
//         "toTime": null
//     },
//     "country": "India",
//     "currentAceLevel": 1,
//     "currentAceLevelName": "bronze",
//     "currentTotalAcePoints": 49,
//     "device_id": "oiois8w9qw0w",
//     "disableRedeemCancelFlag": false,
//     "displayName": "kuy0204",
//     "dob": "ipwpqiwljIAJSL",
//     "email": "122HJ@mail.com",
//     "emailVerified": true,
//     "exp": 0,
//     "extraCash": 0,
//     "funBalance": 5000,
//     "gender": "Female",
//     "holdAcePoints": 60,
//     "ip": "11.22.33.44",
//     "kyc1": true,
//     "kyc2": true,
//     "kyc3": true,
//     "kycMessage": "Your PAN Is Verified",
//     "kycStatus": "approved",
//     "kycUpdatedAt": 1598052259000,
//     "lastAceLevel": 1,
//     "lastActiveDate": 1633367422000,
//     "levelno": "bronze",
//     "manualRedeemAvailable": true,
//     "maxAceLevel": 1,
//     "maxTotalAcePoints": 49,
//     "mobile": "+911234567890",
//     "mobileMatch": "A",
//     "mobileVerified": true,
//     "name": "M H R",
//     "panApproved": true,
//     "panImage": "uiooasjkkkahsd.png",
//     "panName": "M H R",
//     "panNumber": "hhsbbhshh",
//     "panStatus": "approved",
//     "password": "hjdglakdldgwidhlHD",
//     "passwordStrength": 110,
//     "postalCode": "600091",
//     "recommendedGames": [
//         "124"
//     ],
//     "referralFraudFlag": false,
//     "referralMute": false,
//     "region": "Tamil Nadu",
//     "registrationIp": "12.23.34.45",
//     "screenName": "kuy0204",
//     "setPassword": false,
//     "source": "a23",
//     "state": "Tamil Nadu",
//     "status": true,
//     "subscriptionType": "premium",
//     "tdsStatus": "approved",
//     "teamname": "kuy0204",
//     "teamNameChangeAvailable": false,
//     "tnx": 0,
//     "total": 1,
//     "totalContextCount": 0,
//     "totalDeposits": 950,
//     "totalDepositsCount": 5,
//     "totalRedeem": 0,
//     "totalRedeemCount": 2,
//     "totalWin": 0,
//     "totalWinnings": 0,
//     "updatedAt": 1633364413000,
//     "userCode": "a172a2123372a54f",
//     "username": "kuy0204",
//     "win": 1,
//     "win_pending": 0
// }

// console.log(tdsCallculations(user, 1050, { active: 'tds_scenario_3', tds_scenario_3: { configMap: { TDS_PERCENTAGE: 30 } } }))



// const { findOne, updateOne, core } = require('@hdworks/dynamo-db-wrapper')
// const { redeemStatusCodes } = require('./error')
// const _ = require('underscore')


// const tdsCalculationsScenario4 = async (user, amount, tdsConfig) => {
// 	try {
// 		// TODO: log
// 		// Net winnings = total withdrawals - total deposits
// 		// openingBalanceFinYear - user’s opening balance
// 		// cummulativePurchaseFinYear - user deposits
// 		// cummulativeRedeemFinYear - user redeems
// 		// taxedNetWinnings  - tot winnings on which user has been taxed
// 		// TDSDeductedFinYear - tot tax deducted for the user in this fin year

// 		// in user meta data new values will be stored
// 		let user_metadata = await findOne('users_metadata', { pk: `user#${user._id}`, sk: 'tdsCalculationData' })
// 		let taxedNetWinningsFinyear = user_metadata.taxedNetWinningsFinyear || 0
// 		let cummulativeRedeemFinyear = user_metadata.cummulativeRedeemFinyear || 0
// 		let TDSDeductedFinyear = user_metadata.TDSDeductedFinyear || 0
// 		let cummulativePurchaseFinyear = user_metadata.cummulativePurchaseFinyear || 0
// 		if (!user_metadata) {
// 			user_metadata = {//TODO:MAKE Y SMALL
// 				openingBalanceFinyear: 0,
// 				cummulativePurchaseFinyear: 0,
// 				cummulativeRedeemFinyear: 0,
// 				taxedNetWinningsFinyear: 0,
// 				TDSDeductedFinyear: 0
// 			}
// 		}
// 		else {
// 			// TODO: log
// 			console.log(user_metadata)
// 			delete user_metadata['pk'];
// 			delete user_metadata['sk'];
// 		}

// 		// Initialize all the veriables for callculations
// 		let tdsAmount = 0

// 		// getting tds Percentage
// 		let tdsPercentage = Number(tdsConfig.tds_scenario_4.configMap.TDS_PERCENTAGE)

// 		// net winnings = total withdrawals - total deposits
// 		let netWinnings = (user_metadata.cummulativeRedeemFinyear + amount) - (user_metadata.cummulativePurchaseFinyear + user_metadata.openingBalanceFinyear)


// 		let taxableNetWinnings = (netWinnings) - taxedNetWinningsFinyear//TODO:to fixed and number to 0 
// 		let newRedeemAmount

// 		// below fields are not required anymore we are just inserting dummy values
// 		let runningNetWinnings = user.taxableRunningNetWinnings || 0
// 		let newRunningNetWinnings = 0
// 		let bonusBucket = 0
// 		let newBonus = user.bonus || 0
// 		let winningBucket = user.win;
// 		let newWinnings = Number((Number(user.win) - Number(amount)).toFixed(2))

// 		user_metadata.cummulativeRedeemFinyear = user_metadata.cummulativeRedeemFinyear + amount
// 		// callculate the tds amount and new redeem amount

// 		if (taxableNetWinnings > 0) {
// 			tdsAmount = Number((taxableNetWinnings / 100 * tdsPercentage).toFixed(2))

// 			newRedeemAmount = Number((amount - tdsAmount).toFixed(2))

// 			user_metadata.taxedNetWinningsFinyear = Number((taxedNetWinningsFinyear + Number(taxableNetWinnings)).toFixed(2))

// 			user_metadata.TDSDeductedFinyear = Number((TDSDeductedFinyear + Number(tdsAmount)).toFixed(2))
// 		}
// 		else {
// 			newRedeemAmount = amount
// 		}
// 		await updateOne('users_metadata', { pk: `user#${user._id}`, sk: 'tdsCalculationData' }, { $set: user_metadata })

// 		// TODO: 1 line
// 		console.log(user.screenName, 'cummulativeRedeemFinYear: ', user_metadata.cummulativeRedeemFinyear)
// 		console.log(user.screenName, 'taxableNetWinnings: ', taxableNetWinnings)
// 		console.log(user.screenName, 'tdsAmount: ', tdsAmount)
// 		console.log(user.screenName, 'newRedeemAmount: ', newRedeemAmount)
// 		console.log(user.screenName, 'TDSDeductedFinYear: ', user_metadata.TDSDeductedFinyear)
// 		console.log(user.screenName, 'taxedNetWinnings: ', user_metadata.taxedNetWinningsFinyear)

// 		let responseObj = {
// 			tdsActiveConfig: tdsConfig.tdsActiveConfig,
// 			netWinOnTDSCallculated: taxableNetWinnings,
// 			tdsPercentage: tdsPercentage,
// 			runningNetWinnings: runningNetWinnings,
// 			tdsAmount: tdsAmount,
// 			newRunningNetWinnings: newRunningNetWinnings,
// 			redeemAmount: amount,
// 			newRedeemAmount: newRedeemAmount,
// 			newWinnings,
// 			winningBucket,
// 			bonusBucket,
// 			newBonus
// 		}

// 		return responseObj
// 	} catch (error) {
// 		console.log(error)
// 		throw error
// 	}
// }


// let user = {
//         _id: 'wqeravlsp5tpbzm',
//         screenName: 'mrityunjoy24',
//         win: 0,
//         bonus: 0
//     }
//     let amount = 2000
//     let tds_scenario_4 = {
//         tdsActiveConfig: "tds_scenario_4",
//         tds_scenario_4: {
//             configMap: {
//                 TDS_PERCENTAGE: 30
//             }

//         }
//     }

//     tdsCalculationsScenario4(user, amount, tds_scenario_4)




// const { findOne, core } = require('@hdworks/dynamo-db-wrapper')


// const testTheAdd = async() => {
// 	const params = [{
// 		Update: {
// 			TableName: 'users_metadata',
// 			Key: { pk: 'user#6626', sk: 'tdsCalculationData' },
// 			UpdateExpression: 'set #cummulativeRedeemFinyear = :cummulativeRedeemFinyear, #taxedNetWinnings = :taxedNetWinnings, #TDSDeductedFinyear = :TDSDeductedFinyear',
// 			ExpressionAttributeNames: {
// 				'#cummulativeRedeemFinyear': 'cummulativeRedeemFinyear',
// 				'#taxedNetWinnings': 'taxedNetWinnings',
// 				'#TDSDeductedFinyear': 'TDSDeductedFinyear',
// 			},
// 			ExpressionAttributeValues: {
// 				':cummulativeRedeemFinyear': 0,
// 				':taxedNetWinnings': 0,
// 				':TDSDeductedFinyear': 0,
// 			}
// 		}
// 	}]
// 	await core('transactWrite', { TransactItems: params })
// }


// testTheAdd()



// var AWS = require('aws-sdk')
// var dynamodb = new AWS.DynamoDB({
// 	apiVersion: '2012-08-10',
// 	region: 'ap-south-1'
// })
// dynamodb = new AWS.DynamoDB.DocumentClient({ service: dynamodb })


// const testTheAdd = async() => {
// 	let user_metadata = {
// 		pk: 'user#67826',
// 		sk:'tdsCalculationData',
// 		openingBalanceFinyear:0,
// 		cummulativePurchaseFinyear:0,
// 		cummulativeRedeemFinyear:0,
// 		taxedNetWinnings:0,
// 		TDSDeductedFinyear:0
// 	}

// 	return new Promise((resolve, reject) => dynamodb.transactWrite({
// 		TransactItems: [{
// 			Put: {
// 				TableName: 'users_metadata',
// 				Item: user_metadata
// 			}
// 		}
// 		]
// 	}, (err, data) => {
// 		if (err) {
// 			console.log('Concurrent signups with same screenName but different params', err)
// 			reject('Registration failed. try again later')
// 		}
// 		console.log('data', data)
// 		resolve(data)
// 	})).then(data => data).catch(err => { throw Error(JSON.stringify(err)) })

// }
// testTheAdd()




// const testTheAdd = async() => {
// 	let user_metadata = {
// 		pk: 'user#67826',
// 		sk:'tdsCalculationData',
// 		openingBalanceFinyear:0,
// 		cummulativePurchaseFinyear:0,
// 		cummulativeRedeemFinyear:0,
// 		taxedNetWinnings:0,
// 		TDSDeductedFinyear:0
// 	}

// 	return new Promise((resolve, reject) => dynamodb.transactWrite({
// 		TransactItems: [{
// 			Put: {
// 				TableName: 'users_metadata',
// 				Item: user_metadata
// 			}
// 		}
// 		]
// 	}, (err, data) => {
// 		if (err) {
// 			console.log('Concurrent signups with same screenName but different params', err)
// 			reject('Registration failed. try again later')
// 		}
// 		console.log('data', data)
// 		resolve(data)
// 	})).then(data => data).catch(err => { throw Error(JSON.stringify(err)) })

// }
// testTheAdd()







// const testTheAdd = async() => {
// 	let user_metadata = {
// 		pk: 'user#67826',
// 		sk:'tdsCalculationData',
// 		openingBalanceFinyear:0,
// 		cummulativePurchaseFinyear:0,
// 		cummulativeRedeemFinyear:0,
// 		taxedNetWinnings:0,
// 		TDSDeductedFinyear:0
// 	}

// 	return new Promise((resolve, reject) => dynamodb.transactWrite({
// 		TransactItems: [{
// 			Put: {
// 				TableName: 'users_metadata',
// 				Item: user_metadata
// 			}
// 		}
// 		]
// 	}, (err, data) => {
// 		if (err) {
// 			console.log('Concurrent signups with same screenName but different params', err)
// 			reject('Registration failed. try again later')
// 		}
// 		console.log('data', data)
// 		resolve(data)
// 	})).then(data => data).catch(err => { throw Error(JSON.stringify(err)) })

// }
// testTheAdd()
// const { findOne, core } = require("@hdworks/dynamo-db-wrapper")
// const checkQuery = async () => {
// let params = [
// 	{
// 		Update: {
// 			TableName: 'users_metadata',
// 			Key: { pk: `user#aefaf12`, sk: 'tdsCalculationData' },
// 			UpdateExpression: 'SET #updatedAt = :updatedAt ADD #cummulativeRedeemFinyear :redeemAmount, #taxedNetWinnings :taxedNetWinnings, #TDSDeductedFinyear :TDSDeductedFinyear',
// 			ConditionExpression: '#cummulativeRedeemFinyear = :cummlared',
// 			ExpressionAttributeNames: {
// 				'#cummulativeRedeemFinyear': 'cummulativeRedeemFinyear',
// 				'#taxedNetWinnings': 'taxedNetWinnings',
// 				'#TDSDeductedFinyear': 'TDSDeductedFinyear',
// 				'#updatedAt': 'updatedAt',

// 			},
// 			ExpressionAttributeValues: {
// 				':redeemAmount': 100,
// 				':taxedNetWinnings': 100,
// 				':TDSDeductedFinyear': 100,
// 				':updatedAt': +new Date(),
// 				':cummlared':200
// 			}
// 		}
// 	}
// ]

// await core('transactWrite', { TransactItems: params })
// }

// checkQuery()


// const { findOne } = require('@hdworks/dynamo-db-wrapper')
// const reconciliation = async (userId) => {
//     let user_meta = await findOne('users_metadata', { pk: userId, sk: 'tdsCalculationData' })
//     if (user_meta?.cummulativeRedeemFinyear >= (user_meta?.cummulativePurchaseFinyear + user_meta?.openingBalanceFinyear) && (user_meta?.cummulativeRedeemFinyear - user_meta?.cummulativePurchaseFinyear - user_meta?.openingBalanceFinyear !== user_meta.taxedNetWinnings)) {
//         console.log('mismatch, cummulative redeem', user_meta?.cummulativeRedeemFinyear, 'cummulative purchase', user_meta.cummulativePurchaseFinyear, 'opening balance', user_meta.openingBalanceFinyear, 'taxed net winnings', user_meta.taxedNetWinnings)
//         console.log('difference', user_meta?.cummulativeRedeemFinyear - user_meta?.cummulativePurchaseFinyear - user_meta?.openingBalanceFinyear - user_meta.taxedNetWinnings)
//     }
// }




// reconciliation('user#aefaf12')
// const { findOne, core } = require('@hdworks/dynamo-db-wrapper')
// const myFunc = async()=>{
// let user = await findOne('users', { _id: '406da7cd30ba79ff' })
// let params = [



//     {
//         Update: {
//             TableName: 'users',
//             Key: { _id: '406da7cd30ba79ff'},
//             ConditionExpression: '#total = :total',
//             UpdateExpression: 'set #win = :win, #total = :newtotal, #bon = :bon, #totalRedeem = :totalRedeem,  #totalRedeemCount = :totalRedeemCount, #updatedAt = :updatedAt',
//             ExpressionAttributeNames: { '#win': 'win', '#total': 'total', '#bon': 'bon', '#totalRedeem': 'totalRedeem', '#totalRedeemCount': 'totalRedeemCount', '#updatedAt': 'updatedAt' },
//             ExpressionAttributeValues: {
//                 ':win': Number((user.win - 100).toFixed(2)),
//                 ':newtotal': Number((user.total + 100).toFixed(2)),
//                 ':bon': Number((user.bon + 0).toFixed(2)),
//                 ':totalRedeem': Number((user.totalRedeem).toFixed(2)) + Number(-100), // Amount is already a negative value (- amount) , so adding here to deduct from totalRedeem at Cancel.
//                 ':totalRedeemCount': user.totalRedeemCount ? user.totalRedeemCount - 1 : 0,
//                 ':updatedAt': +new Date(),
//                 ':total': user.total

//             }
//         }

//     }

// ]
// await core('transactWrite', { TransactItems: params })
// }


// myFunc()
// const { findOne, core, updateOne, insertOne } = require("@hdworks/dynamo-db-wrapper")

// const testFunc = async () => {  
//     let decoded = { _id: 'abcdefghijklmn3783' }

//     let typeOfRegistration = 'google'
//     let user = await findOne('users', { _id: decoded._id })
//     await insertOne('IndexTable', { pk: `${typeOfRegistration}Id-${user._id}`, sk: `${typeOfRegistration}Id-index`, userId: user._id, screenName: user.screenName, createdAt: +new Date() })
//     await insertOne('IndexTable', { pk: `${typeOfRegistration}Id-${user._id}`, sk: `${typeOfRegistration}Id-index`, userId: user._id, screenName: user.screenName, createdAt: +new Date() })
// }

// testFunc()


// const maskvalue = value => {
//     try{
//       let obj = value
//       let len = obj.length - 4
//       return obj.slice(0, len).replace(/./g, '*') + obj.slice(len)
//     } catch(error){
//     }
//   }

//   const recursive = (obj, maskingArray) => {
//     try {
//       let tempObj = {}
//       Object.keys(obj).map(key => {
//          if (typeof (obj[key]) === 'string') tempObj[key] = maskingArray.includes(key) ? maskvalue(obj[key]) : obj[key]
//          if (typeof (obj[key]) === 'object') tempObj[key] = recursive(obj[key], maskingArray)
//       })
//       return tempObj
//     } catch(error) {
//     }
//   }

//   const maskingfunc = (param, maskingArray) => {
//     try {
//       if (typeof (param) === 'string') return maskvalue(param)
//       if (typeof (param) === 'object') return recursive(param, maskingArray || [])
//     } catch(error) {
//       console.log('Error in masking function ==> ', error)
//     }
//   }



//   console.log(maskingfunc({
//     status: '100',
//     message: 'Wallet has been added.',
//     nameAtBank: 'ANAND JITENDRA VORA',
//     vpa: 'anandvoralcfc@oksbi',
//     statusCode: 1210,
//     upiState: 'approved'
//   },['vpa','nameAtBank']))



// const axiosRetry = require('axios-retry')
// const axios = require('axios')
// //https://httpstat.us/200
// axiosRetry(axios, {
//     retries: 3,
//     retryDelay: (retryCount) => {
//         console.log(`retry attempt: ${retryCount}`);
//         return retryCount * 200; // time interval between retries  
//     },
//     retryCondition: (error) => {
//         // if retry condition is not specified, by default idempotent requests are retried
//         return error.isAxiosError
//     },
//     shouldResetTimeout: true
// })


// const testFunc = async (str, n) => {
// let arr = [];
//    let retStr = ""
//    if(n==1)
//     for (let i = 0; i <= n; i++) {
//         arr[i] = [];
//     }
//     let i = 0, j = 0
//     let temp = 0
//     let flag =0
//     while (temp < str.length) {

//         arr[i][j] = str[temp]

//         temp++
//         if(i>n) flag = -1
//         if(i<=0) flag = 0
//         if(flag == 0 ){
//             i++;
//         }
//         else if(flag ==-1){
//             i--
//             j++
//         }
//     }
// for(let i=0;i<n;i++){
//     for(let j=0;j<arr[i].length;j++){
//     if(arr[i][j])retStr= retStr + arr[i][j]
//     }

// }


// }


// testFunc('AB', 1)

/**
P     I     N
A   L S   I G
Y A   H R 
P     I 
**/




/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length <= 1) return matrix[0]
    let finalArr = [];
    let i = 0, j = 0
    while (checkminus(matrix)) {
        console.log(matrix)
        //right
        while (j < matrix[i].length && matrix[i][j] != 'a') {
            finalArr.push(matrix[i][j])
            matrix[i][j] = 'a'
            j++
        }

        j--
        i++
        //  console.log(i,j)
        //down
        while (i < matrix.length && matrix[i][j] != 'a') {
            finalArr.push(matrix[i][j])
            matrix[i][j] = 'a'
            i++
        }

        i--
        j--
        //left
        while (j >= 0 && matrix[i][j] != 'a') {
            finalArr.push(matrix[i][j])
            matrix[i][j] = 'a'
            j--
        }
        j++
        i--
        //up
        while (i >= 0 && matrix[i][j] != 'a') {
            finalArr.push(matrix[i][j])
            matrix[i][j] = 'a'
            i--
        }
        i++
        j++
        console.log(i, j)

    }

    return finalArr


};
const checkminus = (matrix) => {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] != 'a') return true
        }
    }
    return false
}
var canJump = function (nums) {
    if (nums.length == 1) return true
    let recCheck = true
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == 0) recCheck = reconcile(nums, i)
        if (recCheck == false) return false
    }
    return true
};

const reconcile = (arr, i) => {
    if (i == 0) return false
    for (let j = i - 1; j >= 0; j--) {
        if (arr[j] + j > i) return true
    }
    return false
}
// console.log(canJump([3,2,1,0,4]))
// console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))


// const findFrequency = (arr)=>{
//     let freqObj = {}

//     for(let i =0 ;i<arr.length;i++){
//         if(freqObj[arr[i]]){
//             freqObj[arr[i]] = freqObj[arr[i]] + 1
//         }else{
//             freqObj[arr[i]] = 1
//         }
//     }
//     return freqObj
// }



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let recArr = []
    let finalArr = []
    let freqObj = findFrequency(nums)

    Object.keys(freqObj).map((el) => {
        if (!recArr[freqObj[el]]) recArr[freqObj[el]] = []
        recArr[freqObj[el]].push(el)
    })
    let flag = 1

    for (let j = recArr.length; j >= 0; j--) {
        if (recArr[j] && recArr[j].length) {

            for (let i = 0; i < recArr[j].length; i++) {
                finalArr.push(recArr[j][i])
                k--
                if (k <= 0) {
                    flag = 0
                    break
                }
            }
        }

        if (k <= 0 || !flag) break
    }
    return finalArr
};


// const findFrequency = (arr) => {
//     let freqObj = {}

//     for (let i = 0; i < arr.length; i++) {
//         if (freqObj[arr[i]]) {
//             freqObj[arr[i]] = freqObj[arr[i]] + 1
//         } else {
//             freqObj[arr[i]] = 1
//         }
//     }
//     return freqObj
// }


// console.log(topKFrequent([1,2],2))


/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    if (coordinates.length <= 2) return true
    let slope = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0])
    for (let i = 1; i < coordinates.length - 1; i++) {
        let slopeNow = (coordinates[i + 1][1] - coordinates[i][1]) / (coordinates[i + 1][0] - coordinates[i][0])
        console.log(slopeNow, slope)
        if (Math.abs(slope) == Infinity && Math.abs(slopeNow) == Infinity) continue
        if (slopeNow != slope) return false
    }
    return true
};


// console.log(checkStraightLine([[1,2],[1,3],[1,4],[1,5],[1,6],[6,7]]))


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let findSmallest = strs[0]
    for (let i = 0; i < strs.length; i++) {
        if (findSmallest.length > strs[i].length) {
            findSmallest = strs[i]
        }
    }
    let flag = 1
    while (findSmallest.length && flag) {
        flag = 0
        for (let i = 0; i < strs.length; i++) {
            if (!strs[i].startsWith(findSmallest)) {
                findSmallest = findSmallest.substring(0, findSmallest.length - 1)
                flag = 1
                break
            }
        }

    }
    return findSmallest
};


// console.log(longestCommonPrefix(["flower","flow","flight"]))

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let freqObj = findFrequency(nums)
    let flag = false
    console.log(freqObj)
    Object.keys(freqObj).map((el) => {

        if (freqObj[el] > 1) flag = true
    })
    return flag
};

//  console.log(containsDuplicate([1,2,3,4]))



// var rotate = function(nums, k) {
//     if(k>nums.length) k = k%nums.length
//      var copyArr = nums.slice(0);
//      let rotArr = copyArr.splice(copyArr.length-k,copyArr.length)
//      console.log(rotArr)
//      let finalArr = [...rotArr,...copyArr]
//      for(let i=0;i<nums.length;i++){
//          nums[i] = finalArr[i]
//      }
//      console.log(nums)
//  };


// console.log(rotate([1,2],5))


/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let len1 = text1.length
    let len2 = text2.length
    let dp = []
    let max = len1 > len2 ? len1 : len2
    for (let i = 0; i <= max; i++)dp[i] = []
    let lcs = recursiveLcs(text1, text2, len1, len2, dp)
    return lcs

};
const max = (a, b) => {
    return a > b ? a : b
}
const recursiveLcs = (text1, text2, len1, len2, dp) => {

    if (len1 <= 0 || len2 <= 0) return 0
    if (dp[len1][len2] || dp[len1][len2] == 0) return dp[len1][len2]

    if (text1[len1 - 1] === text2[len2 - 1]) dp[len1][len2] = 1 + recursiveLcs(text1, text2, len1 - 1, len2 - 1, dp)


    else {
        dp[len1][len2] = max(recursiveLcs(text1, text2, len1 - 1, len2, dp), recursiveLcs(text1, text2, len1, len2 - 1, dp))

    }
    return dp[len1][len2]

}
// console.log(longestCommonSubsequence("abcde",
//     "ace"))


//     function lcs(X, Y, m, n, dp)
// {
//     if (m == 0 || n == 0)
//         return 0;
//     if (X[m - 1] == Y[n - 1])
//         return dp[m][n] = 1 + lcs(X, Y, m - 1, n - 1, dp);

//     if (dp[m][n] != -1) {
//         return dp[m][n];
//     }
//     return dp[m][n] = Math.max(lcs(X, Y, m, n - 1, dp),
//                           lcs(X, Y, m - 1, n, dp));
// }


//     let X = "ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc";
//     let Y = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";

//     let m = X.length;
//     let n = Y.length;
//     let dp = new Array(m + 1);
//     for(let i = 0; i < m + 1; i++)
//     {
//         dp[i] = new Array(n + 1).fill(-1);
//     }
//     console.log("Length of LCS is " + lcs(X, Y, m, n, dp));


// var rotate = function (matrix) {
//     let k = 0, l = 0
//     let finalArr = []
//     finalArr = JSON.parse(JSON.stringify(matrix));
//     for (let i = matrix.length - 1; i >= 0; i--) {
//        k=0
//         for (let j = 0; j < matrix.length; j++){
          
//             matrix[k][l] = finalArr[i][j]
//             k++
//         }
//         l++
        
//     }
//     return matrix
// };

// console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
        let freqObj = findFrequency(nums)
        for(let i =0 ;i<nums.length;i++){
            if(freqObj[nums[i]]>2){
                freqObj[nums[i]]--
                
            }
        }
};

const findFrequency = (arr) => {
    let freqObj = {}

    for (let i = 0; i < arr.length; i++) {
        if (freqObj[arr[i]]) {
            freqObj[arr[i]] = freqObj[arr[i]] + 1
        } else {
            freqObj[arr[i]] = 1
        }
    }
    return freqObj
}


/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    let arr = []
    for( let i = 0;i<nums.length;i++){
        arr[nums[i]] = nums[i]
    }
    let max =0
    let count
    for(let i = 0;i<arr.length;i++){
        count = 0
      while(arr[i]){
        count ++
        i++
      }
      if(count>max)max =count
    }
    console.log(max)
};

longestConsecutive([100,4,200,1,3,2])