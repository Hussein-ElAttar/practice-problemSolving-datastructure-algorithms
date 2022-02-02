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

    insert(node) {
        // To avoid creating instance and passing it to the function
        node = !isNaN(node) ? new Node(node) : node;

        // Implementation
        if (node.data <= this.data) {
            if (this.left == null) {
                this.left = node;
                return this;
            }
            this.left.insert(node);
        } else {
            if (this.right == null) {
                this.right = node
                return this;
            }
            this.right.insert(node);
        }

        return this;
    }

    preOrderTraversal(node) {
        if (node === null) { return; }

        console.log(node.data);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }

    inOrderTraversal(node = this) {
        if (node === null) { return; }

        this.inOrderTraversal(node.left);
        console.log(node.data);
        this.inOrderTraversal(node.right);
    }

    postOrderTraversal (node = this) {
        if (node === null) { return; }

        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.data);
    }

    reverseTree (node = this) {
        if (node === null || (!node.left && !node.right)) { return; }

        const temp = node.left;
        node.left = node.right;
        node.right = temp;

        this.reverseTree(node.left);
        this.reverseTree(node.right);
    }
    BFT(node = this) {
        const queue = [];

        queue.push(node);
        while (queue.length) {
            const nextNode = queue.shift();

            console.log(nextNode.data);

            if (nextNode.left) {
                queue.push(nextNode.left);
            }

            if (nextNode.right) {
                queue.push(nextNode.right);
            }
        }
    }
}    

/*
        10
    5       11
 4     6 12     3

*/

// BFT(rootNode);

const rootNode =
    new Node(10)
    .insert(5)
    .insert(11)
    .insert(4)
    .insert(6)
    .insert(12)
    .insert(3);

// rootNode.reverseTree();
// rootNode.inOrderTraversal();
rootNode.BFT();