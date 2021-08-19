// Write code to return a new string with all of the characters in 
//`str` reversed.
// You may NOT use the built-in reverse method
var arr = [2, 4, 6, 8]
var reverseInPlace = function(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    arr.splice(i, 0, arr.pop());
  }
  return arr;
};

console.log(reverseInPlace(arr));