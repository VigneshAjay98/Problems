/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 */

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let charCounts = {};

    for(let x of s) {
        charCounts[x] = (charCounts[x] || 0) + 1;
    }

    for(let y of t) {
        if(!charCounts[y]) return false;
        charCounts[y]--;
    }

    return true;
};

console.log(isAnagram("anagram", "nagaram"));

// Output: true

// Time Complexity: O(n)