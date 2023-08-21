// const rand = require('random-key')

const { array } = require("joi")

// var stringSimilarity = require("string-similarity");
// let myName="ishan rawat"
// let myAadharName="ISHAN RAWAT"
// var similarity = stringSimilarity.compareTwoStrings(myName,myAadharName)
// console.log(similarity)


// class Node1{

//     constructor(element){
//         this.element=element;
//         this.next=null;
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null;
//         this.size=0;
//     }
//     addElement(ele){
//         var node=new Node1(ele);
//         if(!this.head){
//             this.head=node;
//             this.size++
//         }
//         else{
//             var curr=this.head
//             while(curr.next){
//                 curr=curr.next
//             }
//             curr.next=node;
//             this.size++
//         }
//     }
//     deleteElementAtPos(pos){
//         if(this.head==null || pos>this.size||pos <=0){
//             return -1
//         }
//         if(!this.head.next){
//             this.head=null
//             return 1;
//         }
//         if(pos==1){
//             this.head=this.head.next
//             return 1
//         }
//         var curr=this.head
//         var prev=curr;

//         for(let i=0;i<pos-1;i++){
//             prev=curr;
//             curr=curr.next
//         }
//         prev.next=curr.next
//         this.size--
//     }
//     printll(){
//         var curr=this.head;

//         while(curr)
//         {
//             console.log(curr.element)
//             curr=curr.next
//         }


// }
// }



// var ll=new linkedList()
// ll.addElement(1)
// ll.addElement(2)
// ll.addElement(3)
// ll.addElement(4)
// ll.addElement(5)

// ll.printll()

// ll.deleteElementAtPos(5)
// ll.printll()


// const maskvalue = value => {
//     try{
//       let obj = value
//       let len = obj.length - 4
//       return obj.slice(0, len).replace(/./g, '*') + obj.slice(len)
//     } catch(error){
//     }
//   }

//   const recursive = (obj, maskingArray) => {
//     try {
//       let tempObj = {}
//       Object.keys(obj).map(key => {
//          if (typeof (obj[key]) === 'string') tempObj[key] = maskingArray.includes(key) ? maskvalue(obj[key]) : obj[key]
//          if (typeof (obj[key]) === 'object') tempObj[key] = recursive(obj[key], maskingArray)
//       })
//       return tempObj
//     } catch(error) {
//     }
//   }

//   const maskingfunc = (param, maskingArray) => {
//     try {
//       if (typeof (param) === 'string') return maskvalue(param)
//       if (typeof (param) === 'object') return recursive(param, maskingArray || [])
//     } catch(error) {
//       console.log('Error in masking function ==> ', error)
//     }
//   }


//   console.log(maskingfunc({
//     _id: 'bb79ed62-b59d-48d8-82a2-3341bb89ddfa',
//     userId: 'd4e92cfe-aa85-43aa-a4a9-ecd244e063fe',
//     user_id: 'wnf4mstg7clv0lm',
//     panApproved: false,
//     panStatus: 'processing',
//     panName: 'SANTOSH KUMAR JAISWAL',
//     panNumber: 'ABXPJ0019J',
//     reportIds: [ 'c61d514e-f526-4e8c-a226-eab2a4fa2169' ],
//     selfieKyc: false,
//     win_pending: 0,
//     win: 0,
//     dob: '24-09-1969',
//     total: 175,
//     screenName: 'ishanrawat',
//     panImage: 'https://s3.ap-south-1.amazonaws.com/fanfightappdev/9ZoE3WAH/ishanrawat_pan_card.jpg',
//     playerType: 'bronze',
//     checkStatus: 'in_progress',
//     type: 'kyc',
//     selfieOnlyKyc: false,
//     mobile: '+918939038399',
//     kycStatus: 'processing',
//     kycMessage: 'Checks created for tempering',
//     checksdata: [ 'document' ],
//     updatedAt: 1660900906104,
//     createdAt: 1660900906104
//   },["panName","panNumber","panImage","mobile"]))


//permutation of a string code

// let a=new Array(10).fill(0);//making an array of size 10 filled with 0's
// let res=[]//declaring a result array
// function permutation(str,k){//k is the position of the res to which an alphabet is added
// let i;
// let len=str.length
// if(!str[k]){// base condition when k exceeds length of string then print the result array
//   console.log(res)
//   return;
// }
// for(i=0;i<len;i++){
//   if(a[i]==0){
//     res[k]=str[i]
//     a[i]=1;
//     permutation(str,k+1)//recursive call to find permutation after you find 0 in 'a' array
//     a[i]=0;// making that particular element again as 0 and finding the other possibilities in that level
//   }
// }
// }
// permutation('abc',0)


