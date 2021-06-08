// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let solution = "";
  
    for (let i = 0; i < str.length; i++) {
        let strChar = str[i];
        let alphaIndex = alpha.indexOf(`${strChar}`);
        if (alphaIndex == -1) {
            solution += strChar;
        } else if (alphaIndex < 13) {
            solution += alpha[alphaIndex + 13];
        } else if (alphaIndex >= 13) {
            solution += alpha[alphaIndex - 13];
        }
    }
  
    return solution;
}
  
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));