function getArea(shape) {
    switch (shape.type) {
        case "circle":
            return 3.14 * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.side, 2);
    }
}
var shape1 = { type: "circle", radius: 5 };
var shape2 = { type: "square", side: 10 };
console.log(getArea(shape1));
console.log(getArea(shape2));
