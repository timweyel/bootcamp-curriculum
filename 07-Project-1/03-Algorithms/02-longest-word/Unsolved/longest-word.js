// Write code to create a function that accepts a string 
//(`str`) and returns the longest word in the string

var longestWord = function(str) {
  let strArr = str.split(' ');

  let result = "";

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > result.length) {
      result = strArr[i];
    }
  }
  return result;
};

longestWord("i love programming");