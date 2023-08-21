// @ts-nocheck


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// /**
//  * @param {number[]} preorder
//  * @param {number[]} inorder
//  * @return {TreeNode}
//  */
// var buildTree = function (preorder, inorder) {

//     return buildTreeWrap(preorder, inorder, 0, inorder.length)
// };
// const buildTreeWrap = (preorder, inorder, start, end) => {
//     let mapObj = {}
//     for (let i = 0; i < inorder.length; i++) {
//         mapObj[inorder[i]] = i
//     }
//     return buildMainTree(preorder, start, end-1, mapObj)
// }


// var preCtr = 0
// const buildMainTree = (preorder, start, end, mapObj) => {

//     if (start > end) return null
//     let pos = mapObj[preorder[preCtr]]

//     let node = new TreeNode(preorder[preCtr++])
//     console.log(node)
//     if (start == end) return node

//     node.left = buildMainTree(preorder, start, pos - 1, mapObj)
//     node.right = buildMainTree(preorder, pos + 1, end, mapObj)

//     return node
// }



// console.log(JSON.stringify(buildTree([-1], [-1])))

var buildTree = function (inorder, postOrder) {

    return buildMainTree(postOrder, inorder,)
};
const findPos = (inOrder, data) => {
    for (let i = 0; i < inOrder.length; i++) {
        if (inOrder[i] == data) return i
    }

}
const buildMainTree = (postOrder, inOrder) => {
    console.log(postOrder, inOrder)
    if (!inOrder.length || !postOrder.length) return null
    let data = postOrder[postOrder.length - 1]
    let pos = findPos(inOrder, data)
    console.log(pos)
    let node = new TreeNode(data)
    if (inOrder.length == 1 || postOrder.length == 1) return node
    let inOrder1 = inOrder.splice(0, pos)

    inOrder.shift()
    let inOrder2 = JSON.parse(JSON.stringify(inOrder))

    let postOrder1 = postOrder.splice(0, pos)
    postOrder.pop()
    let postOrder2 = JSON.parse(JSON.stringify(postOrder))
    node.left = buildMainTree(postOrder1, inOrder1)
    node.right = buildMainTree(postOrder2, inOrder2)
    return node

}


console.log(JSON.stringify(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])))



var hasPathSum = function (root, targetSum) {
    checkHasPathSum(root, targetSum,)
};

const checkHasPathSum = (root, targetSum, sum) => {
    if (root === null) return false
    if (root.left == null && root.right == null) {
        if (targetSum == sum) return true
        return false
    }
    let leftCheck = false
    let rightCheck = false
    if (root.left) leftCheck = checkHasPathSum(root.left, targetSum, sum + root.val)
    if (root.right) rightCheck = checkHasPathSum(root.right, targetSum, sum + root.val)
    return leftCheck || rightCheck
}


var levelOrderBottom = function (root) {
    let queue = []
    let finalArr = []
    if (root == null) return []
    queue.push(root)
    queue.push(null)
    while (queue.length) {
        let tempArr = []
        let node = queue.shift()
        if (node === null) {
            if (queue.length) queue.push(null)
            finalArr.push(tempArr)
            tempArr = []
        }
        else {
            tempArr.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

    }
    return finalArr.reverse()
};


var flatten = function (root) {
    if (root == null) return null
    let newRoot = TreeNode(root.val)
    return flattenIt(root, newRoot)
};
const flattenIt = (root, newRoot) => {
    if(root ==null) return null
    if(root.left) newRoot.right = flattenIt(root.left,newRoot)
}