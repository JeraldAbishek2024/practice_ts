"use strict";
class Car {
    constructor(name) {
        this.name = name;
        this.speed = 0;
        console.log(`The car is ${name}`);
    }
    drive(speed) {
        this.speed = speed;
        console.log(`${this.name} driving at ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stopped`);
    }
}
const car1 = new Car("SUV");
car1.drive(60);
car1.stop();
