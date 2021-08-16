// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
  let result = [];

  let wordsArr = str.split(" ");

  for (let i = 0; i < wordsArr.length; i++) {
    let word = wordsArr[i].split("");

    word[0] = word[0].toUpperCase();

    result.push(word.join(""));
  }
  return result.join(" ");
};


console.log(titleCase("a lannister always pays his debts"))