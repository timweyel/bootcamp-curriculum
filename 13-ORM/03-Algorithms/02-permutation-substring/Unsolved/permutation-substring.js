// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var str = "smapnuer";
var sub = "super";

var permutationSubstring = function(str, sub) {
  let obj = {};

  for (let i = 0; i < sub.length; i++) {
    let char = sub[i];

    if (char in obj) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char in obj) {
      obj[char] -= 1;
    }
  }

  for (let key in obj) {
    if (obj[key] > 0) {
      return false;
    }
  }
  return true;
};

console.log(permutationSubstring(str, sub));