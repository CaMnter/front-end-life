#!/usr/bin/env node

/**
 * @author CaMnter
 */

let colors = require('colors');

function logGreen(txt) {
  console.log(colors.green(txt));
}

function logYellow(txt) {
  console.log(colors.yellow(txt));
}

function logBlue(txt) {
  console.log(colors.blue(txt));
}

function logRed(txt) {
  console.log(colors.red(txt));
}

module.exports = {
  logGreen: logGreen,
  logBlue: logBlue,
  logYellow: logYellow,
  logRed: logRed
}