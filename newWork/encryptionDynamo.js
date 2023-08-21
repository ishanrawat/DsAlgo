const AWS = require('aws-sdk')
const _ = require('underscore')
const fs = require('fs')
// const { table } = require('console')
let dynamodb = new AWS.DynamoDB({
	apiVersion: '2012-08-10',
	region:'ap-south-1'
})
dynamodb = new AWS.DynamoDB.DocumentClient({ service: dynamodb })
let client = dynamodb


const awsfun = (type, method, params) => {
	return new Promise((resolve, reject) => {
		// console.log('inside awsfun', type[method], params)
		type[method](params, (err, data) => {
			if (err) {
				reject(err)
			} else {
				resolve(data)
			}
		})
	})
}

// Helper method to get combined data from every document
let getAllPageData = async (client, method, params, result, pageData) => {
	if (pageData['LastEvaluatedKey']) {
		params['ExclusiveStartKey'] = pageData['LastEvaluatedKey']
		let curPageData = await awsfun(client, method, params)
		result['Items'].push(...curPageData['Items'])
		result = getAllPageData(client, method, params, result, curPageData)
		return result
	} else {
		return result
	}
}

let getalllimitdata = async (client, method, params, data, result, count, scannedcount, limit) => {
	if (data['LastEvaluatedKey']) {
		params['ExclusiveStartKey'] = data['LastEvaluatedKey']
		let curPageData = await awsfun(client, method, params)
		result['Items'].push(...curPageData['Items'])
		data = curPageData
		let key = data['LastEvaluatedKey']
		count = count + data.Count
		if (count < limit && key) {
			result = getalllimitdata(client, method, params, data, result, count, scannedcount, limit)
			return result
		} else {
			return result
		}
	}
}

// Helper method to get count of every document
let getAllDocumentDataCount = async (client, method, params, result, pageData) => {
	if (pageData['LastEvaluatedKey']) {
		params['ExclusiveStartKey'] = pageData['LastEvaluatedKey']
		let curPageData = await awsfun(client, method, params)
		result['Count'] = result['Count'] + curPageData['Count']
		result = getAllDocumentDataCount(client, method, params, result, curPageData)
		return result
	} else {
		return result
	}
}

// remove Empty function is called everytime before update and insert
// we are using this function to check if the obj should be encrypted based on the tableName
// if the table contains pii
// if table has pii, we call encrypt function and pass the obj to encrypt the pii
const removeEmpty = async (obj, tableName) => {
	const o = JSON.parse(JSON.stringify(obj)) // Clone source oect.
	_.chain(o).omit(_.isNull).
		omit(_.isUndefined).
		omit((value) => {
			if (_.isString(value)) {
				return value === ''
			} else if (_.isObject(value)) {
				return _.isEmpty(value)
			}
		}).
		value() // Return new object.
	// if tableName is present 
	// check if the table has pii logs
	if (tableName) {
		console.time('checkTable')
		let toDecrypt = await global.kmsLayers.checkTable(tableName)
		console.timeEnd('checkTable')
		if (toDecrypt) {
			// calling encrypt function to encrypt pii
			console.time('encrypt')
			let encrypt = await global.kmsLayers.encrypt(o)
			// console.log('encrypted',encrypt)
			console.timeEnd('encrypt')
			return encrypt
		}
	}
	return o
}

