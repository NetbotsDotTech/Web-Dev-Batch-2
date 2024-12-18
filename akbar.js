// Number jiske factors nikalne hain
let number = 6;

console.log(`Factors of ${number} are:`);

for (let i = 1; i <= number; i++) { // 1 se number tak loop chalega
    if (number % i === 0) { // Check karein agar remainder 0 hai
        console.log(i); // Agar true hai, to i factor hai
    }
}
