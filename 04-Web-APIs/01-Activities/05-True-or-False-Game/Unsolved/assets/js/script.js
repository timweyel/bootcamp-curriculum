// TODO: Create an array with five question objects

let questions = [
  { q: 'The sky is blue.', a: 't' },
  { q: 'There are 365 days in a year.', a: 't' },
  { q: 'There are 42 ounces in a pound.', a: 'f' },
  { q: 'The Declaration of Independence was created in 1745.', a: 'f' },
  { q: 'Bananas are vegetables.', a: 'f' }
];

// TODO: Create a variable to keep track of the score

let score = 0;

// TODO: Iterate over the questions array and display each question in a 
//confirmation box

for (let i = 0; i < questions.length; i++) {
  let answer = confirm(questions[i].q);

  if (
    // TODO: Check the user's answer against the correct answer
    (answer === true && questions[i].a === 't') ||
    (answer === false && questions[i].a === 'f')
  ) {
    // TODO: Alert the user if they are correct or wrong. Increment the score accordingly
    score++;
    alert('Correct!');
  } else {
    alert('Wrong!');
  }
}





// TODO: At the end of the game, alert the user with the final score

alert('You got ' + score + '/' + questions.length);
