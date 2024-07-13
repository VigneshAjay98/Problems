class QuickSort
{
    partition(arr, low, high){
        
        const swap = (arr, idx1, idx2) => {
            [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ];
        }
        
        let pivot = arr[low];
        let swapIdx = low;
        for(let i = low + 1; i <= high; i++) {
            if(pivot > arr[i]) {
                swapIdx++;
                swap(arr, swapIdx, i);
            }
        }
        
        swap(arr, swapIdx, low);
        return swapIdx;
    }
    
    sort(arr, low = 0, high = arr.length - 1){
        if(low < high) {
            let pivotIndex = this.partition(arr, low, high)
            this.sort(arr, low, pivotIndex - 1);
            this.sort(arr, pivotIndex + 1, high);
        }
        return arr;
    }

}


const quickSort = new QuickSort;

console.log(quickSort.sort([4, 55, 3, 7])); 

// Output: [ 3, 4, 7, 55 ]
// Time Complexity: O(n^2)