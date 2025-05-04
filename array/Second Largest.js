/* Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

Note: The second largest element should not be equal to the largest element. */

class Solution {
    
    getSecondLargest(arr) {
        let largest = -1;
        let secLargest = -1;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > largest) {
                secLargest = largest;
                largest = arr[i];
            }
            else if(arr[i] < largest && arr[i] > secLargest) {
                secLargest = arr[i];
            }
        }
        return secLargest;
    }
}

console.log(new Solution().getSecondLargest([12, 35, 1, 10, 34, 1]));

// Output:
// 34