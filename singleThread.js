// @ts-nocheck
const { findOne, findPagination, updateOne } = require('@hdworks/dynamo-db-wrapper')
// const ids = require('./userIds.js')
const fs = require('fs')
const path = './data.txt'
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './newC.csv',
    header: [
        { id: 'screenName', title: 'screenName' },
        { id: '_id', title: '_id' }
    ]
});

const csvParser = require('csv-parser');
const csvData = []
fs.createReadStream('./results.csv').pipe(csvParser()).on('data', (row) => { csvData.push(row._id) }).on('end', () => { 

    csvData.forEach((_id) => {
        updateOne('users', { _id: _id }, { $set: { kyc1: true } }).then((returned) => {
            console.log('update done', returned)

        }).catch((error) => {
            console.log(_id, error)
        })
    }
 )
})



