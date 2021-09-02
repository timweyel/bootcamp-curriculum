// Write a function that takes a sorted array of numbers and 
// removes duplicates from the array
// Do not create a new array, instead modify the original array
// There is no need to return anything from this function

var arr = [1, 1, 2, 3, 4, 4, 9, 9];

// loop through array
// with each iteration set a variable to equal the element(i)
// set another variable to be i + 1
// if i === i + 1
  // then splice it off
  // decrement i because the array is shorter by one index now

var removeDuplicates = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    var elem = arr[i];
    var nextElem = arr[i + 1];
    
    if (elem === nextElem) {
      arr.splice(i, 1);
      i--;
    }
  }
};

console.log(removeDuplicates(arr));