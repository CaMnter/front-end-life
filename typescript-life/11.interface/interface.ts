/**
 * Created by：CaMnter
 */

interface IPerson {
  name: string;
  sign: string;
}

const person: IPerson = {
  name: 'CaMnter',
  sign: 'Save you from anything',
};

console.log(`person : ${ person.name } ${ person.sign }`);


interface RunOptions {
  program: string;
  commandline: string | string[] | (() => string) | (() => string[]);
}

const r1: RunOptions = {program: "r1", commandline: "option1"};
console.log(`r1 : ${ r1.commandline }`);
const r2: RunOptions = {program: "r2", commandline: ['option2', 'option3']};
console.log(`r2 : ${ r2.commandline }`);
const r3: RunOptions = {
  program: "r3",
  commandline: () => {
    return 'option4';
  }
};
const commandlineFunction1: any | (() => string) = r3.commandline;
console.log(`r3 : ${ commandlineFunction1() }`);
const r4: RunOptions = {
  program: "r4",
  commandline: () => {
    return ['option5', 'option6'];
  }
};
const commandlineFunction2: any | (() => string[]) = r4.commandline;
console.log(`r4 : ${ commandlineFunction2() }`);

interface Tree {
  leaves: number;
}

interface Forest extends Tree {
  count: number;
}

const forest: Forest = <Forest>{};
forest.leaves = 233;
forest.count = 2333;
console.log(`r5 : ${ forest.count } ${ forest.leaves }`);

interface A {
  a: number;
}

interface B {
  b: number;
}

interface C extends A, B {
  c: number;
}

const c: C = <C>{};
c.a = 1;
c.b = 2;
c.c = 3;
console.log(`r6 : ${ c.a } ${ c.b } ${ c.c }`);

