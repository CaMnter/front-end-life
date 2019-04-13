"use strict";
/**
 * Created by：CaMnter
 */
// constructor
// 对创建该对象的函数的引用
var s1 = new String('Save you from anything');
console.log("s1 : " + s1.constructor);
// length
// 返回字符串的长度
var s2 = s1;
console.log("s2 : " + s2.length);
// prototype
// 允许您向对象添加属性和方法
function employee(id, name) {
    // @ts-ignore
    this.id = id;
    // @ts-ignore
    this.name = name;
}
// @ts-ignore
var emp = new employee(7, 'camnter');
employee.prototype.email = "yuanyu.camnter@gmail.com";
// @ts-ignore
console.log("emp : " + emp.id + " " + emp.name + "  " + emp.email);
// concat
var s3 = 'Save '.concat('you ', 'from ', 'anything');
console.log("s3 : " + s3);
// substring
var s4 = 'Save you fro anything'.substring(0, 4);
console.log("s4 : " + s4);
// split
var a1 = 'Save you from anything'.split(' ');
console.log("a1 : " + a1);
// toLowerCase
var s5 = 'Save you fro anything'.toLowerCase();
console.log("s5 : " + s5);
// toUpperCase
var s6 = 'Save you fro anything'.toUpperCase();
console.log("s6 : " + s6);
