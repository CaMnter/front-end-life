#!/usr/bin/env node

/**
 * @author CaMnter
 */

const path                            = require('path');
const fs                              = require('fs');
const download                        = require('../lib/download');
const generator                       = require('../lib/generator');
const process                         = require('process');
const spawn                           = require('react-dev-utils/crossSpawn');
const { logGreen, logYellow, logRed } = require('../lib/colors-log');

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
       .option('-t, --name [repository-type]', 'repository name', 'hello-world')
       .option('-t, --type [repository-type]', 'repository type「github or gitlab」', 'github')
       .option('-r, --repository [repository]', 'repository path「user/repository」', 'CaMnter/front-end-life')
       .parse(process.argv);

/**
 *「Test」
 * node bin/life init --name hello-world --type gitlab
 * node bin/life init --name hello-world --repository CaMnter/front-end-life
 * node bin/life init --name hello-world --type github --repository CaMnter/front-end-life
 */

logYellow('「program.name」' + program.name);
logYellow('「program.type」' + program.type);
logYellow('「program.repository」' + program.repository);
logYellow('「program.args」' + program.args);

const projectName = program.name;

if (!projectName) {
  program.help();
  return
}

/**
 * 遍历当前目录
 */
const currentFiles = glob.sync('*');
const rootName     = path.basename(process.cwd());
logYellow('「currentFiles」' + currentFiles);
logYellow('「rootName」' + rootName);
logYellow('「pwd」' + process.cwd());
logYellow('');

let next = undefined;
logYellow('「currentFiles」' + currentFiles);

/**
 * 在 build 文件夹中执行「node-life/build」
 * node ../bin/life init --name build --type github --repository CaMnter/front-end-life node-life build
 */
if (currentFiles.length) {
  if (currentFiles.filter(name => {
      const fileName = path.resolve(process.cwd(), path.join('.', name))
      logYellow('「fileName」' + fileName);
      /**
       * 是否是文件夹
       */
      const isDirectory = fs.statSync(fileName).isDirectory();
      return name.indexOf(projectName) !== -1 && isDirectory;
    }).length !== 0) {
    logRed("项目「" + projectName + "」已经存在");
    return
  }
  next = Promise.resolve(projectName);
} else if (rootName === projectName) {
  /**
   * 目标目录 与 根目录 名字相同
   */
  logRed("「" + projectName + "」空项目文件夹");
  next = inquirer.prompt([
    {
      name: 'buildInCurrent',
      message: '直接在当前目录下创建？',
      type: 'confirm',
      default: true
    }
  ]).then(answer => {
    return Promise.resolve(answer.buildInCurrent ? projectName : '.')
  })
} else {
  next = Promise.resolve(projectName);
}

/**
 * next = Promise.resolve(projectName)
 */
function run() {
  next
    .then(projectName => {

      /**
       * 异步创建文件夹
       */
      if (projectName !== '.') {
        fs.mkdirSync(projectName);
      }

      /**
       * 下载 github 项目
       */
      return download(projectName, program.type, program.repository)
        .then(target => {
          return {
            name: projectName,
            root: projectName,
            target: target
          }
        });
    })
    .then(flowData => {
      /**
       * 终端交互
       */
      return inquirer
        .prompt([
          {
            name: 'projectName',
            message: '项目的名称',
            default: flowData.name
          }, {
            name: 'projectVersion',
            message: '项目的版本号',
            default: '1.0.0'
          }, {
            name: 'projectDescription',
            message: '项目的简介',
            default: `A project named ${flowData.name}`
          }
        ])
        .then(answers => {
          return {
            ...flowData,
            metadata: {
              ...answers
            }
          }
        });
    })
    .then(inquirerPrompt =>{
      /**
       * 生成
       */
      return generator(
        inquirerPrompt.metadata,
        inquirerPrompt.target,
        path.parse(inquirerPrompt.target).dir
      );
    });
}


