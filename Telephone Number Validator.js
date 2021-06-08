// Write a function that takes a string and returns a boolean.
// Return true if the passed string looks like a valid US phone number and false if not.

function telephoneCheck(str) {
    const regex = [
        /^1\s?(\d{3}-|\(\d{3}\)\s?)\d{3}-\d{4}$/,
        /^\d{3}(\d{3}|-\d{3}-)\d{4}$/,
        /^\(\d{3}\)\d{3}-\d{4}$/,
        /^1\s?\d{3}\s?\d{3}\s?\d{4}$/
    ]
  
    return (
        regex[0].test(str) ||
        regex[1].test(str) ||
        regex[2].test(str) ||
        regex[3].test(str)
    );
}

console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("1 456 789 4444"));
console.log(telephoneCheck("2(757)622-7382"));