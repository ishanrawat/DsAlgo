


// const priorityDecider = (op) =>{
//     if(op == '-') return 1
//     if(op == '+') return 2
//     if(op == '*') return 3
//     if(op == '/') return 4

// }

// let infixOperator = '(A-B/C)*(A/K-L)'

// infixOperator = infixOperator.split('').reverse()

// for(let key in infixOperator)
// {  
//     if(infixOperator[key] == '(') infixOperator[key] = ')'
//     else if(infixOperator[key] == ')') infixOperator[key] = '('

// }
// let stack = []
// let finalString = ""
// infixOperator.map((el)=>{
//     if(el === '(') stack.push(el)
//     if(['*','-','+','/'].includes(el)) 
//     {
//         if(priorityDecider(el)>priorityDecider(stack[stack.length-1])) stack.push(el)
//         else
//         {
//             while(priorityDecider(el)<priorityDecider(stack[stack.length-1]) && stack.length )
//             {
//                 let op = stack.pop()
//                 finalString = op + finalString
//             }
//             stack.push(el)
//         }
//     }
//     if(el === ')')
//     {
//         while(stack[stack.length-1]==='(')
//         {
//             let op = stack.pop()
//             finalString = op + finalString

//         }
//         stack.pop()
//     }
//     else{
//         finalString = el + finalString
//     }
//     // while(stack.length)
//     // {
//     //    finalString = stack.pop() + finalString
//     // }
// })


// console.log(finalString)




const printTriangle = (n) => {
    let i,j
   if(!(n%2==0)){
     j = (n + 1) / 2
     i = j
   } 
   else{
    j = n/2
    i =j
   }
    while (i > 0 && j < n) {

        for (let k = 1; k <= n; k++) {
            if (k >= i && k <= j) {
                process.stdout.write('*')
            }
            else process.stdout.write(" ")
        }

        i--;
        j++
        console.log()
    }
console.log()
console.log()

}
printTriangle(8)