class InsertionSort
{

   //Function to sort the array using insertion sort algorithm.
    sort(arr,n){
        if(n <= 1) return arr;
        
        for(let i = 1; i < n; i++) {
            let currentVal = arr[i];
            for(var j = i - 1; j >=0 && arr[j] > currentVal; j--) {
                arr[j+1] = arr[j];
            }
            arr[j+1] = currentVal
        }
        
        return arr;
    }
    
}

const insertionSort = new InsertionSort;

console.log(insertionSort.sort([4, 55, 3, 7], 4))

// Output: [ 3, 4, 7, 55 ]
// Time Complexity: O(n^2)