/**
 * Created by：CaMnter
 */

function alert(): void {
  console.log('Save you from anything');
}

function add(x: number, y: number): number {
  return x + y;
}

console.log(`add ${ add(1, 2) }`);

function f1({name = 'CaMnter', age, sign}: { name?: string, age: number, sign: string }) {
  console.log(`f1 ${ name } ${ age } ${ sign }`);
}

f1({age: 233, sign: 'Save you from anything'});
f1({name: 'CaMnter', age: 233, sign: 'Save you from anything'});

function f2(firstName: string, lastName?: string) {
  console.log(`f2 ${ firstName } ${ lastName }`);
}

f2('CaMnter');
f2('CaMnter', 'CM');

function f3(firstName: string, ...otherName: string[]) {
  console.log(`f3 ${ firstName } ${ otherName.join(' ') }`);
}

f3('CaMnter', 'CM', 'Save');

(function () {
  console.log('anonymous function')
})();

const f4 = new Function('a', 'b', 'return a * b');
console.log(`f4 ${ f4(2, 3) }`);

const f5: Function = (result: string) => {
  console.log(`f5 ${ result }`);
};
f5('result')