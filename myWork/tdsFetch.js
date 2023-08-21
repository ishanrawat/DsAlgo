const { findOne, find, core } = require('@hdworks/dynamo-db-wrapper')
const prompt = require('prompt-sync')();
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Define the CSV file path
const filePath = './tdsData.csv';
const fetchTds = async () => {

    let year = prompt('Enter financial year eg. 2023==>  ')
    let _id = prompt('Enter _id of the user==>  ')
    year = parseInt(year)
    let startDate = `01-Apr-${year}`
    let endDate = `01-Apr-${year + 1}`
    console.log(startDate, endDate, '==>', _id)

    startDate = +new Date(startDate)
    endDate = +new Date(endDate)
    console.log(startDate, endDate)

    let user_wallet = await find('user_wallet', { userID: _id }, 'userID-index',{_id:1,createdAt:1,tdsAmount:1,amount:1,cummulativePurchaseFinyear:1,cummulativeRedeemFinyear:1,taxedNetWinnings:1,TDSDeductedFinyear:1})
    // console.log(user_wallet)
    let filteredWallet = user_wallet?.filter((walletEntry) => {
        if (walletEntry?.createdAt >= startDate && walletEntry?.createdAt <= endDate && (walletEntry?.tdsAmount > 0 || walletEntry?._id.includes('cancelled'))) return walletEntry
    })
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
      csvWriter
      .writeRecords(filteredWallet)
      .then(() => {
        console.log('CSV file has been written successfully.');
      })
      .catch((error) => {
        console.error('Error writing CSV file:', error);
      });
    // fs.writeFile('./formList.csv', JSON.stringify(filteredWallet[0]), 'utf8', function (err) {
    //     if (err) {
    //       console.log('Some error occured - file either not saved or corrupted file saved.');
    //     } else{
    //       console.log('It\'s saved!');
    //     }
    //   });

}

fetchTds()