// Write code to create a function that accepts a string and returns 
//the string in camelCase

var str = "let the force flow through you";

var camelCase = function(str) {
  let result = "";
  let strArr = str.toLowerCase().split(" ");
  console.log('strArr', strArr);

  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i];
    let letters = word.split("");

    if (i>0) {
      letters[0] = letters[0].toUpperCase();
    }
    result += letters.join("");
  }
  return result;
};

console.log(camelCase(str));