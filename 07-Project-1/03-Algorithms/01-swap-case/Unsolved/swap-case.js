// Write code to create a function takes a string and 
//returns the string with all of the letter cases swapped

var swapCase = function(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
};
