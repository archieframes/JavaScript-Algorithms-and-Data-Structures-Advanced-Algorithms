// Write a function that takes in a positive integer and returns the equivalent Roman Numeral.

function convertToRoman(num) {
    let numString = "" + num;
    let romanNumeral = "";
    
    const onesVar = numString[numString.length - 1];
    const tensVar = numString[numString.length - 2];
    const hundredsVar = numString[numString.length - 3];
    const thousandsVar = numString[numString.length - 4];

    const reference = {
        ones: {
            1: "I",
            2: "II",
            3: "III",
            4: "IV",
            5: "V",
            6: "VI",
            7: "VII",
            8: "VIII",
            9: "IX",
            0: ""
        },
        tens: {
            1: "X",
            2: "XX",
            3: "XXX",
            4: "XL",
            5: "L",
            6: "LX",
            7: "LXX",
            8: "LXXX",
            9: "XC",
            0: ""
        },
        hundreds: {
            1: "C",
            2: "CC",
            3: "CCC",
            4: "CD",
            5: "D",
            6: "DC",
            7: "DCC",
            8: "DCCC",
            9: "CM",
            0: ""
        },
        thousands: {
            1: "M",
            2: "MM",
            3: "MMM"
        }
    }

    if (thousandsVar) {
        romanNumeral += reference.thousands[thousandsVar];
    }
    if (hundredsVar) {
        romanNumeral += reference.hundreds[hundredsVar];
    }
    if (tensVar) {
        romanNumeral += reference.tens[tensVar];
    }
    if (onesVar) {
        romanNumeral += reference.ones[onesVar];
    }

    return romanNumeral;
}

console.log(convertToRoman(29));
console.log(convertToRoman(501));
console.log(convertToRoman(3999));