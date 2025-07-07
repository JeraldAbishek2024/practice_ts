function greet(x) {
    return "Welcome ".concat(x, "!");
}
var y = 1;
console.log(greet("Jero"));
console.log("Implicit");
console.log(typeof y);
console.log("Explicit");
console.log(typeof greet("Jero"));
