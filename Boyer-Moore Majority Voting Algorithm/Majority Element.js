/* 

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

*/

/*

Example 1:
    Input: nums = [3,2,3]
    Output: 3

Example 2:
    Input: nums = [2,2,1,1,1,2,2]
    Output: 2

*/

var majorityElement = function(nums) {
    let element = nums[0];
    let count = 0;
    for(let x of nums) {
        if(count === 0) {
            element  = x;
        }
        if(element === x) {
            count++;
        } else {
            count--;
        }
    }
    return element;
};

console.log(majorityElement([2,2,1,1,1,2,2]));

// Output:
// 2