import { UTableColumn} from 'umy-table'

/* istanbul ignore next */
UTableColumn.install = function(Vue) {
  Vue.component(UTableColumn.name, UTableColumn);
};

export default UTableColumn;
