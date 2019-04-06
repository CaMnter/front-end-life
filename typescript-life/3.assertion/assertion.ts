/**
 * Created by：CaMnter
 */

// 类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型

let target: string = '7';
let expect: number = <number><any>target;
console.log(`「typeof」「expect」${ typeof expect }`);