interface Circle {
  type: "circle";
  radius: number;
}

interface Square {
  type: "square";
  side: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.type) {
    case "circle":
      return 3.14 * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
  }
}

const shape1: Shape = { type: "circle", radius: 5 };
const shape2: Shape = { type: "square", side: 10 };

console.log(getArea(shape1));
console.log(getArea(shape2));
