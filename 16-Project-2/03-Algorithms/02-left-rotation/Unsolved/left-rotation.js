// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function

var arr = [1, 2, 3];
var positions = 2;

var leftRotation = function(arr, positions) {
  if (arr.length === 0) {
    return;
  }

  while (positions > 0) {
    let firstElem = arr.shift();
    console.log('firstElem', firstElem);
    console.log('arr', arr);
  
    arr.push(firstElem);

    positions--;
  } 
};

console.log(leftRotation());