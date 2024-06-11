/* 

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

*/

/*

Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

Example 2:
    Input: s = "rat", t = "car"
    Output: false

*/

var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }

    let frequency = {};
    for(let x of s) {  // O(n)
        if(frequency[x]) {
            frequency[x] += 1;
        } else {
            frequency[x] = 1;
        }
    }
    for(let y of t) { // O(n)
        if(!frequency[y] || frequency[y] === 0) {
            return false;
        }
        frequency[y] -=  1;
    }

    return true;
};

console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false

// Time Complexity:
// O(n)