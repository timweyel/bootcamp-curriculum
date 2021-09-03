// Write a function that takes an unsorted array of positive and unique integers and returns the number missing from the array

var arr = [3, 0, 1];

var missingNumber = function(arr) {
  arr.sort();

  let numbersFound = {};

  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];

    numbersFound[elem] = true;
  }

  for (let i = 0; i < arr.length + 1; i++) {
    if (!numbersFound[i]) {
      return i;
    }
  }
};

console.log(missingNumber(arr));

// sort array
// loop through array
// check each element to see that 



// arr = [3, 0, 1];
// i = 0
// does arr[i] + 1 === arr[i + 1]
  // if so, increment i
  // if not, return arr[i] + 1