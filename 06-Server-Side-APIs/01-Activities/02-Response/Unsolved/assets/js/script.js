// Fetch request to Giphy API random endpoint
fetch(
  'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&tag=taco'
)
  // Converts the response to JSON
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response.data);
    // Use 'querySelector' to get the ID of where the GIF will be displayed
    const $imgContainer = document.querySelector('#response-container');
    console.log(response.data.image_url);
    // YOUR CODE HERE
    //
    // Create an '<img>' element
    const $img = document.createElement('img');
    $img.setAttribute('src', response.data.image_url)
    // console.log($img);
    $imgContainer.appendChild($img);
    // YOUR CODE HERE
    //
    // Set that element's 'src' attribute to the 'image_url' from our Giphy API response
    // YOUR CODE HERE
    //
    // Append the '<img>' element to the page
    // YOUR CODE HERE
    //
  });
