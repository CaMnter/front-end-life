/**
 * Created by：CaMnter
 */

/*****************
 * 数组的解构赋值 *
 *****************/

// es5 得这样
var a = 1;
var b = 2;
var c = 3;
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[a] = " + a);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[b] = " + b);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[c] = " + c);
console.log("");

// es6 允许这样赋值
var [a,b,c] = [1, 3, 4];
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[a] = " + a);
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[b] = " + b);
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[c] = " + c);
console.log("");
/**
 * 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值
 */

let [v1,[[v2],v3]] = [1, [[2], 6]];
console.log("[destructuring]\t\t[test-" + 3 + "]\t\t[v1] = " + v1);
console.log("[destructuring]\t\t[test-" + 3 + "]\t\t[v2] = " + v2);
console.log("[destructuring]\t\t[test-" + 3 + "]\t\t[v3] = " + v3);
console.log("");


/**
 * 如果解构不成功，变量的值就等于undefined
 */
var [v4] = [];
var [v5,v6] = [6];
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[v4] = " + v4);
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[v5] = " + v5);
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[v6] = " + v6);
console.log("");

/**
 * 另一种情况是不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功
 */
let [v7,v8] = [1, 2, 3];
console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[v7] = " + v7);
console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[v8] = " + v8);

let [v9,[v10],v11] = [1, [2, 3], 4];
console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[v9] = " + v9);
console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[v10] = " + v10);
console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[v11] = " + v11);
console.log("");

// 报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};
/**
 * 上面的表达式都会报错，因为等号右边的值，要么转为对象以后不具备 Iterator 接口（前五个表达式），要么本身
 * 就不具备 Iterator 接口（最后一个表达式）
 */

/**
 * 解构赋值不仅适用于 var 命令，也适用于 let 和 const 命令。
 */
var [v12, v13] = [1, 2];
let [v14, v15] = [1, 2];
const [v16, v17] = [1, 2];
console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[v12] = " + v12);
console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[v13] = " + v13);
console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[v14] = " + v14);
console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[v15] = " + v15);
console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[v16] = " + v16);
console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[v17] = " + v17);
console.log("");

/**
 * 对于 Set 结构，也可以使用数组的解构赋值。
 */
let [v18, v19, v20] = new Set(["v18", "v19", "v20"]);
console.log("[destructuring]\t\t[test-" + 7 + "]\t\t[v20] = " + v20);
console.log("");


/**
 * fibs 是一个 Generator 函数，原生具有 Iterator 接口。解构赋值会依次从这个接口获取值
 */
function* fibs() {
    var a = 0;
    var b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

var [first, second, third, fourth, fifth, sixth] = fibs();
console.log("[destructuring]\t\t[test-" + 8 + "]\t\t[sixth] = " + sixth);