/**
 * Created by：CaMnter
 */

class Car {

  engine: string;

  constructor(engine: string) {
    this.engine = engine;
  }

  display() {
    console.log("「Car」「engine」" + this.engine)
  }

}

const car = new Car('engine');
car.display();

class Shape {

  area: number;

  constructor(area: number) {
    this.area = area;
  }

}

class Circle extends Shape {

  display(): void {
    console.log("「Circle」「area」" + this.area);
  }

}

const circle = new Circle(2233);
circle.display();

class PrinterClass {

  display(): void {
    console.log("「Circle」「display」")
  }

}

class StringPrinter extends PrinterClass {

  display(): void {
    super.display();
    console.log("「StringPrinter」「display」");
  }

}

const stringPrinter = new StringPrinter();
stringPrinter.display();


class Static {

  static value: number;

  display(): void {
    console.log("「Static」「display」「value」", Static.value);
  }

}

Static.value = 233;
const staticObject = new Static();
staticObject.display();

console.log("「Static」「display」「value」", (staticObject instanceof Static));
