/* If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0. */

const input = [1, -4, 12, 0, -3, 29, -150];

const result = input
  .filter((num) => num > 0)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(result);

// Output:
// 42