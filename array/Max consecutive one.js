/* Given an array arr[] consisting of only 0’s and 1’s, return count of a maximum number of consecutive 1’s or 0’s present in the array.  */

class Solution {

    maxConsecutiveCount(arr) {
        let zero = 0, one = 0, maxZero = 0, maxOne = 0;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === 0) {
                zero++;
                maxZero = Math.max(zero, maxZero);
            } else {
                zero = 0;
            }
            
            if(arr[i] === 1) {
                one++;
                maxOne = Math.max(one, maxOne);
            } else {
                one = 0;
            }
        }
        
        return Math.max(maxZero, maxOne);
    }
}

console.log(new Solution().maxConsecutiveCount([1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]))

// Output:
// 4