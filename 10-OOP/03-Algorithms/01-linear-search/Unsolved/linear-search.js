// Write code to create a function that accepts an array of numbers 
//and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var arr = [82, 22, -4, 21, 1, 8];
var target = 8;
// console.log(arr[5])

var linearSearch = function(arr, target) {
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === target) {
      return i;
    } 
  }
  return -1;
};

console.log(linearSearch(arr, target));
