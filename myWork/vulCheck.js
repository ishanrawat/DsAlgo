// // Import the Decimal class
// const Decimal = require('decimal.js');

// // Create Decimal instances for the numbers you want to ad




// const addNums = (num1, num2) => {
//     num1 = new Decimal(num1)
//     num2 = new Decimal(num2)
//     const result = num1.plus(num2)
//     return parseFloat(result)
// }


// console.log(addNums(20000000000.78, 300.1))





// const maskvalue = value => {
// 	try {
// 		let obj = value
// 		let len = obj.length - 4
// 		return obj.slice(0, len).replace(/./g, '*') + obj.slice(len)
// 	} catch (error) {
// 		return '****'
// 	}
// }


// const iterative = (userDetails, maskingArray) => {
// 	let stackTrack = []
// 	let userCopy = { ...userDetails }
// 	stackTrack.push(userCopy)
// 	while (stackTrack.length > 0) {
// 		userDetails = stackTrack.pop()
// 		Object.keys(userDetails).forEach((key) => {
// 			if (typeof userDetails[key] === 'string') userDetails[key] = maskingArray.includes(key) ? maskvalue(userDetails[key]) : userDetails[key]
// 			if (typeof userDetails[key] === 'object' && userDetails[key] != null) {
// 				stackTrack.push(userDetails[key])
// 			}
// 		})
// 	}
// 	return userCopy
// }


// exports.maskingfunc = (params, maskingArray) => {
// 	try {
// 		if (typeof (params) === 'string') return maskvalue(params)
// 		if (typeof (params) === 'object') {
// 			let param = JSON.parse(JSON.stringify(params))
// 			return iterative(param, maskingArray || [])
// 		}
// 	} catch (error) {
// 		console.log('Error in masking function ==> ', error)
// 	}
// }


// console.log(this.maskingfunc(undefined))

let count = 0 

var once = function(fn) {
	 count = 0
    return function(...args){
       if(count == 0 ){
		count++
		return fn(...args)
	}
	   else return undefined 
    }
};


  let fn = (a,b,c) => (a * b * c)
  let onceFn = once(fn)

 console.log(onceFn(1,2,3)) // 6
 console.log(onceFn(2,3,6)) // returns undefined without calling fn


fn = (a,b,c) => (a + b + c)
 onceFn = once(fn)
 console.log(onceFn(1,2,3))