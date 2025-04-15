// Exercise 7: Guess the Number
// Generate the random number by using the Math.random

let RandomNumber = Math.floor((Math.random() * 5) + 1);

// request a number from the user
let UserNumber = prompt('Guess the Number');

// compare the user number with the random number and alert the user if he guessed it right or wrong
// and also alert the user what the random number was if he guessed it wrong
if (UserNumber == RandomNumber) {
    alert('You Guess Right!');
} else {
    alert('Wrong Guess.' + " " + 'The number was' + " " + RandomNumber);
}