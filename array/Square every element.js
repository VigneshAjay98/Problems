/* Square the value of every element in the array. Presume that you will only get numbers in the input array. */

const input = [1, 2, 3, 4, 5];

const result = input.map((num) => Math.pow(num, 2));

console.log(result);

// Output: 
// [ 1, 4, 9, 16, 25 ]