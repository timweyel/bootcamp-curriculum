// Write code to create a function that accepts a non-negative 
// integer and returns the square root of the integer. If the 
//square root is a decimal number, round down to the nearest 
// whole integer
// You may not use the built-in `Math.sqrt` method

var num = 6;

var sqrt = function(num) {
  for (let i = 0; i <= num; i++) {
    let squaredNum = i * i;

    if (squaredNum === num) {
      return i;
    }
    if (squaredNum > num) {

      return i - 1;
    }
  }
};

console.log(sqrt(num));


// num = 25
// result should be 5
// loop, increment i, mulitply i time i with each iteration. 
  // if the result of i*i is === number
  // then the answer is i
// else if the result is greater than num
  // then the answer is i - 1

  // so if num = 6, then in the loop, 3*3 will return 9 which is 
  // greater than 6, and since we know that the sqrt of 6 is 
  // 2.45 and the reqs say to round down, we want to return 2.
  // so we have to do 3 -1, or i - 1.
