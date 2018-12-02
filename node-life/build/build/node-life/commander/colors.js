#!/usr/bin/env node

/**
 * @author CaMnter
 */

let program = require('commander');
let colors  = require('colors');

program
  .version('0.0.1')
  .command('url [url]', 'get stream URL')
  .parse(process.argv);

program.outputHelp(makeRed);

function makeRed(txt) {
  return colors.red(txt);
}

// node commander/colors.js url save