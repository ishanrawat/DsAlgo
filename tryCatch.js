// const testFunc = () => {
//     try {
//         anotherFunc1()
//     } catch (error) {
//         console.log('error in test func',error)
//     }
// }

// const anotherFunc = () => {
//     throw new Error('It aint working')
// }
// const anotherFunc1 = () => {
//     anotherFunc()
// }


// testFunc()
// let user = {
//     "_id": "bdeb59729af5105b",
//     "a23ConvDate": 1597938200000,
//     "a23RegDate": 1597937880000,
//     "a23UserID": "kUy0204-deleted",
//     "aadharApproved": false,
//     "aceLevelUpdatedAt": 1597938200000,
//     "ace_level": 1,
//     "address": "hydhsakhdka kjds",
//     "appleId": "undefined-deleted",
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
//     "code": "4J4PQJ-deleted",
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
//     "displayName": "kuy0204-deleted",
//     "email": "122HJ@mail.com",
//     "emailVerified": true,
//     "exp": 0,
//     "extraCash": 0,
//     "facebookId": "undefined-deleted'",
//     "funBalance": 5000,
//     "gender": "Female",
//     "googleId": "undefined-deleted",
//     "holdAcePoints": 60,
//     "ip": "11.22.33.44",
//     "kyc1": true,
//     "kyc2": false,
//     "kyc3": true,
//     "kyc4": true,
//     "kycDocApprovedAt": 1458289245000,
//     "kycDocApprovedBy": "Mallikarjun.D",
//     "kycDocNumber": "FTN63Z0030852007",
//     "kycDocStatus": "approved",
//     "kycDocType": "driving-licence",
//     "kycMessage": "Your PAN Is Verified",
//     "kycUpdatedAt": 1598052259000,
//     "kycUserName": "M H R",
//     "lastAceLevel": 1,
//     "lastActiveDate": 1633367422000,
//     "levelno": "bronze",
//     "manualRedeemAvailable": true,
//     "maxAceLevel": 1,
//     "maxTotalAcePoints": 49,
//     "mobile": "+919162778765-deleted",
//     "mobileMatch": "A",
//     "mobileVerified": true,
//     "name": "M H R",
//     "panApproved": false,
//     "password": "hjdglakdldgwidhlHD",
//     "passwordStrength": 110,
//     "playerStatus": "deleted",
//     "postalCode": "600091",
//     "referralFraudFlag": false,
//     "referralMute": false,
//     "region": "Tamil Nadu",
//     "registrationIp": "12.23.34.45",
//     "screenName": "kuy0204123332-deleted",
//     "setPassword": false,
//     "source": "a23",
//     "state": "Tamil Nadu",
//     "status": false,
//     "subscriptionType": "pseudo-deleted",
//     "tdsStatus": "approved",
//     "teamname": "kuy0204-deleted",
//     "teamNameChangeAvailable": false,
//     "tnx": 0,
//     "total": 1,
//     "totalContextCount": 0,
//     "totalDeposits": 950,
//     "totalDepositsCount": 5,
//     "totalRedeem": 400,
//     "totalRedeemCount": 2,
//     "totalWin": 0,
//     "totalWinnings": 0,
//     "updatedAt": 1633364413000,
//     "userCode": "bdeb59729af5105b",
//     "userName": "kuy0204-deleted",
//     "username": "kuy0204",
//     "win": 1,
//     "win_pending": 0,
//     "selfieKyc":true
// }
//3 cases document, docface, face
// let checks = []
// const kycRejectCheck  = ['unverified','rejected'].includes(user.kycStatus)
// const kycSelfieCheck = user.selfieKyc && !user.selfieApproved 
// const mainCheck = kycSelfieCheck && kycRejectCheck && user.panApproved
// if(mainCheck && user?.selfieEnforcedOld) checks.push('document') 
// if ( mainCheck) {

//     checks.push('facial_similarity_photo')
// } else 
//     checks.push('document')
//     if (user.selfieKyc) checks.push('facial_similarity_photo')
// }

// console.log(checks)

