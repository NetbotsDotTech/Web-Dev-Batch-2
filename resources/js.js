
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i; 
    }
    return result;
}
const number = 5;
const fact = factorial(number);

console.log(`The factorial of ${number} is: ${fact}`);
