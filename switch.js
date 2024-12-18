const marks = 15; 
let grade;

switch (true) {
  case (marks >= 90 && marks<=100):
    grade = "A+"; 
    break;
  case (marks >= 70 && marks<=89):
    grade = "A"; 
    break;
  case (marks >= 60 && marks<=69):
    grade = "B"; 
    break;
  case (marks >= 50 && marks<=59):
    grade = "C"; 
    break;
    case (marks >= 33 && marks<=49):
    grade = "Pass"; 
    break;
  case (marks >= 0 && marks<=32):
    grade = "Fail";
    break;
  default:
    grade = "Invalid marks"; 
}

console.log(`Marks: ${marks}, Grade: ${grade}`);
