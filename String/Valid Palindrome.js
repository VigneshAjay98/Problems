/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. */

var isPalindrome = function(s) {
    let leftIdx = 0;
    let rightIdx = s.length - 1;
    while(leftIdx < rightIdx) {
        let leftChar = s.charAt(leftIdx);
        let rightChar = s.charAt(rightIdx);
        if(!isAlphaNumeric(leftChar)) {
            leftIdx++;
        } else if(!isAlphaNumeric(rightChar)) {
            rightIdx--;
        } else if(leftChar.toLowerCase() !== rightChar.toLowerCase()) {
            return false;
        } else {
            leftIdx++;
            rightIdx--;
        }
    }
    return true;
};

function isAlphaNumeric(character) {
    return /^[a-z0-9]$/i.test(character);
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));

// Output: true

// Time Complexity: O(n)