// console.log(typeof null)
//solving infinite array problem

// let mainArr=[]


// function solveInfiniteArray(arr){

//   for(let i=0;i<arr.length;i++){
//     // if(typeof arr[i]!='object'){
//     //   mainArr.push(arr[i])
//     // }
//     // else{
//     //   solveInfiniteArray(arr[i])
//     //   break;
//     // }
//     typeof arr[i]!='object'?mainArr.push(arr[i]):solveInfiniteArray(arr[i]) ;

//   }
//   return mainArr;
// }

// console.log(solveInfiniteArray([1,2,3,[4,5,6,[7,8,9,[10,11,12]]]]))


// var actor={
//   name:"rajnikant",
//   movie:"kabali",

//   randFunction:  ()=>{
//     console.log(this.movie)
//   }
// }


// actor.randFunction();




// //  var checkInclusion = function(s1, s2) {


// //   if(s1.includes(s2)){
// //       return true
// //   }
// //   s2=s2.split("").reverse().join("");
// //   console.log(s1,s2)
// // if(s1.includes(s2)){
// //     return true
// // }
// //   return false
// // };


// checkInclusion("ab","eidbaooo")

// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
//  var checkInclusion = function(s1, s2) {
//   functionPerm(s1,0,s1.length)
//   console.log(getPerm)
//     for(let i=0;i<getPerm.length;i++){
//       console.log(getPerm[i])
//         if(s2.includes(getPerm[i])){
//             return true
//         }
//     }
//     return false;
// };
// let getPerm=[]

// function functionPerm(s,l,h){
//     let i;
//     if(l==h){
//         getPerm.push(s)
//         return;
//     }
//     let temp
//     for(i=l;i<h;i++){
//         s = swap(s, l, i);
//         functionPerm(s,l+1,h)
//         s = swap(s, l, i);

//     }
// }

// function swap(a, i, j)
// {
//     let temp;
// let charArray = a.split("");
// temp = charArray[i] ;
// charArray[i] = charArray[j];
// charArray[j] = temp;
// return (charArray).join("");
// }

// console.log(checkInclusion("","ccccbbbbaaaa"))



// let a={a:1,b:2}
// let b={b:2,a:1}
// let flag=0;
// for(let i in a){
//   if(a[i]!=b[i]){
//      console.log(false)
//      flag=1
//      break;
//   }
//   else{
//   flag=0
//   }
// }

// if(flag===0){
//   console.log(true)
// }


// function compareObjects(a,b)
// {
//   if(Object.keys(a).length !== Object.keys(b).length) return false;
//   if(Object.keys(a).length === 0) return false
//   for(let key in a)
//   {
//     if(a[key]!==b[key]) return false;
//   }
//   return true;
// }
// let a={a:1,b:2}
// let b={b:2,a:1}
// console.log(compareObjects(a,b))


// function findFrequency(a)
// {

//  var count = {};
//   a.split('').forEach((s)=> {
//      count[s] ? count[s]++ : count[s] = 1;
//   });
//   return count;
// }

// console.log(findFrequency('dabcccd'))



// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
//  exports.checkInclusion= (s1, s2) =>{
//   let startingWindow=0;
//   let endingWindow=s1.length;
//   let freqS1=findFrequency(s1)
//   while(endingWindow<=s2.length )
//       {
//        let str=s2.slice(startingWindow,endingWindow)
//        let countObj=findFrequency(str)
//        if(compareObjects(countObj,freqS1)) return true
//        startingWindow++;
//        endingWindow++
//       }
//   return false;
// };

// const reader = require('xlsx')
// const file = reader.readFile('./emailProduction.xlsx')
// var fs = require('fs');
// const { findOne, find, insertOne } = require('@hdworks/dynamo-db-wrapper')
// const calculate = async(decoded) => {
//   fs.readFile('data.txt', 'utf8', async(err, data) => {
//         let email_data=[]
//         const arr = data.split('\n');
//     try
//     {  
//         await Promise.all(  arr.map(async(i)=>
//        {
//           let emailUser = await find('users', { email: i }, 'email-index')
//           emailUser[0] ? email_data.push({ email: i,present: 'yes', screenName:emailUser[0].screenName}) : email_data.push({ email: i, present: 'no'}) 
//        }))
//         const ws = reader.utils.json_to_sheet(email_data)
//         reader.utils.book_append_sheet(file, ws)
//         reader.writeFile(file, './emailProduction.xlsx')    
//     }

//     catch(e)
//     {
//       console.log(e)
//       throw new Error(e)
//     }   

