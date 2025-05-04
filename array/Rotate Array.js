/* Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Do the mentioned change in the array in place.

Note: Consider the array as circular. */

class Solution {
    rotateArr(arr, d) {
        let n = arr.length;
        d %= n;
        
        this.reverse(arr, 0, d - 1);
        this.reverse(arr, d, n - 1);
        this.reverse(arr, 0, n - 1);
        
        return arr;
    }
    
    reverse(arr, start, end) {
        while(start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}

console.log(new Solution().rotateArr([1, 2, 3, 4, 5], 2))

// Output:
// [ 3, 4, 5, 1, 2 ]