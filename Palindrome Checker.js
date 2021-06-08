// Write a function that takes in a string and returns boolean.
// The function should return true if the given string is a palindrome or false if it is not.

function palindrome(str) {
    let unwanted = /[^A-Z0-9]/gi;
    let stripped = str.replace(unwanted, "").toLowerCase();
    let reversed = stripped.split("").reverse().join("");
    return stripped == reversed;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("almostomla"));
