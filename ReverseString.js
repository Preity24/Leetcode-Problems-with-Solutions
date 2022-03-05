/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    // With inbuilt function
   // s.reverse().join("");  
    
    
    //Without inbuilt function
    
    let first = 0;
    let last = s.length - 1;
    
    while(first <= last){
        let temp = s[first];
        s[first] = s[last];
        s[last] = temp;
        first++;
        last--;
    }   
};