exports.scan = async (tableName, query, ...theArgs) => {
	try {
		if (typeof tableName !== 'string' && tableName !== '') {
			throw new Error('tableName should be string')
		}
		if (typeof query !== 'object' || Object.entries(query).length === 0) {
			throw new Error('Key should be object')
		}
		let params = {
			TableName: tableName,
			ScanFilter: {}
		}
		let index, projection, pii
		for (let i = 0; i < theArgs.length; i++) {
			if (i === 0 && typeof theArgs[i] === 'string') {
				index = theArgs[i]
			} else if (i === 1 && typeof theArgs[i] === 'string') {
				index = theArgs[i]
			} else if (i === 1 && typeof theArgs[i] === 'object') {
				if (theArgs[i]['pii']) {
					pii = true
					delete theArgs[i]['pii']
					//console.log(theArgs[i], theArgs[i].length)
				}
				if (theArgs[i].length) projection = theArgs[i]
				// projection = theArgs[i]
			} else if (i === 2 && typeof theArgs[i] === 'object') {
				if (theArgs[i]['pii']) {
					pii = true
					delete theArgs[i]['pii']
					//console.log(theArgs[i], theArgs[i].length)
				}
				if (theArgs[i].length) projection = theArgs[i]
				// projection = theArgs[i]
			} else if (i === 3 && typeof theArgs[i] === 'object') {
				if (theArgs[i]['pii']) {
					pii = true
					delete theArgs[i]['pii']
					//console.log(theArgs[i], theArgs[i].length)
				}
				if (theArgs[i].length) projection = theArgs[i]
				// projection = theArgs[i]
			}
		}
		if (typeof index !== 'undefined') {
			params['IndexName'] = index
		}
		if (typeof projection !== 'undefined') {
			params['AttributesToGet'] = Object.keys(projection)
		}

		let keys = Object.keys(query)
		keys.forEach((item) => {
			params['ScanFilter'][item] = {
				ComparisonOperator: 'EQ',
				AttributeValueList: [query[item]]
			}
		})
		let result = await awsfun(client, 'scan', params)
		if (pii) {
			let dec_obj = await global.kmsLayers.decrypt(result['Items'])
			//console.timeEnd('timetodecrypt')
			return dec_obj
		}
		return result['Items']
	} catch (e) {
		throw new Error(e.message)
	}
}

exports.find = async (tableName, query, ...theArgs) => {
	try {
		if (typeof tableName !== 'string' && tableName !== '') {
			throw new Error('tableName should be string')
		}
		if (typeof query !== 'object' || Object.entries(query).length === 0) {
			throw new Error('Key should be object')
		}
		let index, filter, projection, limit, lastEvaluatedKey, pii
		for (let i = 0; i < theArgs.length; i++) {
			if (i === 0 && typeof theArgs[i] === 'string') {
				index = theArgs[i]
			} else if (i === 0 && typeof theArgs[i] === 'object') {
				filter = theArgs[i]
			} else if (i === 1 && typeof theArgs[i] === 'string') {
				index = theArgs[i]
			} else if (i === 1 && typeof theArgs[i] === 'object') {
				if (theArgs[i]['pii']) {
					pii = true
					delete theArgs[i]['pii']
					//console.log(theArgs[i], theArgs[i].length)
				}
				if (theArgs[i].length) projection = theArgs[i]
				//projection = theArgs[i]
			} else if (i === 1 && typeof theArgs[i] === 'number') {
				limit = theArgs[i]
			} else if (i === 2 && typeof theArgs[i] === 'number') {
				limit = theArgs[i]
			} else if (i === 2 && typeof theArgs[i] === 'object') {
				if (theArgs[i]['pii']) {
					pii = true
					delete theArgs[i]['pii']
					//console.log(theArgs[i], theArgs[i].length)
				}
				if (theArgs[i].length) projection = theArgs[i]
				//projection = theArgs[i]
			} else if (i === 2 && typeof theArgs[i] === 'string') {
				lastEvaluatedKey = theArgs[i]
			} else if (i === 3 && typeof theArgs[i] === 'object') {
				if (theArgs[i]['pii']) {
					pii = true
					delete theArgs[i]['pii']
					//console.log(theArgs[i], theArgs[i].length)
				}
				if (theArgs[i].length) projection = theArgs[i]
				//projection = theArgs[i]
			} else if (i === 3 && typeof theArgs[i] === 'string') {
				index = theArgs[i]
			} else if (i === 4 && typeof theArgs[i] === 'object') {
				lastEvaluatedKey = theArgs[i]
			}
		}

		let params = {
			TableName: tableName,
			KeyConditions: {}
		}

		if (lastEvaluatedKey) {
			params['ExclusiveStartKey'] = lastEvaluatedKey
		}

		if (index) {
			params['IndexName'] = index
			// encryption change
			// Index Hashing is called to check if the index is pii
			// if it is pii, the value is converted to hash for find query in db
			// let new_query = await global.kmsLayers.indexEncryption(index, query)
			// query = new_query
		}
		if (filter) {
			let keys = Object.keys(filter)
			params['QueryFilter'] = {}
			keys.forEach((item) => {
				let fkey = 'EQ'
				let fvalue = filter[item]
				if (typeof filter[item] === 'object') {
					fkey = Object.keys(filter[item])[0]
					fvalue = filter[item][fkey]
				}
				params['QueryFilter'][item] = {
					ComparisonOperator: fkey,
					AttributeValueList: [fvalue]
				}
			})
		}
		if (projection) {
			params['AttributesToGet'] = Object.keys(projection)
		}
		if (limit) {
			params['Limit'] = limit
		}

		let keys = Object.keys(query)
		keys.forEach((item) => {
			let fkey = 'EQ'
			let fvalue = query[item]
			if (typeof query[item] === 'object') {
				fkey = Object.keys(query[item])[0]
				fvalue = query[item][fkey]
			}
			params['KeyConditions'][item] = {
				ComparisonOperator: fkey,
				AttributeValueList: [fvalue]
			}
		})
		let result = await awsfun(client, 'query', params)
		if (result['LastEvaluatedKey']) {
			result['Items'].map((value) => {
				value.lastEvaluatedKey = result['LastEvaluatedKey']
			})
		}
		// encryption change
		// call decrypt function to decrypt the pii and return plain data to code
		if (pii) {
			//console.time('timetodecrypt')
			let dec_obj = await global.kmsLayers.decrypt(result['Items'])
			//console.timeEnd('timetodecrypt')
			return dec_obj
		}
		return result['Items']
	} catch (e) {
		throw new Error(e.message)
	}
}

