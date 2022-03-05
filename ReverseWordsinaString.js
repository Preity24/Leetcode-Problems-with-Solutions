/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // Split the string into array
    let word = s.split(" ");
    // Loop through each word in an array, split, reverse and join
    let reverseWord = word.map(item => item.split("").reverse().join(""));
    return reverseWord.join(" ");
    
};

// Time Complexity: O(n^2)
// Space Complexity: O(n)
