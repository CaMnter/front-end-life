#!/usr/bin/env node

/**
 * @author CaMnter
 */

let colors = require('colors');

function makeGreen(txt) {
  return colors.green(txt);
}

console.log(makeGreen('「color url」「Save you from color url」'));