exports.findPagination = async (tableName, query, ...theArgs) => {
	try {
		if (typeof tableName !== 'string' && tableName !== '') {
			throw new Error('tableName should be string')
		}
		if (typeof query !== 'object' || Object.entries(query).length === 0) {
			throw new Error('Key should be object')
		}
		let index, filter, projection, limit, lastEvaluatedKey
		for (let i = 0; i < theArgs.length; i++) {
			if (i === 0 && typeof theArgs[i] === 'string') {
				index = theArgs[i]
			} else if (i === 0 && typeof theArgs[i] === 'object') {
				filter = theArgs[i]
			} else if (i === 1 && typeof theArgs[i] === 'string') {
				index = theArgs[i]
			} else if (i === 1 && typeof theArgs[i] === 'object') {
				projection = theArgs[i]
			} else if (i === 1 && typeof theArgs[i] === 'number') {
				limit = theArgs[i]
			} else if (i === 2 && typeof theArgs[i] === 'number') {
				limit = theArgs[i]
			} else if (i === 2 && typeof theArgs[i] === 'object') {
				projection = theArgs[i]
			} else if (i === 2 && typeof theArgs[i] === 'string') {
				lastEvaluatedKey = theArgs[i]
			} else if (i === 3 && typeof theArgs[i] === 'object') {
				projection = theArgs[i]
			} else if (i === 3 && typeof theArgs[i] === 'string') {
				index = theArgs[i]
			} else if (i === 4 && typeof theArgs[i] === 'object') {
				lastEvaluatedKey = theArgs[i]
			}
		}

		let params = {
			TableName: tableName,
			KeyConditions: {}
		}

		if (lastEvaluatedKey) {
			params['ExclusiveStartKey'] = lastEvaluatedKey
		}

		if (index) {
			params['IndexName'] = index
		}
		if (filter) {
			let keys = Object.keys(filter)
			params['QueryFilter'] = {}
			keys.forEach((item) => {
				let fkey = 'EQ'
				let fvalue = filter[item]
				if (typeof filter[item] === 'object') {
					fkey = Object.keys(filter[item])[0]
					fvalue = filter[item][fkey]
				}
				params['QueryFilter'][item] = {
					ComparisonOperator: fkey,
					AttributeValueList: [fvalue]
				}
			})
		}
		if (projection) {
			params['AttributesToGet'] = Object.keys(projection)
		}
		if (limit) {
			params['Limit'] = limit
		}
		let keys = Object.keys(query)
		keys.forEach((item) => {
			let fkey = 'EQ'
			let fvalue = query[item]
			if (typeof query[item] === 'object') {
				fkey = Object.keys(query[item])[0]
				fvalue = query[item][fkey]
			}
			params['KeyConditions'][item] = {
				ComparisonOperator: fkey,
				AttributeValueList: [fvalue]
			}
		})
		let result = await awsfun(client, 'query', params)

		let count = result.Count
		let scannedcount = result.ScannedCount
		let data = result

		if (count < limit && result['LastEvaluatedKey']) {
			result = await getalllimitdata(client, 'query', params, data, result, count, scannedcount, limit)
		}

		if (result['LastEvaluatedKey']) {
			result['Items'].map((value) => {
				value.lastEvaluatedKey = result['LastEvaluatedKey']
			})
		}
		return result['Items']
	} catch (e) {
		throw new Error(e.message)
	}
}

