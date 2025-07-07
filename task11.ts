class Car {
  private speed: number = 0;
  constructor(public name: string) {
    console.log(`The car is ${name}`);
  }

  drive(speed: number): void {
    this.speed = speed;
    console.log(`${this.name} driving at ${this.speed} km/h`);
  }

  stop(): void {
    this.speed = 0;
    console.log(`${this.name} stopped`);
  }
}

const car1 = new Car("SUV");
car1.drive(60);
car1.stop();
