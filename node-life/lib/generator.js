/**
 * @author CaMnter
 */

const Metalsmith = require('metalsmith');
const Handlebars = require('handlebars');
const Remove     = require('rimraf').sync;

module.exports = function (metadata = {}, source, dest = '') {
  if (!source) {
    return Promise.reject(new Error('「Error」「source」${source}'));
  }

  return new Promise((resolve, reject) => {
    Metalsmith(process.cwd())
      .metadata(metadata)
      .clean(false)
      .source(source)
      .destination(dest)
      .use((files, metalsmith, done) => {
        const meta = metalsmith.metadata();
        Object
          .keys(files)
          /**
           * 仅定义替换 package.json 文件
           */
          .filter(x => x.includes('package.json'))
          .forEach(fileName => {
            const t                  = files[fileName].contents.toString();
            files[fileName].contents = new Buffer(Handlebars.compile(t)(meta));
          });
        done();
      })
      .build(error => {
        Remove(source);
        error ? reject(error) : resolve();
      });
  });
};