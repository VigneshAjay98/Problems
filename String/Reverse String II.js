/* Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original. */

var reverseStr = function(s, k) {
    let arr = s.split('');
    for(let i = 0; i < s.length - 1; i += k * 2) {
        swap(i, Math.min(i + (k - 1), arr.length - 1));
    }

    function swap(start, end) {
        while(start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    return arr.join("");
};

console.log(reverseStr("abcdefg", 2));

// Output: abcdefg

// Time Complexity: O(n)