// Finding all records from specified table and with required filter, projection, limit
exports.findAll = async (tableName, query, ...theArgs) => {
	try {
		if (typeof tableName !== 'string' && tableName !== '') {
			throw new Error('TableName should be string')
		}
		if (typeof query !== 'object' || Object.entries(query).length === 0) {
			throw new Error('Key should be object')
		}
		let index, filter, projection, limit, pii
		for (let i = 0; i < theArgs.length; i++) {
			if (i === 0 && typeof theArgs[i] === 'string') {
				index = theArgs[i]
			} else if (i === 0 && typeof theArgs[i] === 'object') {
				filter = theArgs[i]
			} else if (i === 1 && typeof theArgs[i] === 'string') {
				index = theArgs[i]
			} else if (i === 1 && typeof theArgs[i] === 'object') {
				if (theArgs[i]['pii']) {
					pii = true
					delete theArgs[i]['pii']
					//console.log(theArgs[i], theArgs[i].length)
				}
				if (theArgs[i].length) projection = theArgs[i]
				//projection = theArgs[i]
			} else if (i === 2 && typeof theArgs[i] === 'number') {
				limit = theArgs[i]
			} else if (i === 2 && typeof theArgs[i] === 'object') {
				if (theArgs[i]['pii']) {
					pii = true
					delete theArgs[i]['pii']
					//console.log(theArgs[i], theArgs[i].length)
				}
				if (theArgs[i].length) projection = theArgs[i]
				//projection = theArgs[i]
			} else if (i === 3 && typeof theArgs[i] === 'object') {
				if (theArgs[i]['pii']) {
					pii = true
					delete theArgs[i]['pii']
					//console.log(theArgs[i], theArgs[i].length)
				}
				if (theArgs[i].length) projection = theArgs[i]
				//projection = theArgs[i]
			}
		}

		let params = {
			TableName: tableName,
			KeyConditions: {}
		}
		if (index) {
			params['IndexName'] = index
		}
		if (filter) {
			let keys = Object.keys(filter)
			params['QueryFilter'] = {}
			keys.forEach((item) => {
				let fkey = 'EQ'
				let fvalue = filter[item]
				if (typeof filter[item] === 'object') {
					fkey = Object.keys(filter[item])[0]
					fvalue = filter[item][fkey]
				}
				params['QueryFilter'][item] = {
					ComparisonOperator: fkey,
					AttributeValueList: [fvalue]
				}
			})
		}
		if (projection) {
			params['AttributesToGet'] = Object.keys(projection)
		}
		if (limit) {
			params['Limit'] = limit
		}
		let keys = Object.keys(query)
		keys.forEach((item) => {
			let fkey = 'EQ'
			let fvalue = query[item]
			if (typeof query[item] === 'object') {
				fkey = Object.keys(query[item])[0]
				fvalue = query[item][fkey]
			}
			params['KeyConditions'][item] = {
				ComparisonOperator: fkey,
				AttributeValueList: _.isArray(fvalue) ? fvalue : [fvalue]
			}
		})

		// Recursively fetching records via pagination using 'query' method with 'LastEvaluatedKey' and 'ExclusiveStartKey' primary key technique
		var result = await awsfun(client, 'query', params)
		let pageData = result
		result = await getAllPageData(client, 'query', params, result, pageData)
		if (pii) {
			let dec_obj = await global.kmsLayers.decrypt(result['Items'])
			return dec_obj
		}
		return result['Items']
	} catch (e) {
		throw new Error(e.message)
	}
}

