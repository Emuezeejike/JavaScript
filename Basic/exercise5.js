// MULTIPLICATION TABLE GENERATOR

// Request for the number from 1 to 12
let number = prompt('Enter a number');
number = parseFloat(number);

// Declare a variable to hold the result
// The input from the user needs to be converted to number, So that is what parseFloat is used for
let Result ;
for (let i = 1; i <= 12; i++) {
    Result = number * i
    console.log(number + " " + "*" + " " + i + " " + "=" + Result);
}