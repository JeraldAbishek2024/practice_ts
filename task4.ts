type Operation = "add" | "sub" | "mul" | "div";

function calculator(a: number, b: number, op: Operation = "add"): string {
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
      } else {
        return `${a} / ${b} = ${a / b}`;
      }
  }
}
let a: number = 10;
let b: number = 2;
console.log(`a=${a} , b=${b}`);
console.log(calculator(a, b, "add"));
console.log(calculator(a, b, "sub"));
console.log(calculator(a, b, "mul"));
console.log(calculator(a, b, "div"));
