/**
 * Created by：CaMnter
 */

/*****************
 * 嵌套的箭头函数 *
 *****************/

/**
 * ES5
 *
 * 多重嵌套函数.
 */
function insert(target) {
    return {
        into: function (array) {
            return {
                after: function (value) {
                    array.splice(array.indexOf(value) + 1, 0, target);
                    return array;
                }
            }
        }
    }
}
console.log("[function]\t\t[test-" + 1 + "]\t\t[insert(6).into([2, 7]).after(2)] = " + insert(6).into([2, 7]).after(2));
console.log("");


/**
 * ES6
 *
 * 箭头函数嵌套
 */
let insertFunction = target => ({
    into: array=> ({
        after: value=> {
            array.splice(array.indexOf(value) + 1, 0, target);
            return array;
        }
    })
});
console.log("[function]\t\t[test-" + 2 + "]\t\t[insertFunction(6).into([2, 7]).after(2)] = " + insertFunction(6).into([2, 7]).after(2));
console.log("");


/**
 * 部署管道机制（pipeline）
 */
const outer = z => z + 1;
const inter = z => z * 2;
console.log("[function]\t\t[test-" + 3 + "]\t\t[outer(inter(6))] = " + outer(inter(6)));

/**
 * 方便地改写 λ 演算
 */
// ES5
// fix = λf.(λx.f(λv.x(x)(v)))(λx.f(λv.x(x)(v)));

// ES6
var fix = f => (x => f(v => x(x)(v)))
(x => f(v => x(x)(v)));
