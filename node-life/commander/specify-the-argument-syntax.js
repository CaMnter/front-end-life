#!/usr/bin/env node

/**
 * @author CaMnter
 */

var program = require('commander');

/**
 * <> 必填
 * [] 选填
 */

let saveValue;
let youValue;

program
  .version('0.1.0')
  .arguments('<save> [you]')
  .action((save, you) => {
    saveValue = save;
    youValue  = you;
  });
program.parse(process.argv);

if (typeof saveValue === 'undefined') {
  console.error('no save');
  process.exit(1);
}

console.log('「saveValue」:', saveValue);
console.log('「youValue」:', youValue || "no you");

// node commander/specify-the-argument-syntax.js
// node commander/specify-the-argument-syntax.js save
// node commander/specify-the-argument-syntax.js save you