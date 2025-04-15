// BASIC CALCULATOR

// Request for the first number
let number1 = prompt('Enter First number'); 

// // Request for the Operator
let Operator = prompt('Enter any of the four Basic orperators (*,+,/,-)');

// // Request for the second number
let number2 = prompt('Enter Second number');

// The result should be stored in a storage location called Result
let Result = undefined;

// condition statement to look for the right operator to use
if (Operator = '*') {
    Result = number1 * number2;
    alert('The Result is:' + '' + Result)
} else if (Operator = '+') {
    Result = number1 + number2;
    alert('The Result is:' + '' + Result)
} else if (Operator = '-') {
    Result = number1 - number2;
    alert('The Result is:' + '' + Result)
} else if (Operator = '/') {
    Result = number1 / number2;
    alert('The Result is:' + '' + Result)
} else {
    alert('The equation is wrong');
}