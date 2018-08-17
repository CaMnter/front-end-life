/**
 * @author CaMnter
 */
const program = require('commander')
const path = require('path')
const fs = require('fs')
const glob = require('glob') // npm i glob -D

program.usage('<project-name>')

// 根据输入，获取项目名称
console.log(program);
console.log(program._args);