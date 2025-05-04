/* The hiring team aims to find 3 candidates who are great collectively. Each candidate has his or her ability expressed as an integer. 3 candidates are great collectively if the product of their abilities is maximum. Given the abilities of some candidates in an array, arr[], return the maximum collective ability from the pool of candidates. */

class Solution {
    maxProduct(arr) {
        let n = arr.length;

    // Initialize Maximum, second maximum 
    // and third maximum element
    let maxA = Number.MIN_SAFE_INTEGER,
    maxB = Number.MIN_SAFE_INTEGER,
    maxC = Number.MIN_SAFE_INTEGER;

    // Initialize Minimum and second
    // minimum element
    let minA = Number.MAX_SAFE_INTEGER,
    minB = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
        
        // Update Maximum, second maximum
        // and third maximum element
        if (arr[i] > maxA) {
            maxC = maxB;
            maxB = maxA;
            maxA = arr[i];
        } else if (arr[i] > maxB) {
            maxC = maxB;
            maxB = arr[i];
        } else if (arr[i] > maxC) {
            maxC = arr[i];
        }

        // Update Minimum and second minimum element
        if (arr[i] < minA) {
            minB = minA;
            minA = arr[i];
        } else if (arr[i] < minB) {
            minB = arr[i];
        }
    }

    return Math.max(minA * minB * maxA, maxA * maxB * maxC);
    }
}

console.log(new Solution().maxProduct([10, 3, 5, 6, 20]));

// Output:
// 1200