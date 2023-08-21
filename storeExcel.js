

//  const arrayNesting = async(nums)=> {

const { func, array } = require("joi");

const { set_cptable } = require("xlsx");


//     let max=0;
//     let j
//     let maxArr=[]
//   maxArr= await Promise.all(nums.map(async(i)=>
//         {
//             let lengthOfPerm=await findLength(nums,j)
//             j++;
//             // lengthOfPerm>max ?max=lengthOfPerm:max=max
//             return lengthOfPerm
//         }

//    ))
//    return maxArr
// };



// const findLength=async(arr,i, objectTrack={},arrayReturn=[])=>
// {




//     if(objectTrack[i])  return arrayReturn.length

//     else
//         {
//             objectTrack[i]=1
//             arrayReturn.push(arr[i])
//             return findLength(arr,arr[i],objectTrack,arrayReturn)
//         }
// }


//   arrayNesting([5,4,0,3,1,6,2])


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

//  var arrayNesting = function(nums) {
//     global.totalObj={}
//     let max=0;
//     for(let i=0;i<nums.length;i++)
//         {
//             let lengthOfPerm=findLength(nums,i)
//             lengthOfPerm>max ?max=lengthOfPerm:max=max
//         }
//     return max;
// };



// const findLength=(arr,i, objectTrack={},arrayReturn=[])=>
// {        if(totalObj[i]) return totalObj[i]
//     if(objectTrack[i]){
//         totalObj[i]=arrayReturn.length
//         return arrayReturn.length
//     }  

//     else
//         {
//             objectTrack[i]=1
//             arrayReturn.push(arr[i])
//            totalObj[i]= findLength(arr,arr[i],objectTrack,arrayReturn)
//             return totalObj[i]
//         }
// }

