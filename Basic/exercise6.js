// GRADE CHECKER

// Request for the grade
let grade = prompt("Please Enter Student's Grade");

// compare the grade
if (grade >= 70) {
    alert('Excellent');
} else if (grade >= 50 && grade <= 69) {
    alert('Good');
} else if (grade < 50) {
    alert('Needs Improvement');
}