const { Worker, isMainThread, parentPort } = require('worker_threads');
const AWS = require('aws-sdk');
const { findOne } = require('@hdworks/dynamo-db-wrapper')
const NUM_WORKERS = 2;
const ids = require('./userIds.js')
if (isMainThread) {

    console.time()
    const workers = [];
    for (let i = 0; i < NUM_WORKERS; i++) {
        workers.push(new Worker(__filename));
    }

    
    for (let i = 0; i < NUM_WORKERS; i++) {
        
        workers[i].postMessage(i+1);
    }

    let count = 0;
    const data = {};
    workers.forEach((worker) => {
        worker.on('message', (message) => {
            Object.assign(data, message);
            count++;
            if (count === NUM_WORKERS) {
                console.log(data);
                console.timeEnd()
            }
            worker.terminate();
        });
    });
} else {
    const fetchData = async (i) => {
        let numFile = `userId${i}`
        console.log(numFile)
        let userIds = ids[numFile].data
        if (userIds.length > 0) {
            let results = []
            for (const userId of userIds) {
                let data = await findOne('users', { _id: userId })
                results.push(data)
            }
            let data = {}
            for (const result of results) {
                data[result?._id] = result?.screenName
            }
            // console.log(data)
            return data;    
        }
    };
    parentPort.on('message', async (i) => {
        const data = await fetchData(i);
        parentPort.postMessage(data);
    });
}

// const { findOne, insertOne } = require('@hdworks/dynamo-db-wrapper')
// const addIndexTable = async (_id) => {
//   let userSocialId = await findOne('users', { _id: _id }, { 'googleId': 1 })
//   await insertOne('IndexTable', { pk: `googleId-${userSocialId['googleId']}`, sk: `googleId-index`, userId: _id, createdAt: +new Date() })
  
// }

// addIndexTable('560da7b2c82ed21f1abaded94d7ff337')

// const AWS = require('aws-sdk');
// const dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'ap-south-1' });
// const fs = require('fs')

// async function fetchItems() {
//     console.time()

//     const params = {
//         TableName: 'users',
//         IndexName: 'kycStatus-index',
//         KeyConditionExpression: 'kycStatus = :status',
//         ExpressionAttributeValues: {
//             ':status': 'processing',
//         }
//         //   ExclusiveStartKey:{_id: '73e8dbyc67dm6np'}
//     };
//     let arr =  []
//     const result = await dynamodb.query(params).promise();
//      result?.Items?.map((rs)=>
//      {
//        arr.push(rs._id)
//      })
//      fs.appendFileSync('./userIds.txt',JSON.stringify(arr))
//     // console.log(result.Items)
//     console.timeEnd()
// }

// fetchItems()