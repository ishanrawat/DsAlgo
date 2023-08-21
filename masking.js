const { find } = require('@hdworks/dynamo-db-wrapper')
const maskvalue = value => {
    try {
        let obj = value
        let len = obj.length - 4
        return obj.slice(0, len).replace(/./g, '*') + obj.slice(len)
    } catch (error) {
        console.error(error.message)
    }
}
const recursive = (obj, maskingArray) => {
    try {
        let tempObj = {}

        Object.keys(obj).map(key => {
            if (typeof (obj[key]) === 'string') tempObj[key] = maskingArray.includes(key) ? maskvalue(obj[key]) : obj[key]
            else if (typeof (obj[key]) === 'object' && obj[key]) tempObj[key] = recursive(obj[key], maskingArray)
            else { tempObj[key] = obj[key] }
        })
        return tempObj
    } catch (error) {
        console.error(error.message)
    }
}

const maskingfunc = (param, maskingArray) => {
    try {
        if (typeof (param) === 'string') return maskvalue(param)
        if (typeof (param) === 'object' && param) return recursive(param, maskingArray || [])
    } catch (error) {
        console.error(error.message)
    }
}


let maskObj = {
    "_id": "bdeb59729af5105b",
    "a23ConvDate": 1597938200000,
    "a23RegDate": 1597937880000,
    "a23UserID": "kUy0204-deleted",
    "aadharApproved": false,
    "aceLevelUpdatedAt": 1597938200000,
    "ace_level": 1,
    "address": "hydhsakhdka kjds",
    "appleId": "undefined-deleted",
    "avatar": "jdlasdjinkznad",
    "bankList": [
        {
            "accountName": "Savings",
            "accountNumber": "hhhhhhhhhh",
            "bankApproved": true,
            "bankName": "ICICI Bank",
            "bankStatus": "approved",
            "bankUpdatedAt": 1597948200000,
            "ifscCode": "ICIC0000009",
            "isActive": true
        }
    ],
    "bon": 0,
    "code": "4J4PQJ-deleted",
    "contactPreferences": {
        "email": true,
        "fromTime": null,
        "language1": "English",
        "language2": "Tamil",
        "mobile": true,
        "postOffice": true,
        "pushNotification": true,
        "sms": true,
        "toTime": null
    },
    "country": "India",
    "currentAceLevel": 1,
    "currentAceLevelName": "bronze",
    "currentTotalAcePoints": 49,
    "device_id": "oiois8w9qw0w",
    "disableRedeemCancelFlag": false,
    "displayName": "kuy0204-deleted",
    "email": "122HJ@mail.com",
    "emailVerified": true,
    "exp": 0,
    "extraCash": 0,
    "facebookId": "undefined-deleted'",
    "funBalance": 5000,
    "gender": "Female",
    "googleId": "undefined-deleted",
    "holdAcePoints": 60,
    "ip": "11.22.33.44",
    "kyc1": true,
    "kyc2": false,
    "kyc3": true,
    "kyc4": true,
    "kycDocApprovedAt": 1458289245000,
    "kycDocApprovedBy": "Mallikarjun.D",
    "kycDocNumber": "FTN63Z0030852007",
    "kycDocStatus": "approved",
    "kycDocType": "driving-licence",
    "kycMessage": "Your PAN Is Verified",
    "kycUpdatedAt": 1598052259000,
    "kycUserName": "M H R",
    "lastAceLevel": 1,
    "lastActiveDate": 1633367422000,
    "levelno": "bronze",
    "manualRedeemAvailable": true,
    "maxAceLevel": 1,
    "maxTotalAcePoints": 49,
    "mobile": "+919162778765-deleted",
    "mobileMatch": "A",
    "mobileVerified": true,
    "name": "M H R",
    "panApproved": false,
    "password": "hjdglakdldgwidhlHD",
    "passwordStrength": 110,
    "playerStatus": "deleted",
    "postalCode": "600091",
    "referralFraudFlag": false,
    "referralMute": false,
    "region": "Tamil Nadu",
    "registrationIp": "12.23.34.45",
    "screenName": "kuy0204123332-deleted",
    "setPassword": false,
    "source": "a23",
    "state": "Tamil Nadu",
    "status": false,
    "subscriptionType": "pseudo-deleted",
    "tdsStatus": "approved",
    "teamname": "kuy0204-deleted",
    "teamNameChangeAvailable": false,
    "tnx": 0,
    "total": 1,
    "totalContextCount": 0,
    "totalDeposits": 950,
    "totalDepositsCount": 5,
    "totalRedeem": 400,
    "totalRedeemCount": 2,
    "totalWin": 0,
    "totalWinnings": 0,
    "updatedAt": 1633364413000,
    "userCode": "bdeb59729af5105b",
    "userName": "kuy0204-deleted",
    "username": "kuy0204",
    "win": 1,
    "win_pending": 0
}


console.log(maskingfunc(maskObj, ['accountName']))
// const randFunc = () =>{
// let obj =  {"a":null}
// return obj['a']
// }
// console.log(randFunc())