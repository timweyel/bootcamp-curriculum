// Write code to create a function that accepts two strings
// If the second string is found inside of the first string, 
// return its starting index in the first string
// Else return `-1`

var str1 = "JavaScript";
var str2 = "Scr";


// if str2 is empty, return '0'

// taket he first index of str2 and loop through str1
  // if it finds a match, str2[i] === 

  var strStr = function(str1, str2) {
    if (str2 === "") {
      return 0;
    }
  
    for (var i = 0; i < str1.length; i++) {
      var char = str1[i];
  
      if (char === str2[0]) {
        var j = i;
  
        var substr = str1.substring(i, i + str2.length);
  
        if (substr === str2) {
          return i;
        }
      }
    }
  
    return -1;
  };

  console.log(strStr(str1, str2));