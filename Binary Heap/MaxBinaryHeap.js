class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    
    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let element = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentElement = this.values[parentIdx];
            if(element < parentElement) break;
            this.values[parentIdx] = element;
            this.values[idx] = parentElement;
            idx = parentIdx;
        }
    }

    extractMax() {
        let max = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown() {
        const length = this.values.length;
        let idx = 0;
        const element = this.values[0];

        while(true) {
            let leftChildIdx = (2 * idx) + 1;
            let rightChildIdx = (2 * idx) + 2;
            let swap = null;
            let leftChild, rightChild;
            
            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && (rightChild > element)) ||
                    (swap !== null && (rightChild > leftChild))
                ) {
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

const binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(5);
binaryHeap.insert(1);
binaryHeap.insert(6);
binaryHeap.insert(8);
binaryHeap.insert(7);

// 8 7 5 1 6