exports.findN = async (tableName, query, ...theArgs) => {
	try {
		if (typeof tableName !== 'string' && tableName !== '') {
			throw new Error('tableName should be string')
		}
		if (typeof query !== 'object' || Object.entries(query).length === 0) {
			throw new Error('Key should be object')
		}

		let projection, pii
		for (let i = 0; i < theArgs.length; i++) {
			if (i === 0 && typeof theArgs[i] === 'object') {
				if (theArgs[i]['pii']) {
					pii = true
					delete theArgs[i]['pii']
					//console.log(theArgs[i], theArgs[i].length)
				}
				if (theArgs[i].length) projection = theArgs[i]
				//projection = theArgs[i]
			}
		}

		let params = {
			RequestItems: {}
		}
		params['RequestItems'][tableName] = {}
		let keys = Object.keys(query)
		let tempQuery = query[keys[0]]['IN'].map((x) => {
			let y = {}
			y[keys[0]] = x
			return y
		})
		params['RequestItems'][tableName] = {
			Keys: tempQuery
		}
		if (projection) {
			params['RequestItems'][tableName]['AttributesToGet'] = Object.keys(projection)
		}
		let result = await awsfun(client, 'batchGet', params)
		if (pii) {
			let dec_obj = await global.kmsLayers.decrypt(['Responses'][tableName])
			return dec_obj
		}
		return result['Responses'][tableName]
	} catch (e) {
		throw new Error(e.message)
	}
}

exports.findOne = async (tableName, query, ...theArgs) => {
	try {
		// console.log('inside findOne', ...theArgs)
		let projection, index, filter, pii
		for (let i = 0; i < theArgs.length; i++) {
			if (i === 0 && typeof theArgs[i] === 'object') {
				// check is pii is present in projection
				console.log('theArgs[i] part of projection', theArgs[i])
				if (theArgs[i]['pii']) {
					pii = true
					delete theArgs[i]['pii']
					//console.log(theArgs[i], theArgs[i].length)
				}
				if (theArgs[i].length) projection = theArgs[i]
			} else if (i === 1 && typeof theArgs[i] === 'object') {
				filter = theArgs[i]
			} else if (i === 0 && typeof theArgs[i] === 'string') {
				index = theArgs[i]
			} else if (i === 1 && typeof theArgs[i] === 'string') {
				index = theArgs[i]
			}
		}

		let params = {
			Key: query,
			TableName: tableName
		}

		if (filter) {
			let keys = Object.keys(filter)
			params['QueryFilter'] = {}
			keys.forEach((item) => {
				let fkey = 'EQ'
				let fvalue = filter[item]
				if (typeof filter[item] === 'object') {
					fkey = Object.keys(filter[item])[0]
					fvalue = filter[item][fkey]
				}
				params['QueryFilter'][item] = {
					ComparisonOperator: fkey,
					AttributeValueList: [fvalue]
				}
			})
		}

		if (index) {
			params['IndexName'] = index
		}
		if (typeof projection !== 'undefined') {
			params['AttributesToGet'] = Object.keys(projection)
		}
		let result = await awsfun(client, 'get', params)
		if (pii) {
			console.time('timetodecrypt')
			let dec_obj = await global.kmsLayers.decrypt(result['Item'])
			console.timeEnd('timetodecrypt')
			return dec_obj
		}
		return result['Item']

		//return result["Item"];
	} catch (e) {
		throw new Error(e.message)
	}
}