//     });

// }




// calculate()
// emailProduction.xlsx
// const compareObjects=(a,b)=>
// {
// if(Object.keys(a).length !== Object.keys(b).length) return false;
// if(Object.keys(a).length === 0) return false
// for(let key in a)
// {
//   if(a[key]!==b[key]) return false;
// }
// return true;
// }

// const findFrequency = (a)=>
// {

// var count = {};
// a.split('').forEach((s)=> {
//    count[s] ? count[s]++ : count[s] = 1;
// });
// return count;
// }


// console.log(this.checkInclusion("adc","dcda"))


// /**
//  * @param {number[]} nums
//  * @return {string[]}
//  */
//  let outputArr=[]
//  var summaryRanges = function(nums) {
//      let str="";
//      if(!nums) return;
//      str=`${nums[0]}`;

//      for(let i=1;i<=nums.length;i++)
//          {
//           if(nums[i]===nums[i-1]+1) str=nums[0]+"->"+nums[i]   
//           else if(nums[i]===nums[i-1]) continue;
//           else 
//              {
//                  outputArr.push(str)
//                  summaryRanges(nums.slice(i))
//                  break;
//              }   
//          }
//      return outputArr;
//  };



// //  console.log(summaryRanges([0,2,3,4,6,8,9]))
// const comparision=(entered,last)=>
// {
// if(entered=='/') return true
// if(entered=='*'&&last!='/') return true
// if(entered=='+' && last=='-') return true
// return false
// }
// const operation=(operator,num,num1)=>
// {   if(operator=='/') return(Math.floor(num1/num))
//     if(operator=='*') return (num*num1)
//     if(operator=='+') return (num+num1)
//     if(operator=='-') return (num-num1)

// }

// let numberArray=[]
// let operatorArray=[]
// var calculate = function(s) {
//     let flag=1;
//     for(let key in s)
//         {   
//             if(flag==0)
//             {       while(operatorArray.length>=2||comparision(operatorArray[operatorArray.length-2],operatorArray[operatorArray.length-1])){
//                       let num=numberArray.pop();
//                       let num1=parseInt(s[key])
//                       let operator=operatorArray.pop();
//                         if(operator=='/') numberArray.push(operation('/',num,num1))
//                         if(operator=='*')numberArray.push(operation('*',num,num1))
//                         if(operator=='+') numberArray.push(operation('+',num,num1))
//                         if(operator=='-') numberArray.push(operation('-',num,num1))
//                       flag=1;


//             }
//             }

//             if(s[key]=='+'||s[key]=='-'|| s[key]=='/'|| s[key]=='-'||s[key]=='*') operatorArray.push(s[key])
//             else if(s[key]!=' ') numberArray.push(parseInt(s[key]))
//             if(operatorArray.length>=2&&comparision(operatorArray[operatorArray.length-2],operatorArray[operatorArray.length-1]))
//             {
//                 flag=0;
//             }
//         }
//         while(operatorArray.length)
//         {
//                     let num=numberArray.pop();
//                     let num1=parseInt(numberArray.pop())
//                     let operator=operatorArray.pop();
//                         if(operator=='/') numberArray.push(operation('/',num,num1))
//                         if(operator=='*')numberArray.push(operation('*',num,num1))
//                         if(operator=='+') numberArray.push(operation('+',num,num1))
//                         if(operator=='-') numberArray.push(operation('-',num,num1))   
//         }
//         return numberArray[0];

// };
// console.log(calculate(" 3/2 "))




// calculate("3*4+2")


// const checkStr=(str)=>
// {
//     for(let key in str)
//     {
//         console.log(str[key])
//         str=str.slice(0,key)+""+str.slice(key+1)
//     }
// }

// console.log(checkStr("3+4/2*5")


// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
//  var productExceptSelf = function(nums) {
//     let product=1;
//     let flag=0;
//     let count=0
//     nums.map((ele)=>{
//         if(ele==0 && count==0) flag=1 
//         else if(ele==0 && count >=1) flag=2
//         else product=product*ele;
//     })
//     if(flag==0)
//         {
//           nums =  nums.map((ele)=> (product/ele))
//         }
//     else if(flag==1)
//         {
//             nums = nums.map((ele)=>{
//                 if(ele==0) return product
//                 else return 0
//             })
//         }
//     else
//         {
//             nums = nums.map((ele)=>  0)
//         }
//     return nums
// };

// console.log(productExceptSelf([0,0]))

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */

//  let maxArray=[]
//  var i=0

