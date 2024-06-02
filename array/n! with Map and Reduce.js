/* If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on. */


const input = 6;

const result = new Array(input)
    .fill(null)
    .map(function (currentValue, index) {
        return index + 1;
    })
    .reduce(function (accumulator, currentValue) {
        return accumulator * currentValue;
    });

console.log(result);

// Output:
// 720