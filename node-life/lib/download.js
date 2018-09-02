/**
 * @author CaMnter
 */

/**
 * https://github.com/sindresorhus/ora
 * @type {function(): Ora}
 */
const ora      = require('ora');
const path     = require('path');
const download = require('download-git-repo');


const downloadFromUrl = (target, type = 'github', url) => {
  let targetUrl = '';
  switch (type) {
    case 'github':
      targetUrl = `https://github.com/${url}`;
      break;
  }

  target = path.join(target || '.', '.download-temp');

  return new Promise((resolve, reject) => {
    const spinner = ora(`正在下载项目模板，源地址：${targetUrl}`);
    spinner.start();
    download(url, target, { clone: true }, err => {
      if (err) {
        spinner.fail();
        console.log('err', err);
        reject(err)
      } else {
        spinner.succeed();
        resolve(target)
      }
    })
  });
};