//  var maxSlidingWindow = function(nums, k) {
//      let j=i+k;
//      let max=nums[i]
//      if(nums.length==1) return [nums[0]]
//      if(j>nums.length) return
//      for(let k=i;k<j;k++)
//          {
//              if(nums[k]>max)
//              {
//              max=nums[k]    
//              }
//          }
//      maxArray.push(max)
//      i++;
//      maxSlidingWindow(nums,k)
//      return maxArray;
//  };
//  console.log(maxSlidingWindow([1,-1],1))


// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */


//  var maxSlidingWindow = function(nums, k,i=0,maxArray=[],flag=0,max=nums[0]) {
//     let j=i+k;

//     if(nums.length==1) return [nums[0]]
//     if(j>nums.length) return maxArray
//    if(flag==0){ 
//     for(let k=i;k<j;k++)
//         {
//             if(nums[k]>max) max=nums[k]    

//         }
//     maxArray.push(max)
//        flag=1;
//    }
//     else
//     {
//     if(nums[j-1]>max) max=nums[j-1]   
//     }
//      maxArray.push(max)
//     i++;
//     return maxSlidingWindow(nums,k,i,maxArray,flag,max)

// };

// maxSlidingWindow([1,3,-1,-3,5,3,6,7],3)


// /**
//  * @param {number[]} nums
//  * @return {string[]}
//  */
//  const comparision=(entered,last)=>
//  {
//  if(entered=='/') return true
//  if(entered=='*'&&last!='/') return true
//  if(entered=='+' && last=='-') return true
//  return false
//  }
//  const operation=(operator,num,num1)=>
//  {   if(operator=='/') return(Math.floor(num1/num))
//      if(operator=='*') return (num*num1)
//      if(operator=='+') return (num+num1)
//      if(operator=='-') return (num-num1)

//  }


//  var calculate = function(s) {
//      let numberArray=[]
//     let operatorArray=[]
//      let flag=1;
//      for(let key in s)
//          {   
//              if(flag==0)
//              {       while(operatorArray.length>=2||comparision(operatorArray[operatorArray.length-2],operatorArray[operatorArray.length-1])){
//                        let num=numberArray.pop();
//                        let num1=parseInt(s[key])
//                        let operator=operatorArray.pop();
//                          if(operator=='/') numberArray.push(operation('/',num1,num))
//                          if(operator=='*')numberArray.push(operation('*',num,num1))
//                          if(operator=='+') numberArray.push(operation('+',num,num1))
//                          if(operator=='-') numberArray.push(operation('-',num,num1))



//              }
//                flag=1;
//              }

//              if(s[key]=='+'||s[key]=='-'|| s[key]=='/'|| s[key]=='-'||s[key]=='*') operatorArray.push(s[key])
//              else if(s[key]!=' ') numberArray.push(parseInt(s[key]))
//              if(operatorArray.length>=2&&comparision(operatorArray[operatorArray.length-2],operatorArray[operatorArray.length-1]))
//              {
//                  flag=0;
//              }
//          }
//          while(operatorArray.length)
//          {
//                      let num=numberArray.pop();
//                      let num1=parseInt(numberArray.pop())
//                      let operator=operatorArray.pop();
//                          if(operator=='/') numberArray.push(operation('/',num,num1))
//                          if(operator=='*')numberArray.push(operation('*',num,num1))
//                          if(operator=='+') numberArray.push(operation('+',num,num1))
//                          if(operator=='-') numberArray.push(operation('-',num,num1))   
//          }
//          return numberArray.join("");

//  };


//  console.log(calculate("0-2147483647"))





// /**
//  * @param {number[]} temperatures
//  * @return {number[]}
//  */
//  var dailyTemperatures = function(temperatures) {
//   let finalArray =[]
// for(let firstIt in temperatures)
//   {     let flag = 0;
//         let count = 0;
//      for(let secondIt = parseInt(firstIt)+1; secondIt < temperatures.length; secondIt++)
//          {  count ++;
//              if(temperatures[secondIt] > temperatures[firstIt] )
//                  {
//                      flag=1
//                      break;
//                  }

//          }
//    if(flag==1)
//         finalArray.push(count)
//    else
//        finalArray.push(0)
//   }
//  return finalArray   
// };

// console.log(dailyTemperatures([74,75,67,89,99,100]))




// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
// var maxChunksToSorted = function (arr) {
//   let copyArr = [...arr]
//   let sortedArr = copyArr.sort((a, b) => a - b)
//   let count = 0

