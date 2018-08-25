#!/usr/bin/env node

/**
 * @author CaMnter
 */

let program = require('commander');

program
  .version('0.0.1')
  .option('-c, --cm', '「CaMnter」')
  .option('-c, --save [save]', '「Save you from anything」', 'save');

program.on('--help', function () {
  console.log('  Examples:');
  console.log('');
  console.log('    $ node commander/custom-help.js --help');
  console.log('');
});

program.parse(process.argv);