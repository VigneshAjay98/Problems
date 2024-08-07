// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
    let noSwaps;
    for(var i = arr.length; i > 0; i--){
      noSwaps = true;
      for(let j = 0; j < i - 1; j++){
        if(arr[j] > arr[j+1]){
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;         
        }
      }
      if(noSwaps) break;
    }
    return arr;
  }
  
  console.log(bubbleSort([8,1,2,3,4,5,6,7]));
  
  // Output: [ 1, 2, 3, 4, 5, 6, 7, 8 ]
  // Time Complexity:  O(n^2)