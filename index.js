/* 自动生成者来着 './build/build-entry.js' */

import Demo from './packages/demo/index.js';
import UTableColumn from './packages/u-table-column/index.js';
import UTable from './packages/u-table/index.js';
import UxGrid from './packages/ux-grid/index.js';
import UxTableColumn from './packages/ux-table-column/index.js';
import locale from 'umy-ui/tools/locale';
// 引入u-table的locale
import tableLocale from 'umy-table/lib/locale'

const components = [
  Demo,
  UTableColumn,
  UTable,
  UxGrid,
  UxTableColumn
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
  version: '1.1.0',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  Demo,
  UTableColumn,
  UTable,
  UxGrid,
  UxTableColumn
};
