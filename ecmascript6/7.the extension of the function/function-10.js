/**
 * Created by：CaMnter
 */

/************************
 * 箭头函数 - 使用注意点 *
 ************************/

/**
 * JavaScript 语言的 this 对象一直是一个令人头痛的问题，在对象方法中使用 this，必须非常小心。箭头函数 ”绑定” this，很
 * 大程度上解决了这个困扰
 */

/**
 *（1）函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。
 *
 *（2）不可以当作构造函数，也就是说，不可以使用 new 命令，否则会抛出一个错误。
 *
 *（3）不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 Rest 参数代替。
 *
 *（4）不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数
 */

/**
 *
 * 如果是普通函数，执行时 this 应该指向全局对象 window
 * 输出 Save
 *
 * 但是，箭头函数导致 this 总是指向函数定义生效时所在的对象{sign: 'Save you from anything'}
 * 所以输出的是 Save you from anything
 *
 * @type {string}
 */
var sign = 'Save';
function f1() {
    setTimeout(()=> {
        console.log("[function]\t\t[test-" + 1 + "]\t\t[sign] = " + this.sign);
    }, 267);
}
f1.call({sign: 'Save you from anything'});


/**
 * 箭头函数 的 this 绑定了 定义时所在的作用域 Timer 对象.
 * 普通函数 的 this 指向运行时所在的作用域 全局作用域
 *
 * @constructor Timer
 */
function Timer() {
    this.v1 = 0;
    this.v2 = 0;
    // 箭头函数
    setInterval(()=>this.v1++, 1000);
    // 普通函数
    setInterval(function () {
        this.v2++;
    }, 1000)
}
var timer = new Timer();
setTimeout(()=> {
    console.log("[function]\t\t[test-" + 2 + "]\t\t[timer.v1] = " + timer.v1);
}, 2666);
setTimeout(()=> {
    console.log("[function]\t\t[test-" + 2 + "]\t\t[timer.v2] = " + timer.v2);
}, 2666);


/**
 * 箭头函数可以让 this 指向固定化，这种特性很有利于封装回调函数。
 * 下面是一个例子，DOM 事件的回调函数封装在一个对象里面
 *
 * 代码的 init 方法中，使用了箭头函数，这导致这个箭头函数里面的 this，总是指向 handler 对象。
 * 否则，回调函数运行时，this.doSomething 这一行会报错，因为此时 this 指向 document 对象
 *
 * @type {{id: string, init: handler.init, doSomething: handler.doSomething}}
 */
var handler = {
    id: '123456',
    init: function () {
        document.addEventListener('click',
            event => this.doSomething(event.type), false);
    },
    doSomething: function (type) {
        console.log('Handling ' + type + ' for ' + this.id);
    }
};

/**
 * 箭头函数原理:
 * this 指向的固定化，并不是因为箭头函数内部有绑定 this 的机制，实际原因是箭头函数根本没有自己的 this，导致内部
 * 的 this 就是外层代码块的 this。正是因为它没有 this，所以也就不能用作构造函数
 */

/**
 * ES5 ES6 对比
 */
function es6function() {
    setTimeout(()=> {
        console.log("[function]\t\t[test-" + 3 + "]\t\t[sign] = " + this.sign);
    }, 100);
}
// babel 转换后
function es6function() {
    var _this5 = this;

    setTimeout(function () {
        console.log("[function]\t\t[test-" + 3 + "]\t\t[sign] = " + _this5.sign);
    }, 100);
}

/**
 * 除了 this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target
 */

function f2() {
    setTimeout(() => {
        console.log("[function]\t\t[test-" + 4 + "]\t\t[arguments] = ", arguments);
        console.log("[function]\t\t[test-" + 4 + "]\t\t[new.target] = ", new.target);
    }, 100);
}
f2(2, 6, 7);

/**
 * 由于箭头函数没有自己的 this，所以当然也就不能用 call()、apply()、bind() 这些方法去改变 this 的指向
 *
 * 箭头函数没有自己的 this，所以 bind 方法无效，内部的 this 指向外部的 this
 *
 */
(function () {
    return [
        (() => console.log("[function]\t\t[test-" + 5 + "]\t\t[this.x] = ", this.x)).bind({x: 'inner'})()
    ];
}).call({x: 'outer'});

