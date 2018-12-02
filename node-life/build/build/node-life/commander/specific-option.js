#!/usr/bin/env node

/**
 * @author CaMnter
 */

var program = require('commander');


program
  .version('0.0.1')
  .option('-c, --cm', '「CaMnter」')
  .action(cmd => {
    console.log(cmd);
  })
  .parse(process.argv);

// node commander/specific-option.js