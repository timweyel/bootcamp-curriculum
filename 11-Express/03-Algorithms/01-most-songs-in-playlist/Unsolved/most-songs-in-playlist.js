// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the array that can fit in a 
// 60 minute playlist

var arr = [3, 4, 7, 2]; // 4 element array
// var arr = [4, 2, 5, 3, 1, 1, 2, 3, 4, 2, 5, 6, 3, 2, 4, 7, 3, 2, 3];

var mostSongsInPlaylist = function(arr) {
  //sort the array
  //declare a variable that start keeping track of minutes at 0
  //loop through the array
    //add each index to the total minutes variable, and increment numSongs
    //if adding it exceeds 60, then return the total number of songs (lenght)
    //otherwise keeping going

  let sortedArr = arr.sort();
  let totalMinutes = 0;
  let numSongs = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    let currentSongDuration = sortedArr[i];

    if (totalMinutes + currentSongDuration <= 60) {
      totalMinutes += currentSongDuration;
      numSongs++;
    } else {
      return numSongs;
    }
  }
  return numSongs;
};

console.log(mostSongsInPlaylist(arr));