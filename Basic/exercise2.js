// BASIC CALCULATOR

// Request for the first number
let number1 = prompt('Enter First number'); 
// The input from the user needs to be converted to number, So that is what parseFloat is used for
number1 = parseFloat(number1);

// // Request for the Operator
let Operator = prompt('Enter any of the four Basic orperators (*,+,/,-)');

// // Request for the second number
let number2 = prompt('Enter Second number');

// The input from the user needs to be converted to number, So that is what parseFloat is used for
number2 = parseFloat(number2);

// The result should be stored in a storage location called Result
let Result;

// condition statement to look for the right operator to use
if (Operator == '*') {
    Result = number1 * number2;
    alert('The Result is:' + " " + Result);
} else if (Operator == '+') {
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