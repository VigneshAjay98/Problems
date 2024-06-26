/* 
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity. 
*/

/* 
Example 1:
    Input: nums = [1,3,5,6], target = 5
    Output: 2

Example 2:
    Input: nums = [1,3,5,6], target = 2
    Output: 1

Example 3:
    Input: nums = [1,3,5,6], target = 7
    Output: 4 
*/

var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start <= end) {
        let middle = Math.floor((start + end) / 2);
        if(nums[middle] === target) return middle;
        if(target > nums[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return start;
};

console.log(searchInsert([1, 3], 2));

// Output:
// 1