// Write code to create a function that accepts a string and 
// returns an object
// The object should contain keys for each character in the string
// Each key should point to an array containing the indexes the 
// character is found in the string

var str = "HTML & CSS";

var stringMap = function(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (obj[char]) {
      obj[char].push(i);
    } else {
      obj[char] = [i];
    }
  }
  return obj;
};

console.log(stringMap(str));