/**
 * Created by：CaMnter
 */

/*****************
 * 不允许重复声明 *
 *****************/

function f1() {
    let y = 6;
    // var y = 6; // 报错
}

function f2() {
    let x = 6;
    // let x = 6; // 报错
}

function f3() {
    var y = 6;
    var y = 6;
}

function f4(args) {
    // let args; // 报错
}

function f5(args) {
    {
        let args;
    }
}