//   let nonSortobj = {}
//   let sortobj = {}
//   let counter = 0
//   for (let key = 0; key < sortedArr.length; key++) {
//     if (sortobj[arr[key]]) {
//       counter--;
//       sortobj[arr[key]]--
//     }
//     else {
//       counter++;
//       nonSortobj[arr[key]] ? nonSortobj[arr[key]]++ : nonSortobj[arr[key]] = 1
//     }
//     if (nonSortobj[sortedArr[key]]) {
//       counter--;
//       nonSortobj[sortedArr[key]]--
//     }
//     else {
//       counter++;
//       sortobj[sortedArr[key]] ? sortobj[sortedArr[key]]++ : sortobj[sortedArr[key]] = 1
//     }
//     if (counter == 0) count++
//   }

//   return count
// };
// console.log(maxChunksToSorted([0, 3, 0, 3, 2]))


// let text = "       Hello World!        ";
// let result = text.replace(/ /g, '')
// console.log(result)
// const fastFunc = async() => {
//    return new Promise((resolve)=>{
//     resolve('here')
//    })
// }


// const newFunc = async () => {
//     let count = 0
//     while (count < 2) {

//         await sleep(3000)
//         function sleep(ms) {
//             return new Promise((resolve) => {
//                 setTimeout(resolve, ms);
//             });
//         }
//          console.log(await fastFunc())
//         console.log(1)
//         count++
//     }
// }


// newFunc()


// const countBalanced = (str) => {
//     let stack = []
//     let count = 0;
//     for (let key in str) {
//         if (str[key] == '(') {
//             stack.push(str[key])
//         }
//         else if (str[key] == ')' && stack[stack.length - 1] == '(') {
//             count = count + 2;
//             stack.pop();
//         }
//     }
//     return count;
// }

// console.log(countBalanced(''))



// class Stack
// {
//     constructor()
//     {
//         this.item = []
//     }
//     push(element)
//     {
//         this.item.push(element)
//     }
//     pop()
//     {
//         if(!this.item.length) return "overflow"
//         else return this.item.pop();
//     }
//     peek()
//     {
//         return this.item[length-1]
//     }
//     isEmpty()
//     {
//         return this.item.length === 0
//     }
//     printStack()
//     {
//         let stackStr = ''
//         for(let itr of this.item)
//         {
//             stackStr = stackStr + itr
//         }
//         return stackStr
//     }
// }





// const flattenArray = (arr, retArr = []) => {
//     for (let key in arr) {
//         if (typeof arr[key] == 'number') retArr.push(arr[key])
//         else  flattenArray(arr[key], retArr)
//     }
//     return retArr
// }


// console.log(flattenArray([1, 2, 3, [2, 3, 4, [1, 2, 3]]]))







// const checkArray = (arr) => {
// // str = str +'a'
// arr.sort((a,b)=>a-b)
// }


// const mainFunc = () =>{
//     let arr = [2,1,3,5,2]
//     let str = 'dfsa'
//     checkArray(arr)
//     console.log(arr)

// }
// mainFunc()


// let heirarchy = {
//     'deepak': ['shiva sir'],
//     'shiva sir': ['amogh'],
//     'amogh': ['siddhu bhaiya', 'pranay bhaiya'],
//     'siddhu bhaiya': ['akash bhaiya', 'ishan',],
//     'pranay bhaiya': ['udit', 'sahil'],
//     'akash bhaiya': ['shubham'],
//     'ishan': [],
//     'shubham': [],
//     'udit': [],
//     'sahil': []

// }


// const followHeirarchy = (person, completeStructure = []) => {
//     let personCopy = [...person]
//     completeStructure.push(...personCopy)
//     for (let key in person) {

//         if (heirarchy[person[key]] != []) followHeirarchy(heirarchy[person[key]], completeStructure)


//     }
//     return completeStructure;
// }

// console.log(followHeirarchy(['siddhu bhaiya']))



//  var nextLargerNodes = function(head) {
//     //1. monotonic stack
//     //2. need to check index
//     let finalArray = [] // array in which final answer will be stored
//     let monotonicStack = [] // here an object will be pushed of position and value 
//     let i = 0
//     while(head)
//         {
//             let obj = monotonicStack[monotonicStack.length-1]
//             if(!monotonicStack.length || obj[Object.keys(obj)] > head.val) 
//                 {
//                     monotonicStack.push({i:head.val})
//                     i++
//                 }
//             else
//             {
//                 while(monotonicStack.length && parseInt(obj[Object.keys(obj)]) > parseInt(head.val))
//                     {
//                         finalArray[Object.keys(obj)] = head.val
//                         monotonicStack.pop()
//                     }
//                 monotonicStack.push({i:head.val})
//                 i++
//             }
//             head =head.next
//         }
//     while(monotonicStack.length)
//         {
//             let obj = monotonicStack[monotonicStack.length-1]
//             finalArray[Object.keys(obj)] = 0
//             monotonicStack.pop()
//         }
//     return finalArray

