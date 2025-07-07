function calculator(a, b, op) {
    if (op === void 0) { op = "add"; }
    switch (op) {
        case "add":
            return "".concat(a, " + ").concat(b, " = ").concat(a + b);
        case "sub":
            return "".concat(a, " - ").concat(b, " = ").concat(a - b);
        case "mul":
            return "".concat(a, " * ").concat(b, " = ").concat(a * b);
        case "div":
            if (b === 0) {
                return "Cannot divide by zero";
            }
            else {
                return "".concat(a, " / ").concat(b, " = ").concat(a / b);
            }
    }
}
var a = 10;
var b = 2;
console.log("a=".concat(a, " , b=").concat(b));
console.log(calculator(a, b, "add"));
console.log(calculator(a, b, "sub"));
console.log(calculator(a, b, "mul"));
console.log(calculator(a, b, "div"));
