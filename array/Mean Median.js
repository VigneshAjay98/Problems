/* Note:
Mean of an array = (sum of all elements) / (number of elements)

The median of a sorted array of size N is defined as the middle element when N is odd and average of middle two elements when N is even. Since the array is not sorted here, we sort the array first, then apply above formula. 
*/




/* Calculate the mean and median values of the number elements from the input array. */

const input = [12, 46, 32, 64];

input.sort((a, b) => a - b);

const result = input.reduce(
  (accumulator, currentValue, index, array) => {
    accumulator.mean += currentValue / array.length;

    if (array.length % 2 === 0) {
      // if the array has an even number of elements
      if (index === array.length / 2 - 1) {
        accumulator.median += currentValue;
      } else if (index === array.length / 2) {
        accumulator.median += currentValue;
        accumulator.median /= 2;
      }
    } else {
      // if the array has an odd number of elements
      if (index === (array.length - 1) / 2) {
        accumulator.median = currentValue;
      }
    }

    return accumulator;
  },
  { mean: 0, median: 0 }
);

console.log(result);

// Output:
// { mean: 38.5, median: 39 }