// };

// nextLargerNodes([1,2,3])

// const maskvalue = value => {
// 	try{
// 		let obj = value
// 		let len = obj.length - 4
// 		return obj.slice(0, len).replace(/./g, '*') + obj.slice(len)
// 	} catch(error){
// 		throw new Error(error)
// 	}
// }

// const recursive = (obj, maskingArray) => {
// 	try {
// 		let tempObj = {}
// 		Object.keys(obj).map(key => {
// 			if (typeof (obj[key]) === 'string') tempObj[key] = maskingArray.includes(key) ? maskvalue(obj[key]) : obj[key]
// 			if (typeof (obj[key]) === 'object') tempObj[key] = recursive(obj[key], maskingArray)
// 		})
// 		return tempObj
// 	} catch(error) {
// 		throw new Error(error)
// 	}
// }

// const maskingfunc = (param, maskingArray) => {
// 	try {
// 		if (typeof (param) === 'string') return maskvalue(param)
// 		if (typeof (param) === 'object') return recursive(param, maskingArray || [])
// 	} catch(error) {
// 		console.log('Error in masking function ==> ', error)
// 	}
// }


// console.log(maskingfunc('NA'))



// const newFunc = async () => {
//     let count = 0
//     while (count < 2) {

// 		await new Promise(resolve => setTimeout(resolve, 500))

//         console.log(1)
//         count++
//     }
// }


// newFunc()

// const FormData = require('form-data')
// let data = new FormData() 
// data.append('type', 'tax_id') 
// data.append('file', 'data') 
// data.append('applicant_id', 'applicant_id') 
// let testObj = {...data.getHeaders()}
// console.log(testObj)
// const _ = require('underscore')

// const compare = (a,b) => {
//     console.log('********** Compare Function ****************')
//     if((!_.isNull(a) && !_.isUndefined(a)) && (!_.isNull(b) && !_.isUndefined(b))) {
//       console.log('string a => ',a,' string b => ',b)
//       let first = a.split(' ')
//       let second = b.split(' ')
//       let counter = 0
//       for(let i=(first.length -1);i>=0;i--) {
//           for(let j=(second.length -1);j>=0;j--) {
//               if(first[i] === second[j]) {
//                   counter++
//                   break
//               }
//           }
//       }
//       return counter
//     } else {
//       console.log('string a => ',a,' string b => ',b)
//       return 0
//     }
//   }

//   console.log(compare('ishan singh rawat','ishan siggh rawat'))

// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
//  var tempArr = []
//  var permArr=[]
//  var combinationSum = function(candidates, target) {

//      for(let i =0 ;i<candidates.length;i++)
//          {   tempArr.push(candidates[i])   
//              if(target-candidates[i] === 0)
//              {  

//                  permArr.push(tempArr)
//                  tempArr = []
//              continue;
//              }
//              if(target-candidates[i]<0){ 

//               tempArr = []
//                continue;
//              }
//              combinationSum(candidates,target-candidates[i])

//          }
//      return permArr

//  }


//  console.log(combinationSum([2,3,5],8))
// const axios =require('axios')
// const callGit = async()=>{
// const gitHub = 'https://github.com/akshaymarch7'
// const resp =  axios.get(gitHub)
// resp.then((data)=>{
//     console.log(data)
// })
// }

// callGit()
// const AWS = require('aws-sdk');
// const { functions } = require("underscore");
// let docClient = new AWS.DynamoDB({
//     apiVersion: '2012-08-10',
//     region: 'ap-south-1'
//   })

//  docClient = new AWS.DynamoDB.DocumentClient({ service: docClient })

//  const scanTable = async () => {
// var newId = 'iSWH3oIu_210469'
// const params = {
//       TableName: 'pools_testing_120422',

//     ProjectionExpression: 'poolID, adminCommisionOverWrite, gameType',
//     FilterExpression: '#id = :newid',
//     ExpressionAttributeNames: {

//       '#id' : 'poolID'
//   },
//   ExpressionAttributeValues: {
//       ':newid': newId,
//   },
// };
// // let items=[];
// // items =  await docClient.scan(params).promise();
// // console.log(items)
//    docClient.scan(params, async(err,data)=>{
//     if(err) return err

