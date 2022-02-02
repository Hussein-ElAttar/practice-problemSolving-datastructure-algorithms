const Node = class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    setLeft(node) {
        this.left = node;
    }

    setRight(node) {
        this.right = node
    }
}

const BFT = function (node) {
    if (!node) { return; }

    const queue = [];

    queue.push(node);

    while (queue.length > 0) {
        nextNode = queue.shift();
        if (nextNode) {
            console.log(nextNode.data);
            queue.push(nextNode.left);
            queue.push(nextNode.right);
        }
    }
}

const preOrderTraversal = function (node) {
    if (!node) { return; }

    console.log(node.data);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
}

const inOrderTraversal = function (node) {
    if (!node) { return; }

    preOrderTraversal(node.left);
    console.log(node.data);
    preOrderTraversal(node.right);
}

const postOrderTraversal = function (node) {
    if (!node) { return; }

    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
    console.log(node.data);
}

const sumTree = function (node) {
    if (!node) { return 0; }

    const leftSum = sumTree(node.left);
    const rightSum = sumTree(node.right);

    return node.data + leftSum + rightSum;
}

/*
               2
        6             0
    2      3             8
         7   9        5

*/

const rootNode = new Node(2);
const n0 = new Node(0);
const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n5 = new Node(5);
const n6 = new Node(6);
const n7 = new Node(7);
const n8 = new Node(8);
const n9 = new Node(9);

rootNode.setLeft(n6);
rootNode.setRight(n0);

n6.setLeft(n2);
n6.setRight(n3);

n0.setRight(n8);

n3.setLeft(n7);
n3.setRight(n9);

n8.setLeft(n5);

// preOrderTraversal(rootNode);

console.log(sumTree(n3))

// BFT(rootNode);
// console.log(rootNode.left.left.data);








// ==============================================

// const rootNode = new Node(2);
// const n6 = new Node(6);
// const n2 = new Node(2);
// const n3 = new Node(3);
// const n0 = new Node(0);
// const n1 = new Node(1);
// const n8 = new Node(8);

// rootNode.setLeft(n6);
// rootNode.setRight(n0);

// n6.setLeft(n2);
// n6.setRight(n3);

// n0.setLeft(n1);
// n0.setRight(n8);

/*
        2
    6       0
 2     3 1     8

*/

/*
               2
        6             0
    2      3       1     8
  6   5  4   4   2   4 5    6

*/