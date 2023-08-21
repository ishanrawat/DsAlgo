const { findOne, find, updateOne, insertOne, remove } = require('./encryptionDynamo')
const dataToInsert = {
    "_id": "02a1b5be-a8b7-4442-8dec-a8086ae7f6666",
    "a23UserID": "kaka14355",
    "aadharapproved": false,
    "address": "hyderabad",
    "bankApproved": false,
    "bankList": [
     {
      "accountName": "LOKESH YADAV BILLU",
      "accountNumber": "345333",
      "bankApproved": true,
      "bankImage": "empty",
      "bankName": "Bank Of India",
      "bankStatus": "approved",
      "bankUpdatedAt": 1642433552450,
      "ifscCode": "UTIB0000009",
      "isActive": "true"
     }
    ],
    "bon": 0,
    "city": "Hyderabad",
    "code": "BUS70T",
    "country": "India",
    "currentAceLevelName": "bronze",
    "description": "Redeem Success of 20",
    "device_id": "testdev1",
    "displayName": "kaka143",
    "email": "att6544@gmail.com",
    "emailVerified": true,
    "extraCash": 0,
    "gender": "Female",
    "idfyRequestID": "ee2314e3-53c5-4b3c-987e-a222193b3174",
    "ip": "192.168.0.1",
    "kyc1": true,
    "kyc2": false,
    "kyc3": false,
    "lastMobileVerificationDate": 1687775988810,
    "levelno": "Bronze",
    "mobile": "+919797646434",
    "mobileVerified": true,
    "name": "LOKESH YADAV BILLU",
    "panApproved": false,
    "passwordStrength": 200,
    "postalCode": "500050",
    "recommendedGames": [
     "124"
    ],
    "region": "Andhra Pradesh",
    "registeredFrom": "Website-LandingPage",
    "registrationIp": "192.168.0.1",
    "screenName": "kaka14355",
    "selfieKyc": false,
    "source": "a23",
    "state": "Telangana",
    "status": true,
    "teamname": "kaka143",
    "teamNameChangeAvailable": true,
    "tnx": 0,
    "total": 25,
    "totalDeposits": 10,
    "totalRedeem": 10,
    "totalRedeemCount": 1,
    "type": "Withdraw-success",
    "updatedAt": 1687775988810,
    "userCode": "fgbb5lqarr11vut",
    "username": "kaka143",
    "walletList": {
     "amazonPay": {
      "createdAt": 1687776010039,
      "id": "9797646434",
      "status": true
     },
     "paytm": {
      "createdAt": 1687776071483,
      "id": "9797646434",
      "status": true
     }
    },
    "win": 25
   }
const testQuery = async() => {
await insertOne('users', dataToInsert)
  
}


testQuery()