//       console.log(data)
// })
//     var params1 = {
//       TableName: 'pools_testing_120422',
//       Item:{
//         "poolID": "0Ga9U08v_210467",
//         "adminCommisionOverWrite": 14.29,
//         "expiryttl": 1654193231,
//         "gameType": "cricket",
//         "poolAmount": 90,
//         "poolBeginner": false,
//         "poolBonusPercentage": 0,
//         "poolCategory": "5ba89af45d1152253d21228f",
//         "poolCreatedByUser": "ashok.soni@hdworks.in",
//         "poolCreatedByUserType": "admin",
//         "poolCreatedDateTime": 1649240872495,
//         "poolEntryFee": 35,
//         "poolFixedPosition": false,
//         "poolFreeApp": false,
//         "poolJoiningFee": 35,
//         "poolMatchFeedID": 210469,
//         "poolMatchStartDateTime": 1649273400000,
//         "poolMatchVsDetails": "KOL vs MUM - 14th Match T20",
//         "poolName": "Winner Takes All - 35",
//         "poolNumberOfWinners": 1,
//         "poolOrder": 7,
//         "poolPaymentSplitType": "custom",
//         "poolStatus": "completed",
//         "poolTotalUsersCount": 3,
//         "poolType": "single_team_unconfirmed",
//         "poolUpdatedDateTime": 1649240872495,
//         "poolUsersParticipatingCount": 3,
//         "poolWalletEntry": true,
//         "rankTable": {
//           "poolID": "0ca9U08v_210469",
//           "gameType": "cricket",
//           "rankTable": [
//           {
//             "M": {
//             "rank": {
//               "S": "Rank 1"
//             },
//             "winning": {
//               "S": "90.00"
//             }
//             }
//           }
//           ]
//         }
//       }
//     }
//     docClient.put(params1, function(err, data) {
//                   if (err) {
//                     console.log("Error", err);
//                   } else {
//                     console.log("Success", data);
//                   }
//                 })


// };
// scanTable()
// const AWS = require('aws-sdk')
//     AWS.config.update({region: 'ap-south-1'});
//     var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
// const insertTable = async () =>{

//     var params = {
//         TableName: 'pools_testing_120422',
//         Item:{
//             "poolID": {
//             "S": "QW90Ntp2_210470"
//            },
//            "adminCommisionOverWrite": {
//             "N": "15.97"
//            },
//            "expiryttl": {
//             "N": "1654193231"
//            },
//            "gameType": {
//             "S": "cricket"
//            },
//            "poolAmount": {
//             "N": "2000"
//            },
//            "poolBeginner": {
//             "BOOL": false
//            },
//            "poolBonusPercentage": {
//             "N": "0"
//            },
//            "poolCategory": {
//             "S": "5ba89af45d1152253d21228f"
//            },
//            "poolCreatedByUser": {
//             "S": "ashok.soni@hdworks.in"
//            },
//            "poolCreatedByUserType": {
//             "S": "admin"
//            },
//            "poolCreatedDateTime": {
//             "N": "1649252299345"
//            },
//            "poolEntryFee": {
//             "N": "595"
//            },
//            "poolFixedPosition": {
//             "BOOL": false
//            },
//            "poolFreeApp": {
//             "BOOL": false
//            },
//            "poolJoiningFee": {
//             "N": "595"
//            },
//            "poolMatchFeedID": {
//             "N": "210469"
//            },
//            "poolMatchStartDateTime": {
//             "N": "1649273400000"
//            },
//            "poolMatchVsDetails": {
//             "S": "KOL vs MUM - 14th Match T20"
//            },
//            "poolName": {
//             "S": "Winner Takes All - 595"
//            },
//            "poolNumberOfWinners": {
//             "N": "1"
//            },
//            "poolOrder": {
//             "N": "7"
//            },
//            "poolPaymentSplitType": {
//             "S": "custom"
//            },
//            "poolStatus": {
//             "S": "completed"
//            },
//            "poolTotalUsersCount": {
//             "N": "4"
//            },
//            "poolType": {
//             "S": "single_team_unconfirmed"
//            },
//            "poolUpdatedDateTime": {
//             "N": "1649252299345"
//            },
//            "poolUsersParticipatingCount": {
//             "N": "4"
//            },
//            "poolWalletEntry": {
//             "BOOL": true
//            },
//            "rankTable": {
//             "M": {
//              "poolID": {
//               "S": "QW90Ntp2_210469"
//              },
//              "gameType": {
//               "S": "cricket"
//              },
//              "rankTable": {
//               "L": [
//                {
//                 "M": {
//                  "M": {
//                   "M": {
//                    "rank": {
//                     "M": {
//                      "S": {
//                       "S": "Rank 1"
//                      }
//                     }
//                    },
//                    "winning": {
//                     "M": {
//                      "S": {
//                       "S": "2000.00"
//                      }
//                     }
//                    }
//                   }
//                  }
//                 }
//                }
//               ]
//              }
//             }
//            }
//     }
// }
//         ddb.putItem(params, function(err, data) {
//             if (err) {
//               console.log("Error", err);
//             } else {
//               console.log("Success", data);
//             }
//           })

