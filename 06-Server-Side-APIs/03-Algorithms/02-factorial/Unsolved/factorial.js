// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
  let result = 1;

  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
};
