
const { findOne } = require('@hdworks/dynamo-db-wrapper')
const axios = require('axios')
const fs = require('fs')
const readline = require('readline')

const emsScript = async () => {

    let csv_data = await csv_readSync('data.csv')
    if (csv_data.length > 0) {
        for (const line of csv_data) {
            let user = await findOne('users', { screenName: line[0] }, 'screenName-index')
            if (user?.subscriptionType === 'pseudo') {
                let pseudoDataToInventory = {
                    id: user._id,
                    event: 'PseudoUpdate',
                    userId: user.screenName,
                    subscriptionType: user.subscriptionType,
                    pseudoExpiryDate: +new Date(line[1]) || 0,
                    amount: user.extraCash || user.total
                }

                console.log(user.screenName, 'pseudoDataToInventory', pseudoDataToInventory)

                
                try {
                    console.log(user.screenName, 'Posting EMS call')
                    await axios.post(`https://pfems.a23games.in/ems/emsA23Game`, pseudoDataToInventory, { timeout: 500 }).then(res => console.log('res pseudoDataToInventory', res.data)).catch(err => console.log('Pseudo Ems call', err))
                    console.log(user.screenName, 'Received response from EMS')
                }
                catch (error) {
                    console.log('failed ems for ', user.screenName)
                }
            }
            else{
                console.log(user.screenName,' not pseudo anymore :) !!!!!')
            }
        }
    }

}

emsScript()

const csv_readSync = (file) => {
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
