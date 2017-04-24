/**
 * Created by：CaMnter
 */

/***********************
 * 不能使用圆括号的情况 *
 ***********************/

/**
 * 变量声明语句中，不能带有圆括号
 * 变量声明语句，模式不能使用圆括号。
 */
// var [(v1)] = [1]; // Error
//
// var {v2: (v3)} = {}; // Error
// var ({v4: v5}) = {}; // Error
// var {(v6: v7)} = {}; // Error
// var {(v8): v9} = {}; // Error
//
// var { v10: ({ v11: v12 }) } = { v10: { v11: 26 } }; // Error
console.log("");

/**
 * 函数参数中，模式不能带有圆括号
 */
// function f1([(v13)]) { return v13; } // Error
console.log("");

/**
 * 赋值语句中，不能将整个模式，或嵌套模式中的一层，放在圆括号之中
 */
// ({ v14: v15 }) = { v14: 42 }; // Error
// ([v16]) = [5]; // Error
({v17} = {v17: 26}); // Right
console.log("");

/**
 * 代码将嵌套模式的一层，放在圆括号之中
 */
// [({ v18: v20 }), { v19: v21 }] = [{}, {}]; // Error


/***********************
 * 可以使用圆括号的情况 *
 ***********************/

/**
 * 赋值语句，而不是声明语句
 * 圆括号都不属于模式的一部分
 *
 * 1. 模式是取数组的第一个成员，跟圆括号无关
 * 2. 模式是 v23，而不是 v24
 * 3. 与第一行语句的性质一致
 */
// [(v22)] = [3]; // Right
// ({ v23: (v24) } = {}); // Right
// [(parseInt.prop)] = [3]; // Right