// Though this file is not part of the assignment but I decided to try out something else by putting all the codes in one using FUNCTIONS and making it interactive.

let name = prompt('Kindly enter you name');
alert('Hello' + " " + name + ", " + 'will you like to see what i can do?' + " " + 'Y or N' );
let choice = prompt('y or n');
if (choice == 'y') {
    alert('Here are the things i can do \n1. Even or Odd Checker \n2. Basic Calculator\n3. Voting Eligibility Checker\n4. Print Numbers From 1 - 10\n5. Multiplication Table Generator\n6. Grade Checker\n7. Guess the Number Game\n8. FizzBuzz Challenge\nSelect a number to play!!!');
    Games();
} else if (choice == 'n') {
    alert('Thank you for TRYING, enjoy the rest of your day!!!');
} else {
    alert('Wrong selection!!!');
}

function Games() {
    let GameChoice = prompt('Select the number of the game you wished to play')
    if (GameChoice == 1) {
        EvenOrOddChecker();
    } else if (GameChoice == 2) {
        BasicCalculator();
    } else if (GameChoice == 3) {
        VotingEligibilityChecker();
    } else if (GameChoice == 4) {
        PrintNumbersFrom1to10();
    } else if (GameChoice == 5) {
        MultiplicationTableGenerator();
    } else if (GameChoice == 6) {
        GradeChecker();
    } else if (GameChoice == 7) {
        GuesstheNumberGame();
    } else if (GameChoice == 8) {
        FizzBuzzChallenge();
    } else {
        alert('Wrong Selection');
    }

}
function EvenOrOddChecker() {
    let number = prompt('Enter a number');
    if (number % 2 == 0) {
    alert('The number is Even');
    } else {
    alert('The number is Odd');
    }
}

function BasicCalculator() {
    let number1 = prompt('Enter First number'); 
    number1 = parseFloat(number1);
    let Operator = prompt('Enter any of the four Basic orperators (*,+,/,-)');
    let number2 = prompt('Enter Second number');
    number2 = parseFloat(number2);
    let Result;
    if (Operator == '*') {
        Result = number1 * number2;
        alert('The Result is:' + " " + Result);
    } else if (Operator == "+") {
        Result = number1 + number2;
        alert('The Result is:' + " " + Result);
    } else if (Operator == '-') {
        Result = number1 - number2;
        alert('The Result is:' + " " + Result);
    } else if (Operator == '/') {
        Result = number1 / number2; 
        alert('The Result is:' + " " + Result);
    } else {
        alert('The equation is wrong');
    }
}

function VotingEligibilityChecker() {
    let name = prompt('Please Enter your Name');
    let age = prompt('Enter your Age');
    if (age >= 18) {
        alert('You are Eligible to vote');
    } else {
        alert('You are Not Eligible to vote yet');
    }
}

function PrintNumbersFrom1to10() {
    let i ;
    for (let i = 1; i <= 10; i++) {
        console.log(i);  
    }
}

function MultiplicationTableGenerator() {
    let number = prompt('Enter a number');
    let Result ;
    for (let i = 1; i <= 12; i++) {
        Result = number * i
        console.log(number + "*" + i + "=" + Result);
    }
}

function GradeChecker() {
    let grade = prompt("Please Enter Student's Grade");
    if (grade >= 70) {
        alert('Excellent');
    } else if (grade >= 50 && grade <= 69) {
        alert('Good');
    } else if (grade < 50) {
        alert('Needs Improvement');
    }
}

function GuesstheNumberGame() {
    let RandomNumber = Math.floor((Math.random() * 5) + 1);
    let UserNumber = prompt('Guess the Number');
    if (UserNumber == RandomNumber) {
        alert('You Guess Right!');
    } else {
        alert('Wrong Guess.' + " " + 'The number was' + " " + RandomNumber);
    }
}

function FizzBuzzChallenge() {
    let i;
    for (let i = 1; i <= 15; i++) {
        if (i % 3 == 0) {
            console.log('Fizz');
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        } else {
            console.log(i);
        }   
    }
}