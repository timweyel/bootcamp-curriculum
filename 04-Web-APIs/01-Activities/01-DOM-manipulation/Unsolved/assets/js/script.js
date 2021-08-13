// Create your HTML Page via DOM Methods here!

var body = document.body;

// TODO: Add a centered h1
let h1El = document.createElement('h1');
h1El.textContent = 'This is my page';
h1El.setAttribute('style', 'margin: auto; width: 50%; text-align: center');
body.appendChild(h1El);

// TODO: Add a centered h2

let h2El = document.createElement('h2');
h2El.textContent = 'this is an h2 header';
h2El.setAttribute('style', 'margin:auto; width: 50%; text-align: center');
body.appendChild(h2El);

// TODO: Add a centered image with a centered caption under it

let captionEl = document.createElement('div');
let imgEl = document.createElement('img');
let kittenEl = document.createElement('div');

kittenEl.textContent = 'Kittayy';

captionEl.setAttribute('style', 'margin:auto; width: 50%; text-align: center;');
imgEl.setAttribute('src', 'http://placekitten.com/200/300');
imgEl.setAttribute('height', 200);
imgEl.setAttribute('width', 200);
kittenEl.setAttribute('style', 'font-size: 25px; text-align:center;');

body.appendChild(captionEl);
captionEl.appendChild(imgEl);
captionEl.appendChild(kittenEl);

// TODO: Add a list of your favorite foods (or other favorites)

let favoriteEl = document.createElement('div');
let listEl = document.createElement('ol');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');

favoriteEl.textContent='my faves:';
li1.textContent = 'Chicken Fingers';
li2.textContent = 'Pizza';
li3.textContent = 'Burgers';
li4.textContent = 'Sushi';

favoriteEl.setAttribute('style', 'font-size: 20px;');
listEl.setAttribute('style', 'background: #888888; padding: 20px');

body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
