// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

var reverseWords = function(str) {
  let strArr = str.split(' ');
  let reversedWords = strArr.reverse();
  return reversedWords.join(' ');
   

};

console.log(reverseWords("just keep swimming"))