exports.updateOne = async (tableName, query, update, ...theArgs) => {
	try {
		// ReturnValues: NONE | ALL_OLD | UPDATED_OLD | ALL_NEW | UPDATED_NEW,
		// {'$set' : {},$inc : {}}

		let returnvalues, filter, index
		for (let i = 0; i < theArgs.length; i++) {
			if (i === 0 && typeof theArgs[i] === 'string') {
				returnvalues = theArgs[i]
			} else if (i === 1 && typeof theArgs[i] === 'string') {
				index = theArgs[i]
			} else if (i === 0 && typeof theArgs[i] === 'object') {
				filter = theArgs[i]
			}
		}

		let params = {
			Key: await removeEmpty(query, tableName),
			TableName: tableName,
			AttributeUpdates: {},
			ReturnValues: typeof returnvalues === 'undefined' ? 'NONE' : returnvalues
		}

		if (index) {
			params['IndexName'] = index
		}

		if (filter) {
			let keys = Object.keys(filter)
			params['QueryFilter'] = {}
			keys.forEach((item) => {
				let fkey = 'EQ'
				let fvalue = filter[item]
				if (typeof filter[item] === 'object') {
					fkey = Object.keys(filter[item])[0]
					fvalue = filter[item][fkey]
				}
				params['QueryFilter'][item] = {
					ComparisonOperator: fkey,
					AttributeValueList: [fvalue]
				}
			})
		}

		if (update['$set']) {
			// if the type of update is set 
			// remove Empty will encrypt the pii based on config
			// and will add it to the new params for update
			let newObj = await removeEmpty(update['$set'], tableName)
			let keys = Object.keys(newObj)

			keys.forEach((item) => {
				params['AttributeUpdates'][item] = {
					Action: 'PUT',
					Value: newObj[item]
				}
			})
		}
		if (update['$inc']) {
			// if the type of update is inc 
			// remove Empty will encrypt the pii based on config
			// and will add it to the new params for increment
			let newObj = await removeEmpty(update['$set'], tableName)
			let keys = Object.keys(newObj)
			keys.forEach((item) => {
				params['AttributeUpdates'][item] = {
					Action: 'ADD',
					Value: newObj[item]
				}
			})
		}
		if (update['$del']) {
			// if the type of update is del 
			// remove Empty will encrypt the pii based on config
			// and will add it to the new params for delete
			let newObj = await removeEmpty(update['$set'], tableName)
			let keys = Object.keys(newObj)
			keys.forEach((item) => {
				params['AttributeUpdates'][item] = {
					Action: 'DELETE'
				}
			})
		}
		let result = await awsfun(client, 'update', params)
		return result['Attributes']
	} catch (e) {
		throw new Error(e.message)
	}
}

exports.updateOneWithEmpty = async (tableName, query, update, ...theArgs) => {
	try {
		// ReturnValues: NONE | ALL_OLD | UPDATED_OLD | ALL_NEW | UPDATED_NEW,
		// {'$set' : {},$inc : {}}

		let returnvalues, filter, index
		for (let i = 0; i < theArgs.length; i++) {
			if (i === 0 && typeof theArgs[i] === 'string') {
				returnvalues = theArgs[i]
			} else if (i === 1 && typeof theArgs[i] === 'string') {
				index = theArgs[i]
			} else if (i === 0 && typeof theArgs[i] === 'object') {
				filter = theArgs[i]
			}
		}

		let params = {
			Key: await removeEmpty(query, tableName),
			TableName: tableName,
			AttributeUpdates: {},
			ReturnValues: typeof returnvalues === 'undefined' ? 'NONE' : returnvalues
		}

		if (index) {
			params['IndexName'] = index
		}

		if (filter) {
			let keys = Object.keys(filter)
			params['QueryFilter'] = {}
			keys.forEach((item) => {
				let fkey = 'EQ'
				let fvalue = filter[item]
				if (typeof filter[item] === 'object') {
					fkey = Object.keys(filter[item])[0]
					fvalue = filter[item][fkey]
				}
				params['QueryFilter'][item] = {
					ComparisonOperator: fkey,
					AttributeValueList: [fvalue]
				}
			})
		}

		if (update['$set']) {
			let keys = Object.keys(update['$set'])
			keys.forEach((item) => {
				params['AttributeUpdates'][item] = {
					Action: 'PUT',
					Value: update['$set'][item]
				}
			})
		}
		if (update['$inc']) {
			let keys = Object.keys(update['$inc'])
			keys.forEach((item) => {
				params['AttributeUpdates'][item] = {
					Action: 'ADD',
					Value: update['$inc'][item]
				}
			})
		}
		if (update['$del']) {
			let keys = Object.keys(update['$del'])
			keys.forEach((item) => {
				params['AttributeUpdates'][item] = {
					Action: 'DELETE',
					Value: true
				}
			})
		}
		let result = await awsfun(client, 'update', params)
		return result['Attributes']
	} catch (e) {
		throw new Error(e.message)
	}
}

