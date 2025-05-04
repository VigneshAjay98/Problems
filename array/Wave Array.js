/* Given a sorted array arr[] of distinct integers. Sort the array into a wave-like array(In Place). In other words, arrange the elements into a sequence such that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5].....
If there are multiple solutions, find the lexicographically smallest one.

Note: The given array is sorted in ascending order, and you don't need to return anything to change the original array. */

class Solution {
    convertToWave(arr) {
        
        function swap(arr, start, end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];    
        }
        
        for(let i = 0; i < arr.length; i += 2) {
            if(i > 0 && arr[i] < arr[i - 1]) {
                swap(arr, i - 1, i)
            }
            
            if(i < arr.length - 1 && arr[i] < arr[i + 1]) {
                swap(arr, i, i + 1)
            }
        }
        
        return arr;
    }
}

console.log(new Solution().convertToWave([1, 2, 3, 4, 5]));

// Output:
// [ 2, 1, 4, 3, 5 ]