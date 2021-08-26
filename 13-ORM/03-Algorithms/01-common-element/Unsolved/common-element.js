// Write code to create a function that accepts two arrays of 
// numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var arrA = [1, 9, 8, 7];
var arrB = [10, 12, 1, 6, 5];

var commonElement = function(arrA, arrB) {
  let elements = {};

  for (let i = 0; i < arrA.length; i++) {
    let num = arrA[i];
    elements[num] = true;
  }

  for (let i = 0; i < arrB.length; i++) {
    let num = arrB[i];

    if (elements[num] === true) {
      return num;
    }
  } 
  
};

console.log(commonElement(arrA, arrB));