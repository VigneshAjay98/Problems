/* 

To find factorial of given number 

Example:

Input: n = 3
Output: 6

Explanation:
3! = 3 * 2 * 1

*/

var factorial = function(n) {
    if ( n === 0 ) return 1; // Factorial of 0 is 1
    return n * factorial(n - 1);
};

console.log(factorial(0));