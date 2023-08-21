
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'ap-south-1' });
const fs = require('fs')
const csvWriter = require('csv-write-stream')
let tableQuery = {
    TableName: "users",
    IndexName: "appleId-index"
};
let finalPathFile = 'appleId.csv'
const getGoogleId = async () => {
    const result = await dynamodb.scan(tableQuery).promise();
    // console.log(result)
    let writer
    let count = 1
    for (let user of result?.Items) {
        if (!fs.existsSync(finalPathFile) && count){
            writer = csvWriter({ headers: ["_id"] })
            count = 0
        }
        else
            writer = csvWriter({ sendHeaders: false })

        writer.pipe(fs.createWriteStream(finalPathFile, { flags: 'a' }))
        writer.write({
            '_id': user?._id,
        });
        writer.end()

    }
}
getGoogleId()