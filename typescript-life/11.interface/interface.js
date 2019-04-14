"use strict";
/**
 * Created by：CaMnter
 */
var person = {
    name: 'CaMnter',
    sign: 'Save you from anything',
};
console.log("person : " + person.name + " " + person.sign);
var r1 = { program: "r1", commandline: "option1" };
console.log("r1 : " + r1.commandline);
var r2 = { program: "r2", commandline: ['option2', 'option3'] };
console.log("r2 : " + r2.commandline);
var r3 = {
    program: "r3",
    commandline: function () {
        return 'option4';
    }
};
var commandlineFunction1 = r3.commandline;
console.log("r3 : " + commandlineFunction1());
var r4 = {
    program: "r4",
    commandline: function () {
        return ['option5', 'option6'];
    }
};
var commandlineFunction2 = r4.commandline;
console.log("r4 : " + commandlineFunction2());
var forest = {};
forest.leaves = 233;
forest.count = 2333;
console.log("r5 : " + forest.count + " " + forest.leaves);
var c = {};
c.a = 1;
c.b = 2;
c.c = 3;
console.log("r6 : " + c.a + " " + c.b + " " + c.c);
