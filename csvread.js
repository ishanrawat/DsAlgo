const fs = require('fs')
const readline = require('readline');

module.exports.csv_read = (file) => {
    return new Promise(async (resolve, reject) => {
        let output = []
        let reader = fs.createReadStream(file)
        const rl = readline.createInterface({
            input: reader,
            output: process.stdout,
            terminal: false
        })
        rl.on('line',function (line) {
            let y = line.split(',')
            output.push(y)
        })
        rl.on('close',()=>
        {
            resolve(output)
        })
    })
}

module.exports.csv_readSync = (file) => {
    return new Promise(async (resolve, reject) => {
        let output = []
        let reader = fs.createReadStream(file)
        const rl = readline.createInterface({
            input: reader,
            output: process.stdout,
            terminal: false
        })
        for await (const line of rl) {
            let y = line.split(',')
            output.push(y)
        }
        resolve(output)
    })
}
