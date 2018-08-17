#!/usr/bin/env node

/**
 * @author CaMnter
 */

var program = require('commander');

program
  .version('0.0.1')
  .option('-c, --cm', '「CaMnter」')
  // [] 会默认加上在 program 上
  .option('-c, --save [save]', '「Save you from anything」', 'save')
  .option('--no-cm', 'no cm')
  .parse(process.argv);

console.log('option:');
if (program.cm) console.log('  - cm');
else console.log('warning: without cm ');
if (program.save) console.log('  - save');


// node commander/option --cm
// node commander/option --save
