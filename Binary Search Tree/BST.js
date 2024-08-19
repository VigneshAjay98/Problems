class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
                if(val < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(val > current.value) {
                        if(current.right === null) {
                            current.right = newNode;
                            return this;
                        } else {
                            current = current.right;
                        }
                    }
            }
        }
    }

    find(val) {
        let current = this.root,
            found = false;
        while(current && !found) {
            if(val < current.value) {
                current = current.left;
            } else if(val > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    BFS() {
        let queue = [],
            visited = [];
        queue.push(this.root);
        while(queue.length) {
            let node = queue.shift();
            visited.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return visited;
    }

    DFSPreOrder() {
        let visited = [];
        function traverse(node) {
            visited.push(node.value);
            node.left && traverse(node.left);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }

    DFSPostOrder() {
        let visited = [];
        function traverse(node) {
            node.left && traverse(node.left);
            node.right && traverse(node.right);
            visited.push(node.value);
        }
        traverse(this.root);
        return visited;
    }

    DFSInOrder() {
        let visited = [];
        function traverse(node) {
            node.left && traverse(node.left);
            visited.push(node.value);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(5);
bst.insert(8);
bst.insert(15);
bst.insert(20);
console.log(bst);