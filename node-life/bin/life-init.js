#!/usr/bin/env node

/**
 * @author CaMnter
 */

const path = require('path');
const fs = require('fs');
const download = require('../lib/download');
const generator = require('../lib/generator');
const process = require('process');
const spawn = require('react-dev-utils/crossSpawn');

/**
 * 命令行交互工具
 * @type {commander.CommanderStatic | commander}
 */
const program = require('commander');

/**
 * 使用 * 等符号
 * 来写一个 glob 规则
 * 像在 shell 里一样
 * 获取匹配对应规则的文件
 * @type {glob}
 */
const glob = require('glob');

/**
 * 终端交互工具
 */
const inquirer = require('inquirer');

/**
 * 修改控制台中字符串的样式（字体样式加粗等／字体颜色／背景颜色）
 */
const chalk = require('chalk');

/**
 * 各种日志级别的彩色符号
 */
const logSymbols = require('log-symbols');

program.usage('<project-name>')
       .option('-t, --type [repository-type]', 'repository type「github or gitlab」', 'github')
       .option('-r, --repository [repository]', 'repository path「user/repository」', 'CaMnter/front-end-life')
       .parse(process.argv);

/**
 *「Test」
 * node bin/life init --type gitlab
 * node bin/life init --repository CaMnter/front-end-life
 * node bin/life init --type github --repository CaMnter/front-end-life
 */
console.log('「program.type」', program.type);
console.log('「program.repository」', program.repository);

