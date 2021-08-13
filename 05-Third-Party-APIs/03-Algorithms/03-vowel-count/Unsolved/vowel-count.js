// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
  // declare a count var
  // create a vowels array
  //iterate through array and see if value at each index is a vowelCount
    //if it is an vowel, increment a vowelCount variaable
  
  let count = 0;
  let vowels = [ 'a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (vowels.indexOf(char) != -1) {
      count++;
    }
  }
  return count;
};
