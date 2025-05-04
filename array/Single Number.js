/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space. */

var singleNumber = function(nums) {
    let result = 0;
    for(let x of nums) {
        result ^= x;
    }

    return result;
};

console.log(singleNumber([4,1,2,1,2]));

// Output:
// 4

// Time complexity:O(n)
// Space complexity:O(1)