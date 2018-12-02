/**
 * Created by：CaMnter
 */

/**************
 * 暂时性死区  *
 **************/

var you = "07";
if (true) {
    // you = "06"; // 报错
    // console.log("[let]\t\t[test-" + 1 + "]\t\t[you] = " + you);
    let you;
}

/**
 * ES6 明确规定，如果区块中存在 let 和 const 命令，这个区块对这些命令声明的变量，从一开始就形
 * 成了封闭作用域。凡是在声明之前就使用这些变量，就会报错
 */

/**
 * 在代码块内，使用 let 命令声明变量之前，该变量都是不可用的。
 * 这在语法上，称为 “暂时性死区”（temporal dead zone，简称 TDZ）。
 */

if (true) {
    // you = "06"; // 报错
    // console.log("[let]\t\t[test-" + 2 + "]\t\t[you] = " + you);

    let you; // 之上是 TDZ ,之后是 TDZ 结束
    console.log("[let]\t\t[test-" + 2 + "]\t\t[you] = " + you);

    you = "06";
    console.log("[let]\t\t[test-" + 2 + "]\t\t[you] = " + you);
}

/**
 * “暂时性死区” 也意味着 typeof 不再是一个百分之百安全的操作。
 * 在没有 let 之前，typeof 运算符是百分之百安全的，永远不会报错。
 * 现在这一点不成立了
 */

if (true) {
    typeof undefined_save; // 不报错
    // typeof save; // 报错
    let save;
}

function f1(x = y, y = 2) {
    return [x, y];
}
// f1(); // 报错

function f2(x = 2, y = x) {
    return [x, y];
}
f2();

/**
 * ES6 规定暂时性死区和 let、const 语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这
 * 个变量，从而导致意料之外的行为。这样的错误在 ES5 是很常见的，现在有了这种规定，避免此类错误就很容易了。
 *
 * 总之，暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声
 * 明变量的那一行代码出现，才可以获取和使用该变量。
 */

