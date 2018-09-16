#!/usr/bin/env node

/**
 * @author CaMnter
 */

let colors = require('colors');

function makeGreen(txt) {
  return colors.green(txt);
}

function logGreen(txt) {
  console.log(makeGreen(txt));
}

module.exports = {
  logGreen: logGreen,
  makeGreen: makeGreen
}