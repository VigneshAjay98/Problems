/* 
Given an integer n, return true if it is a power of three. Otherwise, return false.
An integer n is a power of three, if there exists an integer x such that n == 3x.

Example 1:

Input: n = 27
Output: true
Explanation: 27 = 33
Example 2:

Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.
Example 3:

Input: n = -1
Output: false
Explanation: There is no x where 3x = (-1).

Constraints:

-231 <= n <= 231 - 1 

*/

var isPowerOfThree = function(n) {
    if (n <= 0) return false;
    if (n === 1) return true;
    
    function helperRecursion(val) {
        if (val === 1) return true;
        if(val < 3) return false;
        return helperRecursion(val/3);
    }

    return helperRecursion(n/3);
};

console.log(isPowerOfThree(0));
console.log(isPowerOfThree(-1));
console.log(isPowerOfThree(27));