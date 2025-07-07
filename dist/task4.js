"use strict";
function calculator(a, b, op = "add") {
    switch (op) {
        case "add":
            return `${a} + ${b} = ${a + b}`;
        case "sub":
            return `${a} - ${b} = ${a - b}`;
        case "mul":
            return `${a} * ${b} = ${a * b}`;
        case "div":
            if (b === 0) {
                return "Cannot divide by zero";
            }
            else {
                return `${a} / ${b} = ${a / b}`;
            }
    }
}
let a = 10;
let b = 2;
console.log(`a=${a} , b=${b}`);
console.log(calculator(a, b, "add"));
console.log(calculator(a, b, "sub"));
console.log(calculator(a, b, "mul"));
console.log(calculator(a, b, "div"));
