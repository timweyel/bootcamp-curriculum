// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, 
// otherwise return false

// var strA = "nnjjdyus";
// var strB = "njdnsjyu";
var strA = "tacocat";
var strB = "ctatocato";

var isAnagram = function(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  } else {
    strA = strA.split('').sort().join('');
    // console.log(strA);
    strB = strB.split('').sort().join('');
    if (strA === strB) {
      return true;
    } else return false;
}
};

console.log(isAnagram(strA, strB));