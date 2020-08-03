import { UxTableColumn } from 'umy-table'
UxTableColumn.install = function(Vue) {
  Vue.component(UxTableColumn.name, UxTableColumn);
};

export default UxTableColumn;