exports.insertOne = async (tableName, query, ...theArgs) => {
	try {
		// ReturnValues: NONE | ALL_OLD | UPDATED_OLD | ALL_NEW | UPDATED_NEW,
		// {'$set' : {},$inc : {}}

		let returnvalues
		for (let i = 0; i < theArgs.length; i++) {
			if (i === 0 && typeof theArgs[i] === 'string') {
				returnvalues = theArgs[i]
			}
		}
		// calling removeEmpty to encrypt pii before inserting in db
		let params = {
			Item: await removeEmpty(query, tableName),
			TableName: tableName,
			ReturnValues: typeof returnvalues === 'undefined' ? 'NONE' : returnvalues
		}
		let result = await awsfun(client, 'put', params)
		return result['Attributes']
	} catch (e) {
		throw new Error(e.message)
	}
}

exports.countDocuments = async (tableName, query, ...theArgs) => {
	try {
		if (typeof tableName !== 'string' && tableName !== '') {
			throw new Error('tableName should be string')
		}
		if (typeof query !== 'object' || Object.entries(query).length === 0) {
			throw new Error('Key should be object')
		}
		let index, filter
		for (let i = 0; i < theArgs.length; i++) {
			if (i === 0 && typeof theArgs[i] === 'string') {
				index = theArgs[i]
			} else if (i === 0 && typeof theArgs[i] === 'object') {
				filter = theArgs[i]
			} else if (i === 1 && typeof theArgs[i] === 'string') {
				index = theArgs[i]
			}
		}

		let params = {
			TableName: tableName,
			KeyConditions: {},
			Select: 'COUNT'
		}
		if (index) {
			params['IndexName'] = index
		}
		if (filter) {
			let keys = Object.keys(filter)
			params['QueryFilter'] = {}
			keys.forEach((item) => {
				let fkey = 'EQ'
				let fvalue = filter[item]
				if (typeof filter[item] === 'object') {
					fkey = Object.keys(filter[item])[0]
					fvalue = filter[item][fkey]
				}
				params['QueryFilter'][item] = {
					ComparisonOperator: fkey,
					AttributeValueList: [fvalue]
				}
			})
		}
		let keys = Object.keys(query)
		keys.forEach((item) => {
			let fkey = 'EQ'
			let fvalue = query[item]
			if (typeof query[item] === 'object') {
				fkey = Object.keys(query[item])[0]
				fvalue = query[item][fkey]
			}
			params['KeyConditions'][item] = {
				ComparisonOperator: fkey,
				AttributeValueList: [fvalue]
			}
		})
		var result = await awsfun(client, 'query', params)
		let pageData = result
		// Get count of all documents recursively with pagination technique
		result = await getAllDocumentDataCount(client, 'query', params, result, pageData)
		return result['Count']
	} catch (e) {
		throw new Error(e.message)
	}
}

exports.remove = async (tableName, query) => {
	try {
		let params = {
			TableName: tableName,
			Key: query
		}
		let result = await awsfun(client, 'delete', params)
		return result['Attributes']
	} catch (e) {
		throw new Error(e.message)
	}
}

exports.insertMany = async (tableName, query) => {
	try {
		let params = {
			RequestItems: {}
		}
		params['RequestItems'][tableName] = query.map(async (x) => {
			let obj = {}
			obj['PutRequest'] = {}
			obj['PutRequest']['Item'] = await removeEmpty(x, tableName)
			return obj
		})
		let result = await awsfun(client, 'batchWrite', params)
		return result
	} catch (e) {
		throw Error(e)
	}
}

