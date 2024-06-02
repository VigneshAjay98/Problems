/* The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. */

const input = "Every developer likes to mix kubernetes and javascript";

const createNumeronym = (word) =>
    word[0] + (word.length - 2) + word[word.length - 1];
  
const result = input
    .split(" ")
    .map((word) => (word.length >= 4 ? createNumeronym(word) : word))
    .join(" ");

console.log(result);

// Output:
// E3y d7r l3s to mix k8s and j8t