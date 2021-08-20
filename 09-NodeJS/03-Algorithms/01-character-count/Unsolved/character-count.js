// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var str = "Hello World!";

var characterCount = function(str) {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    let character = str[i];

    if (character in result) {
      result[character]++;
    } else {
      result[character] = 1;
    }
  }
  return result;
};

console.log(characterCount(str));