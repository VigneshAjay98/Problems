/* Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

Note: The second largest element should not be equal to the largest element. */

class Solution {

    getThirdLargest(arr, n)
    {
        let max = 0
        let size = n
        let largestElements = []
        if(n < 3) return -1
        for(let i = 0; i < size; i++) {
            max = Math.max(max, arr[i])
            if(i == size-1) {
               largestElements.push(max)
               let maxIndex = arr.indexOf(max)
               arr.splice(maxIndex, 1)
               i = -1
               size = arr.length
               max = 0
            }
            if(largestElements.length == 3) return largestElements[largestElements.length-1] 
        }
    }
}

console.log(new Solution().getThirdLargest([2, 4, 1, 3, 5], 5));

// Output:
// 3