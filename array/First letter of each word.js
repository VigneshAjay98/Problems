/* The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials. */

const input = "George Raymond Richard Martin";

const result = input
    .split(" ")
    .map((word) => word[0])
    .join("");

console.log(result);

// Output:
// GRRM