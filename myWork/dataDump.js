const dataDump = async () => {

    let batchItem = []
    let walletTrans = { RequestItems: { 'user_wallet': batchItem } }



    for (let i = 0; i < 40; i++) {
        walletTrans.RequestItems.user_wallet = []
        for (let j = 0; j < 25; j++) {
            let walletObj = {
                "amount": -590,
                "bon": 0,
                "bonus": 0,
                "bonusBucket": 0,
                "channel": "A23APS",
                "createdAt": 1685960314447,
                "cummulativePurchaseFinyear": 800,
                "cummulativeRedeemFinyear": 510,
                "description": "This redeem was cancelled by you",
                "deviceID": "a1593385223135ef",
                "extraCash": 1051,
                "ip": "42.111.144.187",
                "lastTaxableRunningNetWinnings": 0,
                "name": "Amazon Pay",
                "netWinOnTDSCallculated": 190,
                "newRedeemAmount": -533,
                "openingBalanceFinyear": 0,
                "selectedBank": {
                    "accountNumber": "9876544999"
                },
                "showStep": true,
                "step": 1,
                "taxableRunningNetWinnings": 0,
                "taxedNetWinnings": 300,
                "tdsAmount": 57,
                "TDSDeductedFinyear": 90,
                "tdsPercentage": 30,
                "tnx": 3100,
                "totalBalance": 4151,
                "transaction": 3100,
                "transactionReference": "325664",
                "type": "withdraw-cancelled",
                "updatedAt": 1685960322766,
                "userCode": "6xmwe31d13fcknj",
                "userID": "6xmwe31d13fcknj",
                "win": 0,
                "winningBucket": 533,
                "winnings": 590,
                "withdrawType": "amazonPay"
            }
            let PutRequest = {}
            let putRequest = { PutRequest: PutRequest }

            let randNum = generateRandomNumber()
            walletObj._id = `redeem-${randNum}`
            putRequest.PutRequest.Item = walletObj
            walletTrans.RequestItems.user_wallet.push(putRequest)

            // await insertOne('user_wallet',walletObj)
            console.log('initiated for', walletObj._id)
        }
        await dynamodb.batchWrite(walletTrans).promise()
        console.log('done')


    }


}
function generateRandomNumber() {
    let minm = 100000;
    let maxm = 999999;
    return Math.floor(Math
        .random() * (maxm - minm + 1)) + minm;
}

dataDump()