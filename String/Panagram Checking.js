/* A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise. */

var checkIfPanagram = function(sentence) {
    let charSet = new Set();
    for(let x of sentence) {
        charSet.add(x);
    }

    if(charSet.size !== 26) {
        return false;
    }

    return true;
};

console.log(checkIfPanagram("thequickbrownfoxjumpsoverthelazydog"));

// Output: true

// Time Complexity: O(n)