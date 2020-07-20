var Components = require('../components.json');
var fs = require('fs');
var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');
var endOfLine = require('os').EOL;

var OUTPUT_PATH = path.join(__dirname, '../index.js')
var INSTALL_COMPONENT_TEMPLATE = '  {{name}}';
var IMPORT_TEMPLATE = 'import {{name}} from \'./packages/{{package}}/index.js\';'
var MAIN_TEMPLATE = `/* 自动生成者来着 './build/build-entry.js' */

{{include}}
import locale from 'umy-ui/tools/locale';
// 导出u-table
import { UTableColumn, UTable, UxGrid, UxTableColumn } from 'umy-table'
// 引入u-table的locale
import tableLocale from 'umy-table/lib/locale'

const components = [
  UTableColumn,
  UTable,
  UxGrid,
  UxTableColumn,
{{install}}
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);
  // 设置u-table的语言
  tableLocale.use(opts.locale);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$UMYUI = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '{{version}}',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  UTableColumn,
  UTable,
  UxGrid,
  UxTableColumn,
{{list}}
};
`;

var ComponentNames = Object.keys(Components);

var includeComponentTemplate = [];
var installTemplate = [];
var listTemplate = [];

ComponentNames.forEach(name => {
  var componentName = uppercamelcase(name);

  includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
    name: componentName,
    package: name
  }));
  installTemplate.push(render(INSTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      component: name
  }));
  if (componentName !== 'Loading') listTemplate.push(`  ${componentName}`);
});

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join(endOfLine),
  install: installTemplate.join(',' + endOfLine),
  version: process.env.VERSION || require('../package.json').version,
  list: listTemplate.join(',' + endOfLine)
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:', OUTPUT_PATH);

