const maskvalue = value => {
	try {
		let obj = value
		let len = obj.length - 4
		return obj.slice(0, len).replace(/./g, '*') + obj.slice(len)
	} catch (error) {
		return '****'
	}
}


const iterative = (userDetails, maskingArray) => {
	let stackTrack = []
	let userCopy = { ...userDetails }
	stackTrack.push(userCopy)
	while (stackTrack.length > 0) {
		userDetails = stackTrack.pop()
		Object.keys(userDetails).forEach((key) => {
			if (typeof userDetails[key] === 'string') maskString(userDetails, key, maskingArray)
			if (Array.isArray(userDetails[key])) maskArray(userDetails, key, maskingArray)
			if (typeof userDetails[key] === 'object' && userDetails[key] != null) stackTrack.push(userDetails[key])
		})
	}
	return userCopy
}
const maskString = (userDetails, key, maskingArray) => {
	userDetails[key] = maskingArray.includes(key) ? maskvalue(userDetails[key]) : userDetails[key]
}
const maskArray = (userDetails, key, maskingArray) => {
	userDetails[key] = maskingArray.includes(key) ? userDetails[key].map((value) => { return maskvalue(value) }) : userDetails[key]
}
const maskingfunc = (params, maskingArray) => {
	try {
		if (typeof (params) === 'string') return maskvalue(params)
		if (typeof (params) === 'object') {
			let param = JSON.parse(JSON.stringify(params))
			return iterative(param, maskingArray || [])
		}
		return params
	} catch (error) {
		console.log('Error in masking function ==> ', error)
	}
}

let obj = {a:'sdasa',b:{c:'sdhafdjsha'}}

console.log(maskingfunc(obj,['a','c']))
console.log(obj)