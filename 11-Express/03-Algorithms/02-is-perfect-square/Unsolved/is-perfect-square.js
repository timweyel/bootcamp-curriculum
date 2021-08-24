// Write code to create a function that accepts a number and returns 
// true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
//start with multiplying 0 * 0 and increment to 1 * 1, 2 * 2 until either
//that result is equal to num or exceeds it. if equal, then its perfect square
//if it exceeds num without ever equalling it then it's not a perfect square

  let i = 0;

  while(true) {
    let square = i * i;

    if (square === num) {
      return true;
    } else if (square > num) {
      return false;
    } else {
      i++;
    }
  }
};
