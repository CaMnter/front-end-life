/**
 * Created by：CaMnter
 */

// 把对象的值转换为指数计数法
const num1 = 233333.2333;
const val1 = num1.toExponential();
console.log(`val1 ${ val1 }`);

// 把数字转换为字符串，并对小数点指定位数
const num2 = 233.233;
console.log(`num2 ${ num2.toFixed() }`);
console.log(`num2 ${ num2.toFixed(1) }`);
console.log(`num2 ${ num2.toFixed(2) }`);

// 把数字转换为字符串，使用本地数字格式顺序
const num3 = 233.233;
console.log(`num3 ${ num3.toLocaleString() }`);

// 把数字格式化为指定的长度

const num4 = 233.233;
console.log(`num4 ${ num4.toPrecision() }`);
console.log(`num4 ${ num4.toPrecision(3) }`);
console.log(`num4 ${ num4.toPrecision(4) }`);