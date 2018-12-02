/**
 * Created by：CaMnter
 */

/*******************
 * 尾递归优化的实现 *
 *******************/

/**
 * 尾递归优化只在严格模式下生效，那么正常模式下
 *
 * 就是自己实现尾递归优化
 */
function f1(x, y) {
    if (y > 0) {
        return f1(x + 1, y - 1);
    } else {
        return x;
    }
}
// Maximum call stack size exceeded
// console.log("[function]\t\t[test-" + 1 + "]\t\t[f1(1,233333)] = " + f1(1, 233333));
console.log("");

/**
 * 蹦床函数 （trampoline）可以将递归执行转为循环执行
 *
 * 接受一个函数 f 作为参数。只要f执行后返回一个函数，就继续执行。注意，这里是返回一个函数，然后执行该
 * 函数，而不是函数里面调用函数，这样就避免了递归执行，从而就消除了调用栈过大的问题
 */

function trampoline(f) {
    while (f && f instanceof Function) {
        f = f();
    }
    return f;
}
/**
 * 改写为每一步返回 另一个函数
 */
function sum(x, y) {
    if (y > 0) {
        return sum.bind(null, x + 1, y - 1);
    } else {
        return x;
    }
}
console.log("[function]\t\t[test-" + 2 + "]\t\t[trampoline(sum(1, 233333))] = " + trampoline(sum(1, 233333)));
console.log("");


/*******************
 * 真正的尾递归优化 *
 *******************/

function tco(f) {
    var value;
    var active = false;
    var accumulated = [];

    return function accumulator() {
        // 保存 function
        accumulated.push(arguments);
        if (!active) {
            active = true;
            while (accumulated.length) {
                value = f.apply(this, accumulated.shift());
            }
            active = false;
            return value;
        }
    }
}

var sumTco = tco(function (x, y) {
    if (y > 0) {
        return sum(x + 1, y - 1)
    }
    else {
        return x
    }
});
console.log("[function]\t\t[test-" + 3 + "]\t\t[trampoline(sumTco(1, 233333))] = " + trampoline(sumTco(1, 233333)));
