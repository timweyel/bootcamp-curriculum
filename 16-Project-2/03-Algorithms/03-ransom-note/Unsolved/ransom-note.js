// Write a function that takes two strings and determines returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty
var magazine = "hello world";
var note = "hello";

var ransomNote = function(magazine, note) {
  let magazineWords = magazine.split(" ");
  let noteWords = note.split(" ");

  let magazineMap = {};
  let noteMap = {};

  for (let i = 0; i < magazineWords.length; i++) {
    let word = magazineWords[i];
    magazineMap[word] = (magazineMap[word] || 0) + 1;
  }

  for (let i = 0; i < noteWords.length; i++) {
    let word = noteWords[i];
    noteMap[word] = (noteMap[word] || 0) + 1;
  }

  for (let key in noteMap) {
    if(magazineMap[key] !== noteMap[key]) {
      return false;
    }
  }
  return true;
};

console.log(ransomNote(magazine, note));
