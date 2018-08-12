/**
 * @author CaMnter
 */

const commander = require('commander')  // npm i commander -D

commander.version('1.0.0')
         .usage('<command> 「项目名称」')
         .command('cm', '「CaMnter」')
         .command('save', '「Save you from anything」')
         .parse(process.argv)