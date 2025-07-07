var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.speed = 0;
        console.log("The car is ".concat(name));
    }
    Car.prototype.drive = function (speed) {
        this.speed = speed;
        console.log("".concat(this.name, " driving at ").concat(this.speed, " km/h"));
    };
    Car.prototype.stop = function () {
        this.speed = 0;
        console.log("".concat(this.name, " stopped"));
    };
    return Car;
}());
var car1 = new Car("SUV");
car1.drive(60);
car1.stop();