// let user = {taxableRunningNetWinnings:10,randomKey:1}
// let mainArr = ['taxableRunningNetWinnings','netwinFinMonth','netwinFinYear','cummulativeRedeemFinYear','cumulativeTaxPaidFinYear','cumulativeTaxPaidOnNetWinnings']
// 	mainArr.forEach((key)=>{
// 		if(!user[key]) user[key]=0
// 	})


//     console.log(user)
// let a = {b:3}
// const checkParam = ({ ...a }) => {
// a.b =2
// console.log(a)
// }
// checkParam(a)
// console.log(a)

// currentT = +new Date()
// console.log(currentT>1682076000000)
// const { core, findOne } = require('@hdworks/dynamo-db-wrapper')
// // const checkQuery = async(socialType)=>{
// // let userSocialIds = await findOne('users', { _id: '1933d0c2b94694ae' }, { facebookId: 1, googleId: 1, appleId: 1 })
// // let socialIdType = { 'Facebook': 'facebookId', 'Apple': 'appleId', 'Google': 'googleId' }
// // let secondaryKey = userSocialIds[socialIdType[socialType]]
// // console.log(secondaryKey)
// // }


// const socialDelink = async (socialType) => {
// 	try {
// 		let userSocialIds = await findOne('users', { _id:'1x33d0c2b9469xax' }, { facebookId: 1, googleId: 1, appleId: 1 })
// 		let socialIdType = { 'Facebook': 'facebookId', 'Apple': 'appleId', 'Google': 'googleId' }
// 		let secondaryKey = userSocialIds[socialIdType[socialType]]
// 		let params = {
// 			TransactItems: [{
// 				Update: {
// 					TableName: 'users',
// 					Key: { '_id': '1x33d0c2b9469xax' },
// 					UpdateExpression: `REMOVE ${socialIdType[socialType]}`,
// 					ReturnValues: 'NONE'
// 				}
// 			},
// 			{
// 				Delete: {
// 					TableName: 'IndexTable',
// 					Key: { pk: socialIdType[socialType], sk: secondaryKey },
// 					ReturnValues: 'NONE'
// 				}
// 			}]
// 		}
// 		await core('transactWrite', params)
// 		return { message: `Your ${socialType} account is disconnected successfully.` }
// 	} catch (e) {
// 		return { error: e }
// 	}
// }

// socialDelink('Apple ')
// const { core, insertOne } = require('@hdworks/dynamo-db-wrapper')
// let socialIdType = 'facebookId'
// let socialId = '173737322da8'
// const checkQuery = async () => {
//     await insertOne('IndexTable', { pk: `${socialIdType}-${socialId}`, sk: `${socialIdType}-index`, userId: '1933d0c2b94694ae', updatedAt: +new Date() })
// }


// checkQuery()

// let transaction = {'endPointUrl':'asd'}
// console.log(transaction.hasOwnProperty('endPointUrl'))


// Number of nodes
// let N = 7, Root = 1;

// // Adjacency list to store the tree
// let adj = new Array(N + 1).fill(null).map(() => []);

// // Creating the tree
// addEdge(1, 2, adj);
// addEdge(1, 3, adj);
// addEdge(1, 4, adj);
// addEdge(2, 5, adj);
// addEdge(2, 6, adj);
// addEdge(4, 7, adj);

// // Function to add an edge between vertices x and y
// function addEdge(x, y, arr) {
//     arr[x].push(y);
//     arr[y].push(x);
// }

// console.log(adj)


// class Node {
//     constructor(val) {
//       this.value = val;
//       this.left = null;
//       this.right = null;
//     }
//   }

//   // FullBinaryTree class representing a full binary tree
//   class FullBinaryTree {
//     constructor() {
//       this.root = null;
//     }

//     // Method to insert a new node with the given value into the tree
//     insert(value) {
//       const newNode = new Node(value);
//       if (!this.root) {
//         this.root = newNode;
//       } else {
//         let currentNode = this.root;
//         while (true) {
//           if (!currentNode.left) {
//             currentNode.left = newNode;
//             break;
//           } else if (!currentNode.right) {
//             currentNode.right = newNode;
//             break;
//           } else {
//             currentNode = currentNode.left;
//           }
//         }
//       }
//     }
//   }

