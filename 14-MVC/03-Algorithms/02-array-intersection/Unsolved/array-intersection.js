// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arr1 = [1, 2, 3, 4];
var arr2 = [3, 4, 5, 6];

var arrayIntersection = function(arr1, arr2) {
  let numTracker = {};
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let num = arr1[i];

    if (numTracker[num] === undefined) {
      numTracker[num] = 1;
    } else {
      numTracker[num]++;
      console.log('numTracker1', numTracker)
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let num = arr2[i];

    if (numTracker[num]) {
      result.push(num);
      // console.log('result',result)
      numTracker[num]--;
      // console.log('numTracker2', numTracker);
    }
  }
  return result;
  };

  console.log(arrayIntersection(arr1, arr2));