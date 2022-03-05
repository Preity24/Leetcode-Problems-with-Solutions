/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    //return  s.trim().replace(/\s+/g, ' ').split(" ").reverse().join(" ");
   // Time Complexity = O(n) [n being length of s]
   // Space Complexity = O(n) 

/**
 * 1. split the string with a space to form an array of words
 * 2. reverse the words
 * 3. filter out the words that are empty
 * 4. join the array to form the resultant string
 */
    return s.trim().split(" ").reverse().filter((s)=>s != "").join(" ");
};