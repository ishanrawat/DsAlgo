const mainFunc = ()=>{
let selConfig = {}
testThis(selConfig)
console.log(selConfig)
}
const testThis = (selConfig)=>{
    let newVar = {'a':1}
    selConfig.a = 1
}



mainFunc()