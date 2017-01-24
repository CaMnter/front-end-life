/**
 * Created by：CaMnter
 */

/***********************
 * 对象的解构指定默认值 *
 ***********************/

var {v1 = 6} = {};
var {v2, v3 = 6} = {v2: 6};
var {v4:v5 = 6} = {};
var {v6:v7 = 6} = {v6: 26};
var {networkSave: save1 = 'Save you from anything'} = {};
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v1] = " + v1);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v2] = " + v2);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v3] = " + v3);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v5] = " + v5);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v7] = " + v7);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[save1] = " + save1);
console.log("");

/**
 * 1.默认值生效的条件是，对象的属性值严格等于 undefined
 * 2.如果 属性等于 null，就不严格相等于 undefined，导致默认值不会生
 * 3.如果解构失败，变量的值等于 undefined
 */
var {v8 = 26} = {v8: undefined};
var {v9 = 26} = {v9: null};
var {v10} = {v10000: 'v10'};
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v8] = " + v8);
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v9] = " + v9);
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v10] = " + v10);
console.log("");

// var {v11: {v12}} = {v13: 'v13'}; // 报错
/**
 * 等号左边对象的 v11 属性，对应一个子对象,其中有个属性是 v13
 * 右边解析 {v13: 'v13'} 的时候,v11 就是一个 undefined,无法取到对象属性 v12,直接报错
 */
var v14 = {v15: 'v15'};
console.log("[destructuring]\t\t[test-" + 3 + "]\t\t[v14.v15] = " + v14.v15);
console.log("");

/**
 * JavaScript 引擎会将 {...} 理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript
 * 将其解释为代码块，才能解决这个问题
 * 放在一个圆括号里面，就可以正确执行。关于圆括号与解构赋值的关系
 */
var v16;
// {v16} = {v16: 26}; Error
({v16} = {v16: 26}); // Right
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[v16] = " + v16);

/**
 * 虽然毫无意义，但是语法是合法的
 */
({} = [true, false]);
({} = 'Save');
({} = []);

/**
 * 将现有对象的方法，赋值到某个变量
 * Math 对象的对数、正弦、余弦三个方法
 */
let {log:mathLog, sin:mathSin, cos:mathCos} = Math;
console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[mathLog] = " + mathLog);
console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[mathSin] = " + mathSin);
console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[mathCos] = " + mathCos);

/**
 * 数组
 */
var a
/**
 * Created by：CaMnter
 */

/***********************
 * 对象的解构指定默认值 *
 ***********************/

var {v1 = 6} = {};
var {v2, v3 = 6} = {v2: 6};
var {v4:v5 = 6} = {};
var {v6:v7 = 6} = {v6: 26};
var {networkSave: save1 = 'Save you from anything'} = {};
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v1] = " + v1);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v2] = " + v2);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v3] = " + v3);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v5] = " + v5);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v7] = " + v7);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[save1] = " + save1);
console.log("");

/**
 * 1.默认值生效的条件是，对象的属性值严格等于 undefined
 * 2.如果 属性等于 null，就不严格相等于 undefined，导致默认值不会生
 * 3.如果解构失败，变量的值等于 undefined
 */
var {v8 = 26} = {v8: undefined};
var {v9 = 26} = {v9: null};
var {v10} = {v10000: 'v10'};
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v8] = " + v8);
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v9] = " + v9);
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v10] = " + v10);
console.log("");

// var {v11: {v12}} = {v13: 'v13'}; // 报错
/**
 * 等号左边对象的 v11 属性，对应一个子对象,其中有个属性是 v13
 * 右边解析 {v13: 'v13'} 的时候,v11 就是一个 undefined,无法取到对象属性 v12,直接报错
 */
var v14 = {v15: 'v15'};
console.log("[destructuring]\t\t[test-" + 3 + "]\t\t[v14.v15] = " + v14.v15);
console.log("");

/**
 * JavaScript 引擎会将 {...} 理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript
 * 将其解释为代码块，才能解决这个问题
 * 放在一个圆括号里面，就可以正确执行。关于圆括号与解构赋值的关系
 */
var v16;
// {v16} = {v16: 26}; Error
({v16} = {v16: 26}); // Right
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[v16] = " + v16);
console.log("");

/**
 * 虽然毫无意义，但是语法是合法的
 */
({} = [true, false]);
({} = 'Save');
({} = []);

/**
 * 将现有对象的方法，赋值到某个变量
 * Math 对象的对数、正弦、余弦三个方法
 */
let {log:ml, sin:ms, cos:mc} = Math;
console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[mathLog] = " + ml);
console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[mathSin] = " + ms);
console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[mathCos] = " + mc);
console.log("");

/**
 * 数组
 */
var s2 = ["Save", "you", "from", "anything"];
var {length:s2Length, 0:firstElement, [s2.length - 1]:lastElement} = s2;
console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[s2Length] = " + s2Length);
console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[firstElement] = " + firstElement);
console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[lastElement] = " + lastElement);


