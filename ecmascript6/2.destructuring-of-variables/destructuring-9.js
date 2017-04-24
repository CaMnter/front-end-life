/**
 * Created by：CaMnter
 */

/***********************
 * 变量的解构赋值的用途 *
 ***********************/

/**
 * 交换变量的值
 */
var v1 = 16;
var v2 = 26;
[v1, v2] = [v2, v1];
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v1] = " + v1);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v2] = " + v2);
console.log("");

/**
 * 从函数返回多个值
 * 数组
 * 对象
 */
function f1() {
    return [261, 262, 263];
}
var [v3,v4,v5] = f1();
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v3] = " + v3);
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v4] = " + v4);
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v5] = " + v5);
function f2() {
    return {
        v6: 265,
        v7: 266
    };
}
var {v6, v7} = f2();
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v6] = " + v6);
console.log("[destructuring]\t\t[test-" + 2 + "]\t\t[v7] = " + v7);
console.log("");

/**
 * 函数参数的定义
 */
// 参数是一组有次序的值
function f3([x, y, z]) {
    return x + y + z;
}
console.log("[destructuring]\t\t[test-" + 3 + "]\t\t[f3([1, 2, 3])] = " + f3([1, 2, 3]));
// 参数是一组无次序的值
function f4({x, y, z}) {
    return x + y + z;
}
console.log("[destructuring]\t\t[test-" + 3 + "]\t\t[f4({z: 3, y: 2, x: 1})] = " + f4({
        z: 3,
        y: 2,
        x: 1
    }));
console.log("");

/**
 * 提取 JSON 数据
 */
var json1 = {
    camnter: "CaMnter",
    number: 26,
    sign: "Save you from anything"
};
let {sign, number, camnter} = json1;
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[camnter] = " + camnter);
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[sign] = " + sign);
console.log("[destructuring]\t\t[test-" + 4 + "]\t\t[number] = " + number);
console.log("");

/**
 * 函数参数的默认值
 */
var o1 = {};
o1.save = function (tag, {
    camnter= "CaMnter",
    number=26,
    sign="Save you from anything"
}) {
    console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[tag] = " + tag);
    console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[camnter] = " + camnter);
    console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[sign] = " + sign);
    console.log("[destructuring]\t\t[test-" + 5 + "]\t\t[number] = " + number);
    console.log("");
};
o1.save("saveFunction1", {});
o1.save("saveFunction2", {camnter: "saveFunction2-CaMnter"});
o1.save("saveFunction3", {camnter: "saveFunction3-CaMnter", number: "saveFunction3-26"});
o1.save("saveFunction4", {
    camnter: "saveFunction4-CaMnter",
    number: "saveFunction4-26",
    sign: "saveFunction4-Save you from anything"
});

/**
 * 遍历 Map 结构
 */
var map = new Map();
map.set('camnter', 'CaMnter');
map.set('number', '26');
map.set('sign', 'Save you from anything');
for (let [key,value] of map) {
    console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[key] = " + key + "\t\t[value] = " + value);
}
console.log("");
// 获取键名
for (let [key] of map) {
    console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[key] = " + key);
}
console.log("");
// 获取键值
for (let [,value] of map) {
    console.log("[destructuring]\t\t[test-" + 6 + "]\t\t[value] = " + value);
}
console.log("");

/**
 * 输入模块的指定方法
 */
const { SourceMapConsumer, SourceNode } = require("source-map");
