/* Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces. */

var reverseWords = function(s) {
    let res = '';
    let word = '';

    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] !== ' ') {
            word = s[i] + word;
        } else if(word.length > 0) {
            if(res.length > 0) res += ' ';
            res += word;
            word = '';
        }
    }

    if(word.length > 0) {
        if(res.length > 0) res += ' ';
        res += word;
    }

    return res;
};

console.log(reverseWords("  hello world  "));

// Time Complexity: O(n)

// Output:   hello world 