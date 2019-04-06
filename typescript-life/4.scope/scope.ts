/**
 * Created by：CaMnter
 */

/**
 「全局作用域」全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。
 「类作用域」这个变量也可以称为 字段。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问
 「局部作用域」局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用
 */

// 全局变量
const globalValue = 'globalValue';

class Mine {
  // 类变量
  sign: string = 'Save you from anything';
  // 静态变量
  static target: number = 7;

  getAll(): string {
    // 局部变量
    return 'Save you from anything 7'
  }
}

console.log(`「globalValue」${ globalValue }`);
console.log(`「Mine.target」${ Mine.target }`);
const mine = new Mine();
console.log(`「mine.sign」${ mine.sign }`);
console.log(`「mine.getAll()」${ mine.getAll() }`)