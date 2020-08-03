import { UTable} from 'umy-table'
UTable.install = function(Vue) {
  Vue.component(UTable.name, UTable);
};

export default UTable;
