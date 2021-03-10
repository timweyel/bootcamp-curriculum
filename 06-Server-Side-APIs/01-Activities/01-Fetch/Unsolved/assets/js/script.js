// Write a fetch request to the Giphy API
// Then log the response in the console
//API
// Application Programming Interface
// How we interact with someone else's application.
// When we make a request to someone else's API
// We are requesting DATA from THEIR server so that we can use it
// in our own application


// HTTP request
// GET requests for data, POST creates data, PUT updates data, DELETE deletes data
fetch('https://api.giphy.com/v1/gifs/trending?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN')
  .then(res => res.json())
  .then(res => {
    console.log(res)
  })


// fetch('https://api.giphy.com/v1/gifs/trending?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN')
//   .then(function(res) {
//     console.log(res);
//     return res.json();
//   })
