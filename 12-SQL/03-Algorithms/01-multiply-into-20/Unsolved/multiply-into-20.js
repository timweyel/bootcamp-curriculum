// Write code to create a function that accepts an array of unique numbers
// If any two numbers in the array add up to 20, return true, else return 
// false

var arr = [3, 4, 5, 7, 9];

var multiplyInto20 = function(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    // console.log('currentNumber',currentNumber)

    let targetNumber = 20 / currentNumber;
    // console.log('targetNumber',targetNumber)

    if (obj[targetNumber]) {

      return true;
    } else {
      obj[currentNumber] = true;
    }
  }
  return false;
};


console.log(multiplyInto20(arr));