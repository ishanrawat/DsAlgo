

// const poc = async()=>{

// for(let i = BigInt(0);i <BigInt(9000000);i++){
//     newFunc().then((data)=>{
//         console.log(data)
//     }).catch((err)=>{
//         console.log(err)
//     })

// }
// }


// const newFunc = async()=>{
// return new Promise((resolve,reject)=>{
//     let str = 'just'
//     let obj = {
//         a:1,
//         b:"dkjfakljdkjaklj"
//     }

//     resolve('here')
// })
// }

// poc()

// const path = require('path')



// var the_arr = __dirname.split('/');
// the_arr.pop()
// let pathnew = the_arr.join('/')

// const basePath = `${path.join(pathnew, './')}`
// console.log(basePath)
// let item = {
//     "accountName": "Savings",
//     "accountNumber": "hhhhhhhhhh",
//     "bankApproved": true,
//     "bankName": "ICICI Bank",
//     "bankStatus": "approved",
//     "bankUpdatedAt": 1597948200000,
//     "ifscCode": "ICIC0000009",
//     "isActive": true
//    }
// let EMSpushDeletedBankdetails = {
//     "event": "BankAccountDetails",
//     "userId": 'dfgfd',
//     "accountNumber": "",
//     "bankName": "",
//     "ifscCode": "",
//     "channelType": "APS",
//     "vpaWalletId": null,
//     "accountHolderName": '',
//     "actionFlag": "D"
// }
//  EMSpushDeletedBankdetails = {...EMSpushDeletedBankdetails,accountName:item.accountName,bankName:item.bankName,ifscCode:item.ifscCode,accountHolderName:item.accountName}
// console.log(EMSpushDeletedBankdetails)

// // console.log(EMSpushDeletedBankdetails)
// const { findOne, findPagination, insertOne } = require('@hdworks/dynamo-db-wrapper')
// const checkTTL = async () => {
//     // await insertOne('logs_table', { _id: '17778', userId: 'testttl', ttl: parseInt(+new Date()/1000) })
//     let abc = await findOne('logs_table', { _id: '17778', userId: 'testttl' })
//     console.log(abc)
// }


// checkTTL()

// const { find, findOne, updateOne, insertOne } = require('@hdworks/dynamo-db-wrapper')

// const checkQuery = async () => {
//     // let socialIDExists = await insertOne('IndexTable', { pk: 'appleId', sk: 'vivwkbonAddCash', userId:'1x33d0c2b9469xax',updatedAt: +new Date()})
//     // await insertOne('IndexTable', { pk: 'typeOfRegistration', sk: 'id', userId: '_id', updatedAt: +new Date() })
//     // console.log(socialIDExists)

//     let params = {
//         TransactItems: [
//             {
//                 Delete: {
//                     TableName: 'IndexTable',
//                     Key: { pk: 'typeOfRegistration', sk: 'id' },
//                     ReturnValues: 'NONE'
//                 }
//             }]
//     }
//     await core('transactWrite', params)
// }

// const core = async (option, query) => {
//     try {
//         let result = await awsfun(client, option, query);
//         return result;
//     } catch (e) {
//         throw new Error(e.message);
//     }
// };


// const AWS = require("aws-sdk");
// let dynamodb = new AWS.DynamoDB({
//     region:'ap-south-1',
//     apiVersion: "2012-08-10"
// });

// dynamodb = new AWS.DynamoDB.DocumentClient({ service: dynamodb });
// let client = dynamodb;


// const awsfun = (type, method, params) => {
//     return new Promise((resolve, reject) => {
//         type[method](params, (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// };


// checkQuery()





let a = undefined
switch(a){
    case !a:
        console.log('here')
}