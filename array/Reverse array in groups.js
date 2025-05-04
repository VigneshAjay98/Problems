/* Given an array arr of positive integers. Reverse every sub-array group of size k.

Note: If at any instance, k is greater or equal to the array size, then reverse the entire array. You shouldn't return any array, modify the given array in place. */

class Solution {
    reverseInGroups(arr, k) {
        for(let i = 0; i < arr.length; i += k) {
            let left = i;
            let right = Math.min(i + (k - 1), arr.length - 1);
            while(left < right) {
                [arr[left], arr[right]] = [arr[right], arr[left]]
                left += 1;
                right -= 1;
            }
        }
        return arr;
    }
}

console.log(new Solution().reverseInGroups([1, 2, 3, 4, 5], 3))

// Output:
// [ 3, 2, 1, 5, 4 ]