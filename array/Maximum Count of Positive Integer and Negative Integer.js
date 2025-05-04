/* Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
Note that 0 is neither positive nor negative. */

var maximumCount = function(nums) {
    let posCount = 0, negCount = 0;
    for(let x of nums) {
        if(x > 0) {
            posCount++;
        } else if (x < 0) {
            negCount++;
        }
    }

    return Math.max(posCount, negCount);
};

console.log(maximumCount([-2,-1,-1,1,2,3]));

// Output:
// 3

// Time complexity: O(n)