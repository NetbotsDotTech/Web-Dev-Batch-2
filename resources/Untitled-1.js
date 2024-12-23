function grade(marks) {
    if (marks>= 80 && marks <=100)
        return "A+";
    else if (marks >= 70 && marks <=79)
        return "A";
    else if (marks >= 60 && marks <=69)
        return "B";
    else if (marks >= 50 && marks <= 59)
        return "C";
    else if (marks >= 33 && marks <= 49)
        return "D";
    else if (marks >= 0 && marks < 33)
        return "Fail";
    else
        return "Invalid marks.Please enter a number between 0 and 100.";

}
let studentMarks = 95;
let Grade = grade(studentMarks);
console.log("Your grade is: " + Grade)