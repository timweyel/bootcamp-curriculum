// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome
// A palindrome is a sentence when spelled backwards still produces the same sentence

// race car   => race car   // true
// taco cat  => taco cat   // true
// civic  => civic  // true
// ci11ic => ci11ic // true

// Race car   => race car   // false
// civic! => !civic  // false
// rat   rat
//
//
//
// => tar  // false
// richard ramirez => zerimar drahcir  // false
// manny => ynnam  // false
//

// Questions
// Does casing matter and spacing matter
// Make it so that spacing doesnt matter and casing doesnt matter
// What if we have numbers deal with numbers as well
// Deal with special characters as well
// Are we always expected to get a string? // null, 0, undefined, [], {} and so much more

var isPalindromeNoneOptimal = function(str) {
  str = str.replace(/[\W_]/g, '');
  // split, reverse and join is 3 for loops
  return str === str.split('').reverse().join('');
};

var isPalindromeOptimal = str => {
  str = str.replace(/[\W_]/g, '');
//   1 for loop
  for (let i = 0; i < str.length /2; i++) {
    console.log(' I AM THE I', i);
    // Each iteration the for loop creates a new instance of currentLetter
    const currentLetter = str[i];
    console.log('I AM CURRENT LETTER', currentLetter);
    // civic
    // 1st iteration
    // currentLetter ===  c
    // i === 0
//  c === c
    // 2nd iteration
    // currentLetter === i
    // i === 1
    if (currentLetter !== str[str.length -1 - i]) {
      return false;
    }
  }
  return true;
}
