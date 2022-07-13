'use strict';

//Task 1

let a = +prompt("Enter number");
let b = a === 0 ? "true" : "false";

console.log(b);

//Task 2

let a = +prompt("Enter number");
let b = a > 0 ? "true" : "false";

console.log(b);

//Task 3

let a = +prompt("Enter number");
let b = a < 0 ? "true" : "false";

console.log(b);

//Task 4

let a = +prompt("Enter number");
let b = a >= 0 ? "true" : "false";

console.log(b);

//Task 5

let a = +prompt("Enter number");
let b = a <= 0 ? "true" : "false";

console.log(b);

//Task 6

let a = +prompt("Enter number");
let b = a !== 0 ? "true" : "false";

console.log(b);

//Task 7

let a = prompt("Enter word 'test'");
let b = a === "test" ? "true" : "false";

console.log(b);

//Task 8

let a = +prompt("Enter number");
let b = a === 1 ? "true" : "false";

console.log(b);

//Task 9

let a = +prompt("Enter number");

if (a > 0 && a < 5) {
    a = "true";
} else {
    a = "false";
}

console.log(a);

//Task 10

let a = +prompt("Enter number");

if (a === 0 || a === 2) {
    a += 7;
} else {
    a /= 10;
}

console.log(a);

//Task 11

let a = +prompt("Enter first number");
let b = +prompt("Enter second number");

if (a <= 1 && b >= 3) {
    console.log( a + b );
} else {
    console.log( a - b );
}

//Task 12

let a = +prompt("Enter first number");
let b = +prompt("Enter second number");

if ( a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log("true");
} else {
    console.log("false");
}

//Task 13

let num = +prompt('input number between 1 and 4');

switch (num) {
    case 1:
        console.log('зима');
        break;
    case 2:
        console.log('весна');
        break;
    case 3:
        console.log('літо');
        break;
    default:
        console.log('осінь')
}