exports.core = async (option, query) => {
	try {
		console.time('core')
		// console.log('query',query['TransactItems'])
		let encrypted_data = await global.kmsLayers.encryptCore(option, JSON.parse(JSON.stringify(query)))
		console.timeEnd('core')
		query = encrypted_data
		let result = await awsfun(client, option, query)
		return result
	} catch (e) {
		throw new Error(e.message)
	}
}

exports.corepagination = async (option, query, cacheParam, limit) => {
	try {
		let params = query
		let result = await awsfun(client, option, params)
		let count = result.Count
		let scannedcount = result.ScannedCount
		let data = result

		if (count < limit && result['LastEvaluatedKey']) {
			result = await getalllimitdata(client, 'query', params, data, result, count, scannedcount, limit)
		}

		if (result['LastEvaluatedKey']) {
			result['Items'].map((value) => {
				value.lastEvaluatedKey = result['LastEvaluatedKey']
			})
		}
		return result['Items']
	} catch (e) {
		throw new Error(e.message)
	}
}

module.exports.findCache = async (tableName, query_params, index) => {
	try {
		console.log('inside findCache', tableName, query_params, index)
		let key = await keyMaker(query_params)
		return await getCache(key, tableName, this.find, query_params, index)
	} catch (err) {
		console.log(err)
		throw err
	}
}
module.exports.findOneCache = async (tableName, query_params, index) => {
	try {
		console.log('inside findCache', tableName, query_params, index)
		let key = await keyMaker(query_params)
		return await getCache(key, tableName, this.findOne, query_params, index)
	} catch (err) {
		console.log(err)
		throw err
	}
}

module.exports.findAllCache = async (tableName, query_params, index) => {
	try {
		console.log('inside findCache', tableName, query_params, index)
		let key = await keyMaker(query_params)
		return await getCache(key, tableName, this.findAll, query_params, index)
	} catch (err) {
		console.log(err)
		throw err
	}
}
const getCache = async (key, tableName, method, query_params, index) => {
	try {
		console.log('inside getCache', key, tableName, query_params, index)
		let file = await fs.existsSync(global.cache_fileName)
		if (!file) {
			fs.writeFileSync(global.cache_fileName, JSON.stringify({}))
			let result = await findData(tableName, method, query_params, index)
			await setCache(key, result)
			return result
		}
		let data = await fs.readFileSync(global.cache_fileName)
		data = JSON.parse(data)
		if (data[key] && data[key].ttl <= +new Date()) {
			console.log('cache expired')
			delete data[key]
			fs.writeFileSync(global.cache_fileName, JSON.stringify(data))
			return await findData(tableName, method, query_params, index)
		}
		if (data[key]) return data[key].cache
		let result = await findData(tableName, method, query_params, index)
		await setCache(key, result)
		return result
	} catch (err) {
		throw err
	}
}
const setCache = async (key, value) => {
	try {
		console.log('inside set cache', key)
		let cache_data = await fs.readFileSync(global.cache_fileName)
		cache_data = JSON.parse(cache_data)
		cache_data[key] = { cache: value, ttl: +new Date().setMinutes(new Date().getMinutes() + Number(process.env.CACHETTL)) }
		fs.writeFileSync(global.cache_fileName, JSON.stringify(cache_data))
		return true
	} catch (err) {
		throw err
	}
}
const findData = async (tableName, method, query_params, index) => {
	try {
		console.log('inside findData', tableName, method, query_params, index)
		if (!tableName) throw new Error('table name not provided')
		return await method(`${tableName}`, query_params, index)
	} catch (err) {
		console.log('searching in table error occurred', err)
		throw err
	}
}

const keyMaker = async (query) => {
	try {
		let _id = Object.values(query)[0]
		let key = Object.values(query)[1]
		if (!key) return _id
		return `${_id}_${key}`
	} catch (err) {
		console.log(err)
		throw err
	}
}