//   // Main function
//   const tree = new FullBinaryTree();
//   tree.insert(1);
//   tree.insert(2);
//   tree.insert(3);
//   tree.insert(4);
//   console.log(tree)


// let obj = {
//   "favGames": [],
//   "onfidoRequestID": "2437bd90-1116-4d5d-b485-566bb213d088",
//   "setPassword": true,
//   "win_pending": 0,
//   "channel": "A23APS",
//   "mobileVerified": true,
//   "emailEntered": [
//     "supro@gmail.com"
//   ],
//   "screenName": "star923688",
//   "source": "platform",
//   "panStatus": "processing",
//   "netwinFinMonth": -154,
//   "createdAt": 1682924179488,
//   "funBalance": 5000,
//   "panImage": "https://s3.ap-south-1.amazonaws.com/fanfightappqa/kyc2/beKuxLmb/star923688_pan_card.jpeg",
//   "totalTeamCount": 0,
//   "isEmailEdited": false,
//   "selfieKyc": false,
//   "LastDepositAmount": 100,
//   "totalRedeem": 0,
//   "kycUpdatedAt": 1682924704494,
//   "netwinFinYear": -154,
//   "state": "Telangana",
//   "exp": 1,
//   "totalMatchCount": 0,
//   "updatedAt": 1682933713830,
//   "device_id": "45b6a7521c0cc910",
//   "level": 1,
//   "walletList": {
//     "amazonPay": {
//       "createdAt": 1682924566324,
//       "id": "9622233688",
//       "status": true
//     }
//   },
//   "netWinUpdatedAt": 1682933195162,
//   "panNumber": "EJAPS0276M",
//   "cummulativeRedeemFinYear": 30000,
//   "kyc3": false,
//   "kyc1": true,
//   "kyc2": true,
//   "totalWin": 0,
//   "subscriptionType": "premium",
//   "dob": "31-10-1992",
//   "totalDeposits": 100,
//   "totalRedeemCount": 0,
//   "_id": "fjeq6ophawikbi5",
//   "panName": "MONIKA MAHADEV SHINDE",
//   "extraCash": 0,
//   "panApproved": false,
//   "status": true,
//   "tnx": 0,
//   "bon": 0,
//   "cumulativeTaxPaidFinYear": 0,
//   "totalContextCount": 0,
//   "tdsStatus": "processing",
//   "code": "HNZHKC",
//   "flag": false,
//   "kycStatus": "processing",
//   "cumulativeTaxPaidOnNetWinnings": 0,
//   "displayName": "star923688",
//   "lastMobileVerificationDate": 1682933677418,
//   "roles": "user",
//   "netwinLifeTime": -154,
//   "totalSeriesCount": 0,
//   "premiumConversionDate": 1682924543153,
//   "userCode": "fjeq6ophawikbi5",
//   "kycMessage": "Your PAN is pending for verification.",
//   "redeemVersion": 3,
//   "total": 4906,
//   "taxableRunningNetWinnings": -154,
//   "emailEditCoolOff": 1690700590849,
//   "playerStatus": null,
//   "ace_level": 1,
//   "win": 4906,
//   "email": "supro@gmail.com",
//   "totalWinnings": 0,
//   "mobile": "+919622233688",
//   "avatar": "https://images.fanfight.com/avatars/avatar1.png",
//   "referralFraudFlag": false,
//   "registrationIp": "182.76.160.246",
//   "totalDepositsCount": 1,
//   "emailVerified": true,
//   "cummulativeDepositFinYear": 100,
//   "experianRequired": "not required",
//   "registrationState": "Delhi",
//   "pending_bonus": 0,
//   "username": "beKuxLmb"
// }
// console.log(obj.screenName)

// const { findOne, insertOne } = require('@hdworks/dynamo-db-wrapper')
// const addIndexTable = async (_id) => {
//   let userSocialId = await findOne('users', { _id: _id }, { 'googleId': 1 })
//   await insertOne('IndexTable', { pk: `googleId-${userSocialId['googleId']}`, sk: `googleId-index`, userId: _id, createdAt: +new Date() })
  
// }

// addIndexTable('560da7b2c82ed21f1abaded94d7ff337')




