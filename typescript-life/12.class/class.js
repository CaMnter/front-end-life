"use strict";
/**
 * Created by：CaMnter
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.display = function () {
        console.log("「Car」「engine」" + this.engine);
    };
    return Car;
}());
var car = new Car('engine');
car.display();
var Shape = /** @class */ (function () {
    function Shape(area) {
        this.area = area;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.display = function () {
        console.log("「Circle」「area」" + this.area);
    };
    return Circle;
}(Shape));
var circle = new Circle(2233);
circle.display();
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.display = function () {
        console.log("「Circle」「display」");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("「StringPrinter」「display」");
    };
    return StringPrinter;
}(PrinterClass));
var stringPrinter = new StringPrinter();
stringPrinter.display();
var Static = /** @class */ (function () {
    function Static() {
    }
    Static.prototype.display = function () {
        console.log("「Static」「display」「value」", Static.value);
    };
    return Static;
}());
Static.value = 233;
var staticObject = new Static();
staticObject.display();
console.log("「Static」「display」「value」", (staticObject instanceof Static));
