// const AWS = require('aws-sdk');
// const dynamodb = new AWS.DynamoDB({ region: 'ap-south-1' });


// const getCount = async (startrange, _id) => {
//     let pkey = _id+'#aadharLite'
//     console.log(startrange)
//     const params = {
//         TableName: 'IndexTable',
//         Select: 'COUNT',
//         KeyConditionExpression: 'pk = :pkval AND sk BETWEEN :minsk AND :maxsk',
//         ExpressionAttributeValues: {
//             ':pkval': { S: pkey},
//             ':minsk': { S: String(startrange) },
//             ':maxsk': { S: String(+new Date()) }
//         }
//     };

//     let data = await dynamodb.query(params).promise()
//     // console.log(data.Count)
//     return data?.Count

// }
// const aadharLiteCount = async (timeStamp,_id) => {
//     let minRange = timeStamp - 60
//     let hourRange = timeStamp - (60 * 60)
//     let dailyRange = timeStamp - (24 * 60 * 60)
//     let minCount = await getCount(minRange,_id)
//     let hourCount = await getCount(hourRange,_id)
//     let dailyCount = await getCount(dailyRange,_id)
//     console.log(minCount, hourCount,dailyCount)
// }

// aadharLiteCount(+new Date(),123)




const { updateOne, insertOne, findOne } = require('@hdworks/dynamo-db-wrapper')

// const getLifeTimeCount = async (_id) => {
//     console.log(_id,'in get life time count fn')
//     let indexData = await findOne('IndexTable',{pk:_id,sk:'aadharLite'})
//     if(!indexData?.count) await insertOne('IndexTable',{pk:_id,sk:'aadharLite',count:0})
//     return parseInt(indexData?.count) || 0

// }
// const aadharLiteCount = async (_id) => {
//     console.log(_id,'inside aadhar count fn')
//     let configurableAmountConfig = await findOne('ace_config',{_id:'pf-kyc-verification-config',s_key:'kyc-aadhar-lite-config'})
//     let configurableAmount = configurableAmountConfig.aadharLiteMaxCount
//     let totCount = await getLifeTimeCount(_id)
//     if (totCount > configurableAmount) return false
//     await updateOne('IndexTable',{pk:String(_id),sk:'aadharLite'},{$set:{count:totCount+1}})
//     return true

// }

// aadharLiteCount('ishanrawat').then((data) => {
//     console.log(data)
// })

aadharLiteCount('adsjkdasjkcj')
const aadharLiteCount = async (_id) => {
    console.log(_id, 'inside aadhar count function')
    let { aadharLiteMaxCount } = await findOne('ace_config', { _id: 'pf-kyc-verification-config', s_key: 'kyc-aadhar-lite-config' })
    let totalCount = await findOne('users_metadata', { pk: `user#${_id}`, sk: 'aadharLiteCount' })
    if (!totalCount) {
        await updateOne('users_metadata', { pk: `user#${_id}`, sk: 'aadharLiteCount' }, { $set: { count: 1 } })
        return true
    }

    if (totalCount.count > aadharLiteMaxCount) return false
    await updateOne('users_metadata', { pk: `user#${_id}`, sk: 'aadharLiteCount' }, { $set: { count: ++(totalCount.count) } })

    return true
}