// }

// // insertTable()

// //PUT ITEM REQUIRES THE INPUT FORMAT IN ABOVE FORM ONLY
// // DOESN'T LOOK GOOD FOR ME










// const reader = require('xlsx')
// const file = reader.readFile('./emailProduction.xlsx')
// var fs = require('fs');
// const { findOne, find, insertOne } = require('@hdworks/dynamo-db-wrapper')
// const calculate = async() => {
//   fs.readFile('data.txt', 'utf8', async(err, data) => {
//         let urlData=[]
//         const arr = data.split('\n');
//     try
//     {  
//         await Promise.all(arr.map(async(screenName)=>
//        {
//           let user = await find('users', { screenName: screenName }, 'screenName-index', {kycImageURL1: 1, kycImageURL2: 1})
//           console.log(user)
//           urlData.push({ screenName: screenName,kycImageURL1:user[0].kycImageURL1,kycImageURL2:user[0].kycImageURL2}) 
//        }))
//         const ws = reader.utils.json_to_sheet(urlData)
//         reader.utils.book_append_sheet(file, ws)
//         reader.writeFile(file, './emailProduction.xlsx')    
//     }

//     catch(e)
//     {
//       console.log(e)
//       throw new Error(e)
//     }   

//     });

// }
// calculate()






var AWS = require('aws-sdk')
// const S3bucket = new AWS.S3({ apiVersion: '2012-08-10', region: 'ap-south-1' })
// const reader = require('xlsx')
// const file = reader.readFile('./dupUrls.xlsx')
const { csv_readSync } = require('./csvread.js')
const {downloadImage} = require('./downloadS3')
const Path = require('path')

// const s3duplicateurl = async (screenName, url1, url2) => {
//   try {
//     console.log('*******DUPLICATE-S3-URL************')
//     let exactfilepath1 = url1.split('.')
//     let exactfilepath2 = url2.split('.')
//     console.log(url1, url2)
//     let params1 = { Bucket: "temp-ocr-dev", Key: `${screenName}_aadhar1.${exactfilepath1[(exactfilepath1.length) - 1]}`, CopySource: url1 }
//     let params2 = { Bucket: "temp-ocr-dev", Key: `${screenName}_aadhar2.${exactfilepath2[(exactfilepath2.length) - 1]}`, CopySource: url2 }
//     // let response1 = await S3bucket.copyObject(params1).promise()
//     // let response2 = await S3bucket.copyObject(params2).promise()
//     if (true) {
//       console.log(screenName, ' ==> Upload Done!')
//       // return { screenName: screenName, url1: `https://temp-ocr-dev.s3.ap-south-1.amazonaws.com/ocr-aadhar-idfy/${screenName}_aadhar1.${exactfilepath1[(exactfilepath1.length) - 1]}`, url2: `https://temp-ocr-dev.s3.ap-south-1.amazonaws.com/ocr-aadhar-idfy/${screenName}_aadhar1.${exactfilepath2[(exactfilepath2.length) - 1]}` }
//       return { screenName: screenName, url1: url1, url2: url2 }
//     }
//   } catch (error) {
//     console.log(screenName, ' ==> Error : ', error)
//   }
// }

const downloadImages = async () => {
  let csv_data = await csv_readSync('data.csv')
  // const urlData = []
  if (csv_data.length > 0) {
    for (const line of csv_data) {
      try {
      // console.log(line[0],line[1],line[2])
      // urlData.push(s3duplicateurl(line[0], line[1], line[2]))
      // const ws = reader.utils.json_to_sheet(urlData)
      // reader.utils.book_append_sheet(file, ws)
      // reader.writeFile(file, './dupUrls.xlsx')
      let exactfilepath1 = line[1].split('.')
      let exactfilepath2 = line[2].split('.')
      let path1 = Path.resolve(__dirname, 'images', `${line[0]}_aadhar1.${exactfilepath1[(exactfilepath1.length) - 1]}`)
      let path2 = Path.resolve(__dirname, 'images', `${line[0]}_aadhar2.${exactfilepath2[(exactfilepath1.length) - 1]}`) 
      downloadImage(line[1], path1)
      downloadImage(line[2], path2)
    }
    catch(error) {
      console.log(line[0], error)
    }
  }
  }
}

downloadImages()