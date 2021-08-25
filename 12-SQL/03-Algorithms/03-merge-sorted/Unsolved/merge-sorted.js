// Write code to merge two sorted arrays into a new sorted array

var arr1 = [4, 8, 15, 16, 23, 42];
var arr2 = [1, 2, 3, 6, 20, 21];

var mergeSorted = function (arr1, arr2) {
  let result = [];

  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    let num1 = arr1[index1];
    let num2 = arr2[index2];

    if (num1 < num2) {
      result.push(num1);
      console.log('arr1', arr1);
      index1++;
    } else {
      result.push(num2);
      console.log('arr2', arr2);
      index2++;
    }
    //this loop will push all values until the loop hits the last index of one of the arrays
  }

  //need these loops to go through what's left of an array that still has elements in it
  while (index1 < arr1.length) {
    let num1 = arr1[index1];
    result.push(num1);
    index1++;
  }

  while (index2 < arr2.length) {
    let num2 = arr2[index2];
    result.push(num2);
    index2++;
  }

  return result;
};

console.log(mergeSorted(arr1, arr2));