// console.log(arrayNesting([0,1,2]))


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var findUnsortedSubarray = function(nums) {

//     let nums2;
//     let ptr1,ptr2;
//     nums2=[...nums]
//    nums.sort((a,b)=>a-b);
//     for(let i=0;i<nums.length;i++)
//     {
//         if(nums[i]!=nums2[i]) 
//             {
//             ptr1 = i;
//             break;
//             }
//     }
//     for(let i=nums.length-1;i>=0;i--)
//     {
//         if(nums[i]!=nums2[i])
//         {
//         ptr2 = i
//         break;
//         }     

//     }
//     if(ptr1===undefined && ptr2 ===undefined) return 0
//     return ptr2-ptr1+1
// };



// // console.log(findUnsortedSubarray([2,6,4,8,10,9,15]))

// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {number}
//  */
//  var minDistance = function(word1, word2) {
//     let freq1,freq2;
//     let sum=0;
//     freq1 = findFrequency(word1)
//     freq2 = findFrequency(word2)
//     for(let key in freq1)
//         {
//             if(freq2[key]) 
//                 {
//                 sum = sum + Math.abs(freq2[key]-freq1[key])
//                 delete(freq2[key])
//                 delete(freq1[key])
//                 }
//             else sum  = sum+freq1[key]
//         }
//     for(let key in freq2)
//         {
//             sum = sum + freq2[key]
//         }
//     return sum
// };


// const findFrequency=(str)=>
// {
//     let freqObj={}
//     str.split("").map((el)=>{
//         freqObj[el] ? freqObj[el]++ : freqObj[el] = 1
//     })
//     return freqObj;
// }

// console.log(minDistance("sea","ate"))


// /**
//  * @param {string} s
//  * @return {number}
//  */
//  var lengthOfLongestSubstring = function(s,basePtr=0,max=0) {
//     let tempPtr = basePtr;
//     let count=0;
//     if(basePtr >= s.length) return max
//     let tempStr=""
//     while(tempPtr < s.length && !tempStr.includes(s[tempPtr]))
//         {
//             count++
//             tempStr=tempStr+s[tempPtr]
//             tempPtr++

//         }

//     count > max ? max = count : max = max
//     return lengthOfLongestSubstring(s,basePtr+1,max)
// };


// console.log(lengthOfLongestSubstring("abcabcbb"))


//     return sum
// };


// const findFrequency=(str)=>
// {
//     let freqObj={}
//     str.split("").map((el)=>{
//         freqObj[el] ? freqObj[el]++ : freqObj[el] = 1
//     })
//     return freqObj;
// }

// console.log(minDistance("sea","ate"))


// /**
//  * @param {string} s
//  * @return {number}
//  */
//  var lengthOfLongestSubstring = function(s,basePtr=0,max=0) {
//     let tempPtr = basePtr;
//     let count=0;
//     if(basePtr >= s.length) return max
//     let tempStr=""
//     while(tempPtr < s.length && !tempStr.includes(s[tempPtr]))
//         {
//             count++
//             tempStr=tempStr+s[tempPtr]
//             tempPtr++

//         }

//     count > max ? max = count : max = max
//     return lengthOfLongestSubstring(s,basePtr+1,max)
// };


// console.log(lengthOfLongestSubstring("abcabcbb"))








//     return sum
// };


// const findFrequency=(str)=>
// {
//     let freqObj={}
//     str.split("").map((el)=>{
//         freqObj[el] ? freqObj[el]++ : freqObj[el] = 1
//     })
//     return freqObj;
// }

// console.log(minDistance("sea","ate"))


// /**
//  * @param {string} s
//  * @return {number}
//  */
//  var lengthOfLongestSubstring = function(s,basePtr=0,max=0) {
//     let tempPtr = basePtr;
//     let count=0;
//     if(basePtr >= s.length) return max
//     let tempStr=""
//     while(tempPtr < s.length && !tempStr.includes(s[tempPtr]))
//         {
//             count++
//             tempStr=tempStr+s[tempPtr]
//             tempPtr++

//         }

//     count > max ? max = count : max = max
//     return lengthOfLongestSubstring(s,basePtr+1,max)
// };


// console.log(lengthOfLongestSubstring("abcabcbb"))


//     return sum
// };


// const findFrequency=(str)=>
// {
//     let freqObj={}
//     str.split("").map((el)=>{
//         freqObj[el] ? freqObj[el]++ : freqObj[el] = 1
//     })
//     return freqObj;
// }

// console.log(minDistance("sea","ate"))


// /**
//  * @param {string} s
//  * @return {number}
//  */
//  var lengthOfLongestSubstring = function(s,basePtr=0,max=0) {
//     let tempPtr = basePtr;
//     let count=0;
//     if(basePtr >= s.length) return max
//     let tempStr=""
//     while(tempPtr < s.length && !tempStr.includes(s[tempPtr]))
//         {
//             count++
//             tempStr=tempStr+s[tempPtr]
//             tempPtr++

//         }

//     count > max ? max = count : max = max
//     return lengthOfLongestSubstring(s,basePtr+1,max)
// };


// console.log(lengthOfLongestSubstring("abcabcbb"))











//     return sum
// };


// const findFrequency=(str)=>
// {
//     let freqObj={}
//     str.split("").map((el)=>{
//         freqObj[el] ? freqObj[el]++ : freqObj[el] = 1
//     })
//     return freqObj;
// }

// console.log(minDistance("sea","ate"))


// /**
//  * @param {string} s
//  * @return {number}
//  */
//  var lengthOfLongestSubstring = function(s,basePtr=0,max=0) {
//     let tempPtr = basePtr;
//     let count=0;
//     if(basePtr >= s.length) return max
//     let tempStr=""
//     while(tempPtr < s.length && !tempStr.includes(s[tempPtr]))
//         {
//             count++
//             tempStr=tempStr+s[tempPtr]
//             tempPtr++

//         }

//     count > max ? max = count : max = max
//     return lengthOfLongestSubstring(s,basePtr+1,max)
// };


// console.log(lengthOfLongestSubstring("abcabcbb"))

//     return sum
// };


// const findFrequency=(str)=>
// {
//     let freqObj={}
//     str.split("").map((el)=>{
//         freqObj[el] ? freqObj[el]++ : freqObj[el] = 1
//     })
//     return freqObj;
// }

// console.log(minDistance("sea","ate"))


// /**
//  * @param {string} s
//  * @return {number}
//  */
//  var lengthOfLongestSubstring = function(s,basePtr=0,max=0) {
//     let tempPtr = basePtr;
//     let count=0;
//     if(basePtr >= s.length) return max
//     let tempStr=""
//     while(tempPtr < s.length && !tempStr.includes(s[tempPtr]))
//         {
//             count++
//             tempStr=tempStr+s[tempPtr]
//             tempPtr++

//         }

//     count > max ? max = count : max = max
//     return lengthOfLongestSubstring(s,basePtr+1,max)
// };


// console.log(lengthOfLongestSubstring("abcabcbb"))







// /**
//  * @param {string} s
//  * @return {string}
//  */

//  function invokeGlobal()
//  {
//  global.stringStore={}
//  }

//  var longestPalindrome = function(s,start=0,end,flag) {
//      let indexString = start + "" + end

//      if(s == s.split('').reverse().join('')) return s

//      !end ? end = s.length : end = end 
//      if(!flag) invokeGlobal()
//      if(stringStore[indexString]) return stringStore[indexString]
//      let str1 = longestPalindrome(s.slice(start+1,end),start+1,end,1)
//      let str2 = longestPalindrome(s.slice(start,end-1),start,end-1,1)
//      let largestPalin = str1.length > str2.length ? str1 : str2;
//      stringStore[indexString]=largestPalin
//      return largestPalin
//  };

// /**
//  * @param {string} s
//  * @return {string}
//  */

// //  function invokeGlobal()
// //  {
// //  global.stringStore={}
// //  }

// //  var longestPalindrome =  function(s,start=0,end,flag) {
// //     if(start >= end) return s[start]
// //      let indexString = String(start) + "" + String(end?end-1:s.length-1)
// //      let str=s.slice(start,end?end-1:s.length)
// //      if(str == str.split('').reverse().join('')) return str
// //      !end ? end = s.length : end = end 
// //      if(!flag) invokeGlobal()
// //      if(stringStore[indexString]) return stringStore[indexString]
// //      let str1 =  longestPalindrome(s,start+1,end,1)
// //      let str2 =  longestPalindrome(s,start,end-1,1)
// //      let largestPalin = str1.length > str2.length ? str1 : str2;
// //      stringStore[indexString]=largestPalin
// //     //  console.log(stringStore)
// //      return largestPalin
// //  };




// //  console.log(longestPalindrome("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"))




// /**
//  * @param {string} s
//  * @return {string}
//  */
//  var removeDuplicateLetters = function(s) {
//     return findFreq(s)
// };


// const findFreq=(str)=>
// {
//     let freqOfStr={}
//     str.split('').map((el)=>{
//         freqOfStr[el] ? freqOfStr[el]++ :freqOfStr[el]=1
//     })
//    let retArr=[]

//    for(let key in str)
//        {   

//            if(!retArr.length) 
//                {
//                retArr.push(str[key])
//                freqOfStr[str[key]]-- ;
//                }
//            else if(str[key] >= retArr[retArr.length-1] && !retArr.includes(str[key]))
//            { 
//             retArr.push(str[key])
//             freqOfStr[str[key]]-- ;
//            }
//            else if(!retArr.includes(str[key]))
//                {
//             while(retArr.length  && retArr[retArr.length-1] > str[key] && freqOfStr[retArr[retArr.length-1]])
//                 {

//                     retArr.pop()

//                 }
//                    retArr.push(str[key])
//                    freqOfStr[str[key]]-- 

//                }
//             else
//             {
//                 freqOfStr[str[key]]--

//                }
//        }
//     return retArr.join('')
// }

// console.log(removeDuplicateLetters("ecbacba"))


// const jobSequencing=(deadline,profit)=>
// { let totalProfit=0
//     let deadlineProfit={};
//     for(let key of deadline)
//     {
//         deadlineProfit[key]?deadlineProfit[key]:deadlineProfit[key]=[]
//     }
//     for(let key in profit)
//     {
//         deadlineProfit[deadline[key]].push(profit[key])
//         deadlineProfit[deadline[key]].sort((a,b)=>b-a)
//     }
//     for(let key in deadlineProfit)
//     {
//         totalProfit=totalProfit + deadlineProfit[key][0]
//     }
//     return totalProfit
// }


// console.log(jobSequencing([2,1,2,1,3],[100,19,27,25,15]))



// const AWS = require('aws-sdk')

// const getProvisionedConcurrency = async () => {
//     let fileName =[
//   'changeGVFlag',
//   'changePassword',
//   'changePasswordAfterVerify',
//   'failedTransactionList',
//   'forgotPassword',
//   'generateToken',
//   'getGameConfig',
//   'getLobby',
//   'getLoginByPassword',
//   'getLoginByScrNameOtp',
//   'getLogout',
//   'getPools',
//   'getPoolsV2',
//   'getProfile',
//   'gpsCheck',
//   'gpsCheckStandalone',
//   'insertStates',
//   'myInvites',
//   'myRewards',
//   'pixel',
//   'playStoreConfig',
//   'playStoreConfigV2',
//   'pseudoVerification',
//   'pureRegistrationV1',
//   'referAndEarn',
//   'referLater',
//   'refreshToken',
//   'releasePseudoBonus',
//   'resetPassword',
//   'sendInvite',
//   'setPassword',
//   'setScreenName',
//   'socialLoginSignup',
//   'stateList',
//   'stateUpdate',
//   'transactionHistory',
//   'unifiedLoginRegister',
//   'updateProfilePicture',
//   'verifyUserByOtp',
//   'verifyUserByPassword'
// ]
//     fileName.map(async(file)=>{
//         let functionName = 'platform-user-development-' + file

//         const params = {
//             FunctionName: functionName,
//             Qualifier: '595'
//         };
//         const lambda = new AWS.Lambda({
//             region: 'ap-south-1'
//         })

//         let data = await lambda.getProvisionedConcurrencyConfig(params).promise();
//         console.log(data)
//     })  

// };


// getProvisionedConcurrency()






// const { exec } = require("child_process");

// exec("ls", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });


const merge = (arr, s, e) => {
    let mid = Math.floor((s + e) / 2)
    let len1 = mid - s + 1
    let len2 = e - mid
    // console.log(len2,len1)
    let arr1 = []
    let arr2 = []
    let k = s
    for (let i = 0; i < len1; i++) {

        arr1[i] = arr[k++]
    }
    // console.log(arr1)
    k = mid + 1
    for (let i = 0; i < len2; i++) {
        arr2[i] = arr[k++]
    }
    k = 0
    let j = 0
    let start = s
    while (k < len1 && j < len2) {
        if (arr1[k] < arr2[j]) {
            arr[start++] = arr1[k++]

        }
        else {
            arr[start++] = arr2[j++]
        }

    }
    while (k < len1) {
        arr[start++] = arr1[k++]
    }
    while (j < len2) {
        arr[start++] = arr2[j++]
    }

    return arr;

}

// console.log(merge([2,3,45,7,1],1,3))



const mergeRecursive = (arr, s, e) => {
    if (s >= e) return arr
    let mid = Math.floor((s + e) / 2)
    arr = mergeRecursive(arr, s, mid)
    arr = mergeRecursive(arr, mid + 1, e)
    return merge(arr, s, e)

}

// console.log(mergeRecursive([2,3,45,7,1],0,4))

const quickSort = (arr, s, e) => {
    if (s >= e) {
        return arr
    }
    let arrayPos = { arr: arr, pos: s }
    arrayPos = partition(arrayPos, s, e)
    let p = arrayPos.pos
    arr = arrayPos.arr
    arr = quickSort(arr, s, p - 1)
    arr = quickSort(arr, p + 1, e)
    return arr
}

const partition = (arrayPos, s, e) => {
    let count = 0
    let arr = arrayPos.arr
    for (let i = s + 1; i <= e; i++) {
        if (arr[i] < arr[s]) {
            count++
        }
    }
    let temp
    let swapPos = s + count
    arrayPos.pos = swapPos
    temp = arr[swapPos]
    arr[swapPos] = arr[s]
    arr[s] = temp
    let i = s
    let j = e
    while (i < swapPos && j > swapPos) {
        while (arr[i] < arr[swapPos] && i <= swapPos) {
            i++
        }
        while (arr[j] > arr[swapPos] && j >= swapPos) {
            j--
        }
        if (i < swapPos && j > swapPos) {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    arrayPos.arr = arr
    return arrayPos
}

// console.log(partition({ arr: [5, 2, 8, 3], pos: 0 }, 0, 4))
//3,2,5,8
// console.log(quickSort([5,2,8,3],0,3))
// console.log(partition( { arr: [5, 2, 9, 1, 5, 6], pos: 0 },0,5))

var minPartitions = function (n) {
    if (n.includes(9)) return 9
    if (n.includes(8)) return 8
    if (n.includes(7)) return 7
    if (n.includes(6)) return 6
    if (n.includes(5)) return 5
    if (n.includes(4)) return 4
    if (n.includes(3)) return 3
    if (n.includes(2)) return 2
    if (n.includes(1)) return 1
    if (n.includes(0)) return 0

};

// var minOperations = function(n) {
//     if(n%2 != 0){
//         let multiple = (n-1)/2
//         let ans = 0;
//         while(multiple >=1){
//             ans = ans +(multiple*2)
//             multiple --
//         }
//         return ans
//     }  
//     let start = 1
//     if(n%2 === 0){
//         let len = n/2;
//         let ans = 0;
//         while(len>0){
//             ans=ans+start
//             start = start+2
//             len --
//         }
//         return ans
//     }
//   };
//   console.log(minOperations(6))
const util = require('util');
const { default: axios } = require("axios");
const { resourceUsage } = require("process");
const { result } = require("underscore");

global.numb = 2

const testFunc = async (data) => {
    return new Promise((resolve, reject) => {
        numb++;
        resolve(data * numb)
    })
}


const callFunc = async () => {
    await axios.post('http://www.google.com:81/', { name: 'dsada' }).then((data) => { console.log(data) }).catch((error) => { console.log(error) })
    // for (let i = 0; i < 10; i++) {
    //     //   testFunc(10).then((res)=>{console.log(res)}).catch((err)=>{return err})
    //     //   const setTimeout1=util.promisify(setTimeout)
    //     setTimeout1(testFunc(10), 500).then((res) => { console.log('inside test fun', res) }).catch((err) => { console.log(err) })
    //     console.log('here')
    // }
    console.log('before true')
    return true
}
// callFunc()


// console.log('here')


const maskvalue = value => {
    try {
        let obj = value
        if (typeof obj === 'number') obj = String(obj)
        let len = obj.length - 4
        return obj.slice(0, len).replace(/./g, '*') + obj.slice(len)
    } catch (error) {
        console.log(error)
    }
}


const recursive = (obj, maskingArray) => {
    try {
        let tempObj = {}
        Object.keys(obj).map(key => {

            if (typeof (obj[key]) === 'string') tempObj[key] = maskingArray.includes(key) ? maskvalue(obj[key]) : obj[key]
            if (typeof (obj[key]) === 'object') tempObj[key] = recursive(obj[key], maskingArray)
        })
        return tempObj
    } catch (error) {
    }
}





const iterative = (userDetails, maskingArray) => {
    let stackTrack = []
    let userCopy = { ...userDetails }
    stackTrack.push(userCopy)
    while (stackTrack.length > 0) {
        userDetails = stackTrack.pop()
        Object.keys(userDetails).forEach((key) => {
            if (typeof userDetails[key] === 'string' || typeof userDetails[key] === 'number') userDetails[key] = maskingArray.includes(key) ? maskvalue(userDetails[key]) : userDetails[key]
            if (typeof userDetails[key] === 'object' && userDetails[key] != null) {
                stackTrack.push(userDetails[key])

            }
        })

    }
    console.log(userCopy)
    return userCopy
}

exports.maskingfunc = (param, maskingArray) => {
    try {
        if (typeof (param) === 'string') return maskvalue(param)
        if (typeof (param) === 'object') return iterative(param, maskingArray || [])
    } catch (error) {
        console.log('Error in masking function ==> ', error)
    }
}




let userDetails = {
    name: "mainnnnn",
    nameList: {
        name: "ishan",
        nameA: "adithya",
        name3L: {
            name: "akash",
            name2: "upadhayay",
            name4L: {
                name: "siddarth",
                key: { nameA: 'sahil' }
            }
        }
    },
    age: {
        age1: 24,
        age2: 23,
        age3: 900000000000000
    }
}

let maskObj = {
    "_id": "bdeb59729af5105b",
    "a23ConvDate": 1597938200000,
    "a23RegDate": 1597937880000,
    "a23UserID": "kUy0204-deleted",
    "aadharApproved": false,
    "aceLevelUpdatedAt": 1597938200000,
    "ace_level": 1,
    "address": "hydhsakhdka kjds",
    "appleId": "undefined-deleted",
    "avatar": "jdlasdjinkznad",
    "bankList": [
        {
            "accountName": "Savings",
            "accountNumber": "hhhhhhhhhh",
            "bankApproved": true,
            "bankName": "ICICI Bank",
            "bankStatus": "approved",
            "bankUpdatedAt": 1597948200000,
            "ifscCode": "ICIC0000009",
            "isActive": true
        }
    ],
    "bon": 0,
    "code": "4J4PQJ-deleted",
    "contactPreferences": {
        "email": true,
        "fromTime": null,
        "language1": "English",
        "language2": "Tamil",
        "mobile": true,
        "postOffice": true,
        "pushNotification": true,
        "sms": true,
        "toTime": null
    },
    "country": "India",
    "currentAceLevel": 1,
    "currentAceLevelName": "bronze",
    "currentTotalAcePoints": 49,
    "device_id": "oiois8w9qw0w",
    "disableRedeemCancelFlag": false,
    "displayName": "kuy0204-deleted",
    "email": "122HJ@mail.com",
    "emailVerified": true,
    "exp": 0,
    "extraCash": 0,
    "facebookId": "undefined-deleted'",
    "funBalance": 5000,
    "gender": "Female",
    "googleId": "undefined-deleted",
    "holdAcePoints": 60,
    "ip": "11.22.33.44",
    "kyc1": true,
    "kyc2": false,
    "kyc3": true,
    "kyc4": true,
    "kycDocApprovedAt": 1458289245000,
    "kycDocApprovedBy": "Mallikarjun.D",
    "kycDocNumber": "FTN63Z0030852007",
    "kycDocStatus": "approved",
    "kycDocType": "driving-licence",
    "kycMessage": "Your PAN Is Verified",
    "kycUpdatedAt": 1598052259000,
    "kycUserName": "M H R",
    "lastAceLevel": 1,
    "lastActiveDate": 1633367422000,
    "levelno": "bronze",
    "manualRedeemAvailable": true,
    "maxAceLevel": 1,
    "maxTotalAcePoints": 49,
    "mobile": "+919162778765-deleted",
    "mobileMatch": "A",
    "mobileVerified": true,
    "name": "M H R",
    "panApproved": false,
    "password": "hjdglakdldgwidhlHD",
    "passwordStrength": 110,
    "playerStatus": "deleted",
    "postalCode": "600091",
    "referralFraudFlag": false,
    "referralMute": false,
    "region": "Tamil Nadu",
    "registrationIp": "12.23.34.45",
    "screenName": "kuy0204123332-deleted",
    "setPassword": false,
    "source": "a23",
    "state": "Tamil Nadu",
    "status": false,
    "subscriptionType": "pseudo-deleted",
    "tdsStatus": "approved",
    "teamname": "kuy0204-deleted",
    "teamNameChangeAvailable": false,
    "tnx": 0,
    "total": 1,
    "totalContextCount": 0,
    "totalDeposits": 950,
    "totalDepositsCount": 5,
    "totalRedeem": 400,
    "totalRedeemCount": 2,
    "totalWin": 0,
    "totalWinnings": 0,
    "updatedAt": 1633364413000,
    "userCode": "bdeb59729af5105b",
    "userName": "kuy0204-deleted",
    "username": "kuy0204",
    "win": 1,
    "win_pending": 0
}

//    console.log(JSON.stringify(maskingfunc(userDetails,['name','nameA','age3'])))
// console.log(JSON.stringify(iterative(userDetails, ['name', 'nameA', 'name1', 'name2'])))


// console.log(iterative(userDetails,['name']))
// const obj = {a: 1, b: 2};
// const stack = [obj.a];
// stack[0]=10
// console.log(obj)

// const obj = {a: 1, b: 2};
// const stack = [obj.a];

// // Modify the value in the stack
// stack[0] = 10;

// console.log(obj);



// var isPalindrome = function(x) {
//     if(x<0) return false

//     let copyx = x
//     let newNum = 0
//       while(copyx >0){
//          let lastDig = copyx%10
//           newNum = lastDig + newNum*10
//           copyx = Math.floor(copyx/10)
//      } 
//      console.log(copyx)
//      if(newNum == x ) return true

//      return false
//  };

//  console.log(isPalindrome(101))


// var maxArea = function(height) {
//     let max=0
//     for(let i=0;i<height.length;i++){
//         for(let j = i+1; j<height.length;j++){
//             let curr
//             curr = height[i]<height[j]?height[i]*(j-i):height[j]*(j-i)
//             if(curr > max) max = curr
//         }
//     }
//     return max
// };




// const getbetCategory = (bet, betCategoryConfigs) => {
//     let result = ""
//     betCategoryConfigs = { "high": 1101, "low": 249, "medium": 1100 }
//     if (bet <= betCategoryConfigs["low"]) result = "low"
//     if (bet <= betCategoryConfigs["medium"] && bet > betCategoryConfigs["low"]) result = "medium"
//     if (bet >= betCategoryConfigs["high"]) result = "high"
//     return result
// }

// console.info(getbetCategory(1000, {}))





// const maskvalue = value => {
//     try{
//       let obj = value
//       let len = obj.length - 4
//       return obj.slice(0, len).replace(/./g, '*') + obj.slice(len)
//     } catch(error){
//     }
//   }

// const recursive = (obj, maskingArray) => {
//   try {
//     let tempObj = {}
//     Object.keys(obj).map(key => {
//        if (typeof (obj[key]) === 'string') tempObj[key] = maskingArray.includes(key) ? maskvalue(obj[key]) : obj[key]
//        if (typeof (obj[key]) === 'object') tempObj[key] = recursive(obj[key], maskingArray)
//     })
//     return tempObj
//   } catch(error) {
//   }
// }

//   const iterative = (userDetails, maskingArray) => {
//     let stackTrack = []
//     let userCopy = { ...userDetails }
//     stackTrack.push(userCopy)
//     while (stackTrack.length > 0) {
//         userDetails = stackTrack.pop()
//         Object.keys(userDetails).map((key) => {
//             if (typeof userDetails[key] === 'string') userDetails[key] = maskingArray.includes(key) ? maskvalue(userDetails[key]) : userDetails[key]
//             if (typeof userDetails[key] === 'object' && userDetails[key]!= null) {
//                 stackTrack.push(userDetails[key])
//             }
//         })

//     }
//     return userCopy
//   }


//   const maskingfunc = (param, maskingArray) => {
//     try {
//       if (typeof (param) === 'string') return maskvalue(param)
//       if (typeof (param) === 'object') return iterative(param, maskingArray || [])
//     } catch(error) {
//       console.log('Error in masking function ==> ', error)
//     }
//   }

//   exports.maskingfunc = maskingfunc





exports.forEach = (items, str) => {
    console.log(items[0]([1,2],'hi'))
}

let newFunc = (items, string) => {
    for (let index = 0; index < items.length; index++) {
        console.log(string)
    }
    return 'worked'
}

let a = this.forEach
a([newFunc],'abc')