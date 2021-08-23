// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, 
// else return `false`

var arr = [20, -20, 18, 2, 3, 20]; 

var isUnique = function(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      return false;
    }
    
    obj[arr[i]] = true;
    
  }
  return true;
};

console.log(isUnique(arr));