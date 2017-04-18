/**
 * Created by：CaMnter
 */

/*******************
 * yield* 语句 - B *
 ******************/

require("babel-polyfill");

/**
 * yield* Generator 的话，会 for...of 这个 Generator
 * yield* Iterator 的话，也会 for...of 这个 Iterator
 * 数组也是有自己的 Iterator
 * 所有，yield* 数组，就会直接遍历这个数组
 */
(() => {
    function* generatorFunction() {
        yield* ['save', 'you', 'from', 'anything'];
    };
    var generator = generatorFunction();
    for (let value of generator) {
        console.log("[generator]  [test-" + 1 + "]  [value] = ", value);
    }
    generator = generatorFunction();
    console.log("[generator]  [test-" + 1 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 1 + "]  [generator.next()] = ", generator.next(), '\n');
})();

/**
 * 只要有 Iterator 接口，就可以被 yield* 遍历
 */
(() => {
    function* generatorFunction() {
        yield* 'Save';
    };
    for (let char of generatorFunction()) {
        console.log("[generator]  [test-" + 2 + "]  [char] = ", char);
    }
    console.log('');
})();

/**
 * yield* Generator return
 */
(() => {
    function* otherGeneratorFunction() {
        yield 22;
        yield 33;
        return 'otherGeneratorFunction';
    };
    function* generatorFunction() {
        yield 11;
        let returnValue = yield* otherGeneratorFunction();
        console.log("[generator]  [test-" + 3 + "]  [returnValue] = ", returnValue);
        yield 44;
    };
    let generator = generatorFunction();
    console.log("[generator]  [test-" + 3 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 3 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 3 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 3 + "]  [generator.next()] = ", generator.next());
    console.log("[generator]  [test-" + 3 + "]  [generator.next()] = ", generator.next(), '\n');
})();


(() => {
    function* otherGeneratorFunction() {
        yield 22;
        yield 33;
        return 'otherGeneratorFunction';
    };
    function* generator(targetGenerator) {
        let returnValue = yield* targetGenerator;
        console.log("[generator]  [test-" + 4 + "]  [returnValue] = ", returnValue);
    };
    console.log("[generator]  [test-" + 4 + "]  [...generator(otherGeneratorFunction())] = ", [...generator(otherGeneratorFunction())], '\n');
})();

/**
 * 深度遍历
 */
(() => {
    let array = [11, [22, 33, [44, 55, [66, 77]]], [88, 99]];

    function* depthTraversal(array) {
        if (Array.isArray(array)) {
            for (let element of array) {
                yield* depthTraversal(element);
            }
        } else {
            yield array;
        }
    };
    for (let value of depthTraversal(array)) {
        console.log("[generator]  [test-" + 5 + "]  [value] = ", value);
    }
    console.log('');
})();

/**
 * 遍历完全二叉树
 */
(() => {
    function Tree(left, current, right) {
        this.left = left;
        this.current = current;
        this.right = right;
    };
    function* inorder(node) {
        if (node) {
            yield* inorder(node.left);
            yield node.current;
            yield* inorder(node.right);
        }
    };
    function makeTree(array) {
        if (array.length == 1)return new Tree(null, array[0], null);
        return new Tree(makeTree(array[0]), array[1], makeTree(array[2]));
    };
    let tree = makeTree([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);
    console.log("[generator]  [test-" + 6 + "]  [tree] = ", tree);
    for (let node of inorder(tree)) {
        console.log("[generator]  [test-" + 6 + "]  [node] = ", node);
    }
})();

