/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let word = s.split(" ");
    let reverseWord = word.map(item => item.split("").reverse().join(""));
    return reverseWord.join(" ");
    
};