class node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
let counter = -1
const makeTree = (nodes) => {
    counter++
    if (nodes[counter] == -1 || !nodes[counter]) {
        return null;
    }
    const newnode = new node(nodes[counter])
    newnode.left = makeTree(nodes)
    newnode.right = makeTree(nodes)
    return newnode

}
const preOrder = (tree) => {
    if (tree == null) return
    process.stdout.write(tree.data.toString() + " ")
    preOrder(tree.left)
    preOrder(tree.right)

}
const inOrder = (tree) => {
    if (tree == null) return
    inOrder(tree.left)
    process.stdout.write(tree.data.toString() + " ")
    inOrder(tree.right)

}
const postOrder = (tree) => {
    if (tree == null) return
    postOrder(tree.left)
    postOrder(tree.right)
    process.stdout.write(tree.data.toString() + " ")

}
const levelOrder = (tree) => {
    let queue = []
    queue.push(tree)
    queue.push(null)
    while (queue.length) {
        let node = queue.shift()
        if (node == null && !queue.length) break
        else if (node == null && queue.length) {
            console.log()
            queue.push(null)
        }
        else {
            process.stdout.write(node.data.toString() + " ")
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
}
let levelCount = 1
let sum = 0
const calculateLevelSum = (tree, n) => {
    let queue = []
    queue.push(tree)
    queue.push(null)
    while (queue.length) {
        let node = queue.shift()
        if (node == null && !queue.length) break
        else if (node == null && queue.length) {
            console.log()
            queue.push(null)
            levelCount = levelCount + 1
        }
        else {
            if (levelCount == n) {
                sum = sum + node.data
            }
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return sum
}


let countNode = 0
const countNodes = (tree) => {
    if (tree == null) return countNode
    countNode++
    countNodes(tree.left)
    countNodes(tree.right)
    return countNode
}
let sumOfNodes = 0
const nodesSum = (tree) => {
    if (tree == null) return
    sumOfNodes = sumOfNodes + tree.data
    nodesSum(tree.left)
    nodesSum(tree.right)
    return sumOfNodes
}
const calculateHeight = (tree) => {
    if (tree == null) return 0
    return 1 + maxFind(calculateHeight(tree.right), calculateHeight(tree.left))

}
const calculateDiameter = (tree) => {
    if (tree == null) return 0
    let totalHeight = calculateHeight(tree.left) + calculateHeight(tree.right) + 1
    // console.log(totalHeight)
    let diameterLeft = calculateDiameter(tree.left)
    let diameterRight = calculateDiameter(tree.right)

    return maxFind(diameterLeft, maxFind(diameterRight, totalHeight))


}
let flag = 0

const checkIsBalanced = (tree) => {
    if (tree == null) return 0
    let leftHeight = checkIsBalanced(tree.left)
    let rightHeight = checkIsBalanced(tree.right)
    if (Math.abs(leftHeight - rightHeight) > 1) flag = 1
    return maxFind(leftHeight, rightHeight) + 1
}

const calculateDiameterEffective = (tree) => {
    if (tree == null) return { height: 0, diameter: 0 }

    // console.log(totalHeight)
    let diameterLeft = calculateDiameterEffective(tree.left)
    let diameterRight = calculateDiameterEffective(tree.right)
    let currentDiameter = diameterLeft?.height + diameterRight?.height + 1
    return { diameter: maxFind(maxFind(diameterLeft, diameterRight), currentDiameter), height: maxFind(diameterLeft?.height + 1, diameterRight?.height + 1) }


}
const zigZag = (tree) => {
    let lrFlag = true
    let queue = []

    let zigzag = []

    queue.push(tree)
    while (queue.length) {
        let trackArr = []
        console.log(queue)

        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            let index = lrFlag === true ? i : len - i - 1
            trackArr[index] = node.data
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            console.log(queue)
        }
        for (let i of trackArr) zigzag.push(i)
        lrFlag = !lrFlag
    }
    return zigzag
}

const maxFind = (first, second) => {
    return first > second ? first : second
}
let nodes = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, 7, 8, -1, -1, -1, -1]
// let nodes = [1, 2, -1, -1, -1]
let tree = makeTree(nodes)

// levelOrder(tree)
// console.log(countNodes(tree))
// console.log(calculateDiameter(tree))
// console.log(calculateDiameterEffective(tree).diameter)
// console.log(zigZag(tree))
// console.log(calculateHeight(tree))
// console.log(levelOrder(tree))
// console.log(calculateLevelSum(tree,2))
// checkIsBalanced(tree) 
// if(flag == 1)console.log('Its not balanced')
// else console.log('its balanced')


//horizontal distance and data
const horizontalView = (tree) => {
    let queue = []
    queue.push({ 0: tree })
    let mappingObj = {}
    let finalArr = []
    while (queue.length) {
        let data = queue.shift()
        let horPos = parseInt(Object.keys(data)[0])
        let node = data[horPos]
        if (mappingObj[horPos]) mappingObj[horPos].push(node.data)
        else mappingObj[horPos] = [node.data]
        let leftHor = {}
        let rightHor = {}
        leftHor[horPos - 1] = node.left
        rightHor[horPos + 1] = node.right
        if (node.left) queue.push(leftHor)
        if (node.right) queue.push(rightHor)

    }
   
    let horKeyArr = Object.keys(mappingObj)
    for(let i = 0;i<horKeyArr.length;i++) horKeyArr[i] = parseInt(horKeyArr[i])
    horKeyArr.sort(function(a,b){return a - b})
    for(let i = 0;i<horKeyArr.length;i++){
        finalArr.push(...mappingObj[horKeyArr[i]])
    }
    console.log(finalArr)
}

// horizontalView(tree)
const topView = (tree) => {
    let queue = []
    queue.push({ 0: tree })
    let mappingObj = {}
    let finalArr = []
    while (queue.length) {
        let data = queue.shift()
        let horPos = parseInt(Object.keys(data)[0])
        let node = data[horPos]
        if (!mappingObj[horPos]) mappingObj[horPos] = [node.data]
        let leftHor = {}
        let rightHor = {}
        leftHor[horPos - 1] = node.left
        rightHor[horPos + 1] = node.right
        if (node.left) queue.push(leftHor)
        if (node.right) queue.push(rightHor)

    }
   
    let horKeyArr = Object.keys(mappingObj)
    for(let i = 0;i<horKeyArr.length;i++) horKeyArr[i] = parseInt(horKeyArr[i])
    horKeyArr.sort(function(a,b){return a - b})
    for(let i = 0;i<horKeyArr.length;i++){
        finalArr.push(...mappingObj[horKeyArr[i]])
    }
    console.log(finalArr)
}

// topView(tree)

const bottomView = (tree) => {
    let queue = []
    queue.push({ 0: tree })
    let mappingObj = {}
    let finalArr = []
    while (queue.length) {
        let data = queue.shift()
        let horPos = parseInt(Object.keys(data)[0])
        let node = data[horPos]
        
         mappingObj[horPos] = node.data
        let leftHor = {}
        let rightHor = {}
        leftHor[horPos - 1] = node.left
        rightHor[horPos + 1] = node.right
        if (node.left) queue.push(leftHor)
        if (node.right) queue.push(rightHor)

    }
   
    let horKeyArr = Object.keys(mappingObj)
    for(let i = 0;i<horKeyArr.length;i++) horKeyArr[i] = parseInt(horKeyArr[i])
    horKeyArr.sort(function(a,b){return a - b})
    for(let i = 0;i<horKeyArr.length;i++){
        finalArr.push(mappingObj[horKeyArr[i]])
    }
    console.log(finalArr)
}


// bottomView(tree)


const leftView = (tree) => {
    let queue = []
    queue.push({ 0: tree })
    let mappingObj = {}
    let finalArr = []
    while (queue.length) {
        let data = queue.shift()
        let horPos = parseInt(Object.keys(data)[0])
        let node = data[horPos]
        
         mappingObj[horPos] = node.data
        let leftHor = {}
        let rightHor = {}
        leftHor[horPos - 1] = node.left
        rightHor[horPos + 1] = node.right
        if (node.left) queue.push(leftHor)
        if (node.right) queue.push(rightHor)

    }
   
    let horKeyArr = Object.keys(mappingObj)
    for(let i = 0;i<horKeyArr.length;i++) horKeyArr[i] = parseInt(horKeyArr[i])
    horKeyArr.sort(function(a,b){return a - b})
    for(let i = 0;i<horKeyArr.length;i++){
        finalArr.push(mappingObj[horKeyArr[i]])
    }
    console.log(finalArr)
}



const mirrorView = (tree)=>{
    if(tree == null) return tree

    let copyTree = new TreeNode(tree.val)
    return makeMirror(tree,copyTree)
}

const makeMirror = (tree,copyTree)=>{
if(tree == null) return tree

if(tree.right)copyTree.left = new TreeNode(tree.right.val)
if(tree.left)copyTree.right = new TreeNode(tree.left.val)

makeMirror(tree.left,copyTree.right)
makeMirror(tree.right,copyTree.left)

return copyTree

}