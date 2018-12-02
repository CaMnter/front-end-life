/**
 * Created by：CaMnter
 */

/*******************
 * 字符串的解构赋值 *
 *******************/

/**
 * 字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象
 */
const [s,a,v,e] = "Save";
let {length:saveLength} = "Save";
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[s] = " + s);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[a] = " + a);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[v] = " + v);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[e] = " + e);
console.log("[destructuring]\t\t[test-" + 1 + "]\t\t[saveLength] = " + saveLength);
console.log("");

