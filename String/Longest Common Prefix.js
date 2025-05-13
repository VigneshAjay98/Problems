/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". */

var longestCommonPrefix = function(strs) {
    function commonPrefixLen(s1, s2) {
        let idx = 0;
        let len = Math.min(s1.length, s2.length);

        while(idx < len && s1[idx] === s2[idx]) {
            idx++;
        }

        return idx;
    }

    function longestCommonPrefix(strs) {
        let res = strs[0];
        for(let i = 1; i < strs.length; i++) {
            let len = commonPrefixLen(res, strs[i]);
            res = res.substring(0, len);
        }

        return res;
    }

    return longestCommonPrefix(strs);
};

console.log(longestCommonPrefix(["flower","flow","flight"])); // Output: fl
console.log(longestCommonPrefix(["dog","racecar","car"])); // Output: ""

// Time Complexity: O(n)