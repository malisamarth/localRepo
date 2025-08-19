//fibonacci series

let firstNumber = 0;
let secNumber = 1;
let sum = 0;

console.log(firstNumber + secNumber);

for ( let i = 0; i <= 10; i++ ) {
    sum = firstNumber + secNumber;
    console.log(sum);
    firstNumber = secNumber;
    secNumber = sum;
}