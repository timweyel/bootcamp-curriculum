// Write code to create a function that accepts a string 
//and returns an acronym for the given string

var acronymBuilder = function(str) {
  let strArr = str.split(' ');
  let acronym = "";
  
  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i];
    acronym += word[0].toUpperCase();
  }
  return acronym;
};

acronymBuilder("For your information");