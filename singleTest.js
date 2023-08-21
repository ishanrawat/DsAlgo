const { findOne, updateOne, insertOne } = require('@hdworks/dynamo-db-wrapper')
const fs = require('fs')

const readline = require('readline');
const singTest = async () => {
    console.time()
    let fileName
    let indexName
    let socialName

    fileName = 'googleId1'
    indexName = 'googleId-index'
    socialName = 'googleId'

    let csvData = await csv_read(fileName)

    for (let _id of csvData) {
        try {
            let userId = await findOne('users', { _id: _id }, { _id: 1, googleId: 1 })
            await insertOne('IndexTable', { pk: `googleId-${userId[socialName]}`, sk: indexName, userId: _id, createdAt: +new Date() })
            console.log(_id, 'inserted', socialName)
        }
        catch (error) {
            console.log(error, 'error in updating index for', _id)
        }

    }
    console.timeEnd()

    return csvData
}


const csv_read = (file) => {
    file = file + '.csv'
    return new Promise(async (resolve, reject) => {
        let output = []
        let reader = fs.createReadStream(file)
        const rl = readline.createInterface({
            input: reader,
            output: process.stdout,
            terminal: false
        })
        rl.on('line', function (line) {
            let y = line.split(',')[0]
            output.push(y)
        })
        rl.on('close', () => {
            resolve(output)
        })
    })
}

singTest()