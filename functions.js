// function fact(a){
//     return a<= 1 ? 1:a*fact(a-1);
// }
// console.log(fact(6))
let num = 5;
let factorial = 1;

// if (num < 0) {
//     console.log("Factorial does not exist for negative numbers.");
// } 
 if (num === 0  || num===1) {
    console.log(`The factorial of ${num} is 1.`);
} 
else {
    for (let i = 2; i <= Math.abs(num); i++) {
        // factorial=factorial * i;
        factorial *= i
    }
    console.log(`The factorial of ${num} is ${factorial}.`);
}

