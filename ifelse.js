function gradeStudent() {
    const marks = 99;

    if (marks >= 90 && marks <= 100) {
        return ("Grade: A+");
    } else if (marks >= 80 && marks <= 90) {
        return ("Grade: A");
    } else if (marks >= 70 && marks <= 80) {
        return ("Grade: B+");
    } else if (marks >= 60 && marks <= 70) {
        return ("Grade: B");
    } else if (marks >= 50 && marks <= 60) {
        return ("Grade: C+");
    } else if (marks >= 40 && marks <= 50) {
        return ("Grade: C");
    } else {
        return ("Fail");
    }

}

console.log("your grade is: ", gradeStudent());

