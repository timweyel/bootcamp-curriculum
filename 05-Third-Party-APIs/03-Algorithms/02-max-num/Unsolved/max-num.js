// Write code to return the largest number in the given array

var maxNum = function(arr) {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    if (currentNum > largest) {
      largest =   currentNum;
    }
  }
  return largest;
};
var arr = [3, 1, 17, 5, 6];
console.log(maxNum(arr));