//index.js file

const Tesseract= require('tesseract.js');
let data = []
Tesseract.recognize(
   
// this first argument is for the location of an image it can be a //url like below or you can set a local path in your computer
'./checkNow.png',
// this second argument is for the laguage 
'eng',
// { logger: m => console.log(m) }
).then(({ data: { text } }) => {
// console.log(text);


console.log(text)
// let obj = {}
// obj.name = data[1]
// obj.fatherName = data[2]
// obj.dob = data[3]
// obj.panNumber = data[5]
// console.log(obj)

})

// const { createWorker } = require('tesseract.js');



// (async () => {
//     const worker = await createWorker();
//   await worker.load();
//   await worker.loadLanguage('eng');
//   await worker.initialize('eng');
// //   await worker.setParameters({
// //     tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ/',
// //     preserve_interword_spaces: "1"
    
// //   });
//   const { data: { text } } = await worker.recognize('https://i.pinimg.com/736x/26/35/67/26356785bee5818603e8ce71e6dcdd39.jpg');
//   console.log(text);
//   await worker.terminate();
// })();