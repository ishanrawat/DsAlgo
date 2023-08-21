const { Worker, isMainThread, parentPort } = require('worker_threads');
const { findOne, updateOne, insertOne } = require('@hdworks/dynamo-db-wrapper')
const NUM_WORKERS = 3;
const csvParser = require('csv-parser');
const fs = require('fs')
const csvData = []
const readline = require('readline');
if (isMainThread) {

    console.time()
    const workers = [];
    for (let i = 0; i < NUM_WORKERS; i++) {
        workers.push(new Worker(__filename));
    }


    for (let i = 0; i < NUM_WORKERS; i++) {

        workers[i].postMessage(i + 1);
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
        let fileName
        let indexName
        let socialName
        if ([1].includes(i)) {
            fileName = `googleId${i}`
            indexName = 'googleId-index'
            socialName = 'googleId'
        }
        else if (i == 2) {
            fileName = `appleId${i - 1}`
            indexName = 'appleId-index'
            socialName = 'appleId'
        }
        else {
            fileName = `facebookId${i - 2}`
            indexName = 'facebookId-index'
            socialName = 'facebookId'
        }
        console.log(fileName)
        let csvData = await csv_read(fileName)
        for (let _id of csvData) {
            try {
                if (!['_id', "'_id'"].includes(_id)) {
                    let userId = await findOne('users', { _id: _id }, { _id: 1, googleId: 1, appleId: 1, facebookId: 1 })
                    await insertOne('IndexTable', { pk: `${socialName}-${userId[socialName]}`, sk: indexName, userId: _id, createdAt: +new Date() })
                    console.log(_id, 'inserted', socialName)
                }

            }
            catch (error) {
                console.log(error, 'error in updating index for', _id)
            }

        }


        return csvData
    }


    parentPort.on('message', async (i) => {
        const data = await fetchData(i);
        parentPort.postMessage(data);
    });
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