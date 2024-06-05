/* 
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.
*/

/* 
Example 1:
    Input: arr = [2,3,4,7,11], k = 5
    Output: 9
    Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

Example 2:
    Input: arr = [1,2,3,4], k = 2
    Output: 6
    Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.

*/

var findKthPositive = function(arr, k) {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
        let middle = Math.floor((start + end)/2);
        if (arr[middle] - (middle + 1) < k) {  // Note: Formula
            start = middle + 1;
        }
        else {
            end = middle - 1;
        }
    }
    return start + k;
};

console.log(findKthPositive([1, 3], 2));

// Output:
// 4