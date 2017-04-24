'use strict';

/**
 * Created by：CaMnter
 */

/************
 * 模板编译 *
 ************/

var template = '\n<ul>\n  <% for(var i=0; i < data.supplies.length; i++) { %>\n    <li><%= data.supplies[i] %></li>\n  <% } %>\n</ul>\n';
function compile(template) {
    var evalExpr = /<%=(.+?)%>/g;
    var expr = /<%([\s\S]+?)%>/g;

    template = template.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`').replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    var script = '(function parse(data){\n            var output = "";\n        \n            function echo(html){\n              output += html;\n            }\n        \n            ' + template + '\n        \n            return output;\n    })';

    return script;
}
var parse = eval(compile(template));
// div.innerHTML = parse({ supplies: [ "broom", "mop", "cleaner" ] });

//# sourceMappingURL=string-5-compiled.js.map