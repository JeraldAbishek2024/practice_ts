"use strict";
function getArea(shape) {
    switch (shape.type) {
        case "circle":
            return 3.14 * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
    }
}
const shape1 = { type: "circle", radius: 5 };
const shape2 = { type: "square", side: 10 };
console.log(getArea(shape1));
console.log(getArea(shape2));
