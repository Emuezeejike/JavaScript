let RandomNumber = Math.floor((Math.random() * 5) + 1);
let UserNumber = prompt('Guess the Number');
if (UserNumber == RandomNumber) {
    alert('You Guess Right!');
} else {
    alert('Wrong Guess.' + " " + 'The number was' + " " + RandomNumber);
}