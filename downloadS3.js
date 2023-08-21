const Fs = require('fs')
const Path = require('path')
const axios = require('axios')

exports.downloadImage = async (url, path) => {
    try {
        //   const url = 'https://unsplash.com/photos/AaEQmoufHLk/download?force=true'
        //   const path = Path.resolve(__dirname, 'images', 'code.jpg')
        const writer = Fs.createWriteStream(path)
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        })

        response.data.pipe(writer)

        return new Promise((resolve, reject) => {
            writer.on('finish', resolve)
            writer.on('error', reject)
        })
    }
    catch (error) {
        console.log(error)
    }
}

