class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.tail;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        let count = 0;
        let current = this.head;
        while(count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }

    set(index, val) {
        let selectedNode = this.get(index);
        if(selectedNode) {
            selectedNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        if(index < 0 || index > this.length) return false;
        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        newNode.next = prevNode.next
        prevNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        if(index < 0 || index >= this.length) return undefined;
        let prevNode = this.get(index - 1);
        let removedNode = prevNode.next
        prevNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

const list = new SinglyLinkedList();