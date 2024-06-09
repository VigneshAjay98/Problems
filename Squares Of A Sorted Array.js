/* Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order. */

/*

Example 1:

    Input: nums = [-4,-1,0,3,10]
    Output: [0,1,9,16,100]
    Explanation: After squaring, the array becomes [16,1,0,9,100].
    After sorting, it becomes [0,1,9,16,100].

Example 2:

    Input: nums = [-7,-3,2,3,11]
    Output: [4,9,9,49,121]

*/

var sortedSquares = function(nums) {
    let result = new Array(nums.length).fill(0);
    let left = 0;
    let right = nums.length - 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        if(Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = nums[left] ** 2;
            left++;
        } else {
            result[i] = nums[right] ** 2;
            right--;
        }
    }
    return result;
};

console.log(sortedSquares([-4,-1,0,3,10])); // Output: [ 0, 1, 9, 16, 100 ]

// Time Complexity:
// O(n)

// Space Complexity:
// O(n) Since returned "result" is a new array of same size as the input