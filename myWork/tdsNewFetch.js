
const prompt = require('prompt-sync')();
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Define the CSV file path
const filePath = './tdsData.csv';
const AWS = require('aws-sdk');

// Create a DynamoDB client
const dynamodb = new AWS.DynamoDB.DocumentClient(

    { region: 'ap-south-1' }
);
const fetchTds = async () => {

    let yearStr = prompt('Enter financial year eg. 2023==>  ')
    let _id = prompt('Enter _id of the user==>  ')
    let year = parseInt(yearStr)
    let startDateStr = `01-Apr-${year}`
    let endDateStr = `01-Apr-${year + 1}`
    console.log(startDateStr, endDateStr, '==>', _id)

    let startDate = +new Date(startDateStr)
    let endDate = +new Date(endDateStr)
    console.log(startDate, endDate)
    const queryParams = {
        TableName: 'user_wallet',
        IndexName: 'userID-index',
        KeyConditionExpression: 'userID = :val',
        FilterExpression: 'attribute_exists(amount) AND attribute_exists(win) AND attribute_not_exists(joinedPoolType) AND createdAt BETWEEN :start AND :end',
        ExpressionAttributeValues: {
            ':val': _id,
            ':start': startDate,
            ':end': endDate
        },

        // ScanIndexForward: false
    };
    let user_wallet = await fetchCompleteData(queryParams)
    if (!user_wallet) return false

    // let filteredWallet = user_wallet?.filter((walletEntry) => {
    //     if ((walletEntry?.tdsAmount > 0 || walletEntry?._id.includes('cancelled'))) return walletEntry
    // })

    await writeCsv(user_wallet)
    console.log('done')
    return true


}
const writeCsv = async (user_wallet) => {
    const csvHeaders = [
        { id: '_id', title: '_id' },
        { id: 'tdsAmount', title: 'tdsAmount' },
        { id: 'amount', title: 'amount' },
        { id: 'cummulativePurchaseFinyear', title: 'cummulativePurchaseFinyear' },
        { id: 'cummulativeRedeemFinyear', title: 'cummulativeRedeemFinyear' },
        { id: 'taxedNetWinnings', title: 'taxedNetWinnings' },
        { id: 'TDSDeductedFinyear', title: 'TDSDeductedFinyear' },
    ];
    const csvWriter = createCsvWriter({
        path: filePath,
        header: csvHeaders
    });
    await csvWriter.writeRecords(user_wallet)
    console.log('done with writing records')

}
const fetchCompleteData = async (queryParams) => {
    try {
        let data1 = []
        let data
        do {
            data = await dynamodb.query(queryParams).promise()
            console.log(data)
            if (data?.Items && data?.Items[0]) data1.push(...data.Items)
            if (data.LastEvaluatedKey) {
                queryParams.ExclusiveStartKey = data.LastEvaluatedKey;
            }
        }
        while (data.LastEvaluatedKey)

        return data1
    }
    catch (error) {
        console.log(`error in fetching the dynamo db data ${error}`)
        return false
    }


}
fetchTds()
