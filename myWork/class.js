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
const levelOrder = (tree) =>{
    let queue = []
    queue.push(tree)
    queue.push(null)
    while(queue.length){
        let node = queue.shift()
        if(node == null && !queue.length) break
        else if(node == null && queue.length){ 
            console.log()
            queue.push(null)}
        else{

            process.stdout.write(node.data.toString() + " ")
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
}

let nodes = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1]
let tree = makeTree(nodes)
levelOrder(tree)
console.log()
