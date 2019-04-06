/**
 * Created by：CaMnter
 */

// any
let anyValue: any = 0;
anyValue = '';

// number
// 二进制
let binaryLiteral: number = 0b1010;
// 八进制
let octalLiteral: number = 0o744;
// 十进制
let decLiteral: number = 7;
// 十六进制
let hexLiteral: number = 0xf00d;

// string
let sign: string = `Save you from anything ${ decLiteral }`;

// boolean
const flag: boolean = true;

// array
let arrayA: number[] = [1, 2];
let arrayB: Array<number> = [1, 2];

// 元组
// 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同
let specialArray: [string, number];
// specialArray = []; // 错误，因为指定了长度 2，第一个为 string 第二个为 number
// specialArray = [7, 'Save you from anything']; // 错误，因为指定了长度 2，第一个为 string 第二个为 number
specialArray = ['Save you from anything', 7];

enum Color {
  Red,
  Green,
  Blue
};
const color: Color = Color.Blue;
console.log(color);

// void
function f(): void {
  console.log('function')
}

// null
let nullValue = null;
console.log(`「typeof」「nullValue」${ typeof nullValue }`)

// never
// 在函数中它通常表现为抛出异常或无法执行到终止点

let x: never;
let y: number;

// 运行正确，never 类型可以赋值给 never类型
x = (() => {
  throw new Error('exception');
})();

// 运行正确，never 类型可以赋值给 数字类型
y = (() => {
  throw new Error('exception');
})();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
  throw new Error(message);
}

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
  while (true) {
  }
}