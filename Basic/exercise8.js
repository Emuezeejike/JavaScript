// Exercise 8: FizzBuzz
// combining the concepts of exercise 1  and 2

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