const { findOne, find, core } = require('@hdworks/dynamo-db-wrapper')
const AWS = require('aws-sdk')
const getDataFromDynamoDB = async (dynamodbRequests) => {

	const dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'ap-south-1' })
	const requestItems = {}

	dynamodbRequests.forEach(request => {
		let keys = []
		// console.log(request.table)
		if (request.data.length) {
			while (request.data.length) {
				console.log(request.data)
				keys.push(request.data.pop())
			}
		}
		else {
			keys.push(request.data)
		}
		requestItems[request.table] = { Keys: keys }
	})

	const params = {
		RequestItems: requestItems,
	}

	let data = await dynamodb.batchGet(params).promise()
	console.log(data.Responses)
	return data.Responses
}




// let user = await findOne('users', { '_id': decoded._id })
// let redeemGlobalConfig = await findOne('ace_config', { _id: 'pf-redeem-global-config', s_key: 'redeemaddcash' })
// addCashRequired = (user.totalDepositsCount <= 0)
// let blockedStates = await findOne('ace_config', { _id: 'pf-redeem-blocked-states', s_key: 'redeemAmounts' })
// let aceLevelChanges = await find('ace_level_changes', { 'userId': decoded._id })
// aceLevelChanges = aceLevelChanges[0]
// let aceConfig = await find('ace_config', { _id: "pf-redeem-limit-acelevel-config" })
// let redeemChannelConfig = await find('ace_config', { _id: "pf-redeem-channel-config" })
// let bankRedeemNumberSlab = await find('ace_config', { _id: "pf-redeem-amount-limits" })
// let minRedeemAmount = (user.totalRedeemCount >= 6) ? (_.findWhere(bankRedeemNumberSlab, { 's_key': '6_all' })).min_redeemamt : (_.findWhere(bankRedeemNumberSlab, { 's_key': (user.totalRedeemCount + 1) + '_all' })).min_redeemamt
// if (addCashRequired) minRedeemAmount = redeemGlobalConfig.minRedeemWithoutAddcash


let dynamodbRequests = [
	{ 'table': 'ace_config', 'data': [{ '_id': 'pf-redeem-global-config', 's_key': 'redeemaddcash' }, { '_id': 'pf-redeem-blocked-states', 's_key': 'redeemAmounts' }] },
	{ 'table': 'ace_level_changes', 'data': { 'userId': 'sc69ibsh058ttz0' } },
	{ 'table': 'users', 'data': { '_id': 'sc69ibsh058ttz0' } }
]


// getDataFromDynamoDB(dynamodbRequests)
// const testDynamo = async (decoded) => {
// 	let { Item: user } = await core('get', {
// 		Key: { _id: decoded._id },
// 		TableName: 'users',
// 		ConsistentRead: true
// 	})
// 	const params = {

// 		RequestItems: {

// 			ace_config: {
// 				Keys: [
// 					{ _id: 'pf-redeem-global-config', s_key: 'redeemaddcash' },
// 					{ _id: 'pf-redeem-blocked-states', s_key: 'redeemAmounts' }


// 				],
// 			},

// 			ace_level_changes: {
// 				Keys: [
// 					{ userId: decoded._id, },

// 				],
// 			},
// 		},

// 	};


// 	const response = await core('batchGet', params)
	

// 	let redeemGlobalConfig = response?.Responses?.ace_config?.filter((el) => (el.s_key == 'redeemaddcash'))
// 	redeemGlobalConfig = redeemGlobalConfig[0]
// 	console.log(redeemGlobalConfig)
// 	let bankRedeemNumberSlab = await find('ace_config', { _id: "pf-redeem-amount-limits" })
// 	let bankAndUpiMinAmount
// 	console.log(bankRedeemNumberSlab)
// 	user.totalRedeemCount = 2
// 	user.totalDepositsCount = 0
// 	if (user.totalRedeemCount >= 6) bankAndUpiMinAmount = bankRedeemNumberSlab.filter((bankSlab) => bankSlab.s_key == '6_all')[0].min_redeemamt
// 	else if (!user.totalDepositsCount) bankAndUpiMinAmount = redeemGlobalConfig?.minRedeemWithoutAddcash

// 	else {
// 		let s_key = (user.totalRedeemCount + 1) + '_all'
// 		bankAndUpiMinAmount = bankRedeemNumberSlab.filter((bankSlab) => bankSlab.s_key == s_key)[0].min_redeemamt
// 	}
// 	console.log(bankAndUpiMinAmount)
// 	return response
// }


// console.log(testDynamo({ _id: '6xmwe31d13fcknj' }))



const mainFunc = ()=>{
let obj = {a:1,b:2}
checkFunc(obj)
console.log(obj)
}


const checkFunc= (obj)=>{
obj = {c:1}
}

mainFunc()