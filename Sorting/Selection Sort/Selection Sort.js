class SelectionSort
{

  //Function to sort the array using selection sort algorithm.
  sort(arr,n){
   //code here
   for(let i = 0; i < n; i++) {
       let lowest = i;
       for(let j = i + 1; j < n; j++) {
           if(arr[j] < arr[lowest]) {
               lowest = j;
           }
       }
       let temp = arr[i];
       arr[i] = arr[lowest];
       arr[lowest] = temp;
   }
   return arr;
  }
    
}

const selectionSort = new SelectionSort;

console.log(selectionSort.sort([4, 55, 3, 7], 4)); 

// Output: [ 3, 4, 7, 55 ]
// Time Complexity: O(n^2)