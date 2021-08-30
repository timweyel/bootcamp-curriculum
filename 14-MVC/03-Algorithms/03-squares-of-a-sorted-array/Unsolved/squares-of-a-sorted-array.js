// Write code to create a function that accepts an array of 
// integers sorted in ascending (increasing) order and returns 
// a new array containing the squares of each number in ascending 
// order

var arr = [-4, -1, 0, 3, 10];

var sortedSquares = function(arr) {
  let squaredArr = arr.map(function(e) {
    return e ** 2;
  });
  let sortedSquares = squaredArr.sort(function(a, b) {
    return a - b;
  });
  return sortedSquares;
};

console.log(sortedSquares(arr));