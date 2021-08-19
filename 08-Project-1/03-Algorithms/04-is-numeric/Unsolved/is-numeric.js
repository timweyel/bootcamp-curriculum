// Write code to create a function that accepts a string and 
//determines if the string is a valid number. You may not use 
//any regex, built-in methods type conversion to accomplish this.

var str = "-0123.00";
// var str = "+-a13";

var isNumeric = function(str) {
  if (str === '') {
    return false
  } else return !isNaN(str)
};
