"use strict";
function description(input) {
    if (typeof input === "string") {
        return `The given input : ${input} \nIs a String`;
    }
    return `The given input : ${input} \nIs a Number`;
}
console.log(description(454));
console.log(description("Jero"));
