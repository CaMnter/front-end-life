/**
 * Created by：CaMnter
 */

/*************************
 * 数值和布尔值的解构赋值 *
 *************************/

/**
 * 参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量
 */
function add([v1, v2]) {
    return v1 + v2;
}
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[add([33, 33])] = " + add([33, 33]));
var a1 = [[1, 1], [3, 3]].map(([a, b]) => a + b);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[a1] = " + a1);
console.log("");

/**
 * 函数参数的解构也可以使用默认值
 */
function move({v3=0, v4=0}={}) {
    return [v3, v4];
}
move({v3: 6, v4: 26});
move({v3: 6});
move({});
move();
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[move({v3: 6, v4: 26})] = " + move({v3: 6, v4: 26}));
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[move({v3: 6})] = " + move({v3: 6}));
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[move({})] = " + move({}));
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[move()] = " + move());
console.log("");

/**
 * undefined 就会触发函数参数的默认值
 */
[1, undefined, 3].map((x = 'save') => x);



