/**
 * ux-table-column Attributes（表格属性）
 */
export const columns = [
    {prop: 'parameter', label: '参数', width: 200},
    {prop: 'explain', label: '说明', minWidth: 200},
    {prop: 'type', label: '类型', width: 150},
    {prop: 'optionalValue', label: '可选值', width: 200},
    {prop: 'defaultValue', label: '默认值', width: 200}
]
// ux-table-column 属性的数据
export const data = [
    {
        parameter: 'field',
        explain: '列字段名,如u-table列上面的prop字段',
        type: 'string', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'type',
        explain: '列的类型',
        type: 'string', optionalValue: '—', defaultValue: '—',
        children: [
            {
                parameter: 'index',
                explain: '序号',
                type: '—', optionalValue: '—', defaultValue: '—',
            },
            {
                parameter: 'checkbox',
                explain: '复选框',
                type: '—', optionalValue: '—', defaultValue: '—',
            },
            {
                parameter: 'expand',
                explain: '展开行',
                type: '—', optionalValue: '—', defaultValue: '—',
            }
        ]
    },
    {
        parameter: 'title',
        explain: '显示的标题， 如u-table列上面的label字段',
        type: 'string', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'width',
        explain: '列宽度',
        type: 'string', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'min-width',
        explain: '最小列宽度；会自动将剩余空间按比例分配',
        type: 'string', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'resizable',
        explain: '列是否允许拖动列宽调整大小',
        type: 'boolean', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'visible',
        explain: '列是否显示',
        type: 'boolean', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'fixed',
        explain: '将列固定在左侧或者右侧（注意：固定列应该放在左右两侧的位置）',
        type: 'string', optionalValue: 'left（固定左侧）, right（固定右侧）', defaultValue: '—',
    },
    {
        parameter: 'align',
        explain: '列对齐方式',
        type: 'string', optionalValue: 'left（左对齐）, center（居中对齐）, right（右对齐）', defaultValue: '—',
    },
    {
        parameter: 'header-align',
        explain: '表头列的对齐方式',
        type: 'string', optionalValue: 'left（左对齐）, center（居中对齐）, right（右对齐）', defaultValue: '—',
    },
    {
        parameter: 'show-overflow',
        explain: '当内容过长时显示为省略号(这个是针对当前列，在ux-grid设置的这个属性呢是针对全部列)',
        type: 'string | boolean', optionalValue: 'ellipsis（只显示省略号）, title（并且显示为原生 title）, tooltip（并且显示为 tooltip 提示）', defaultValue: '—',
    },
    {
        parameter: 'show-header-overflow',
        explain: '当表头内容过长时显示为省略号',
        type: 'string | boolean', optionalValue: 'ellipsis（只显示省略号）, title（并且显示为原生 title）, tooltip（并且显示为 tooltip 提示）', defaultValue: '—',
    },
    {
        parameter: 'class-name',
        explain: '给单元格附加 className，也可以是函数 Function({row, rowIndex, $rowIndex, column, columnIndex, $columnIndex})',
        type: 'string | Function', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'formatter',
        explain: '格式化显示内容 Function({cellValue, row, column})',
        type: 'Function', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'seq-method',
        explain: '只对 type=index 有效，自定义索引方法 Function({row, rowIndex, column, columnIndex})',
        type: 'Function', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'sortable',
        explain: '是否允许列排序',
        type: 'boolean', optionalValue: '—', defaultValue: 'false',
    },
    {
        parameter: 'sort-by',
        explain: '只对 sortable 有效，自定义排序的属性',
        type: 'string | string[]', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'sort-method',
        explain: '只对 sortable 有效，列的排序方法，该方法 Function(prevRow, nexRow) 的返回值用来决定该行的排序规则',
        type: 'Function', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'remote-sort',
        explain: '是否使用服务端排序，如果设置为 true 则不会对数据进行处理',
        type: 'boolean', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'filters',
        explain: '配置筛选条件 注：筛选只能用于列表',
        type: 'any', optionalValue: '—', defaultValue: '—',
        children: [
            {
                parameter: 'label',
                explain: '显示的值',
                type: 'string', optionalValue: '—', defaultValue: '—',
            },
            {
                parameter: 'value',
                explain: '实际的值',
                type: 'any任意', optionalValue: '—', defaultValue: '—',
            },
            {
                parameter: 'checked',
                explain: '默认是否选中',
                type: 'boolean', optionalValue: '—', defaultValue: 'false'
            },
            {
                parameter: 'data',
                explain: '自定义渲染的数据值（当使用自定义模板时可能会用到）',
                type: 'any任意', optionalValue: '—', defaultValue: '—'
            }
        ]
    },
    {
        parameter: 'filter-multiple',
        explain: '只对 filters 有效，筛选是否允许多选',
        type: 'boolean', optionalValue: '—', defaultValue: 'true'
    },
    {
        parameter: 'filter-method',
        explain: '只对 filters 有效，列的筛选方法，该方法 Function({value, row, column}) 返回值用来决定该行是否显示',
        type: 'Function', optionalValue: '—', defaultValue: '—'
    },
    {
        parameter: 'filter-method',
        explain: '只对 filters 有效，列的筛选方法，该方法 Function({value, row, column}) 返回值用来决定该行是否显示',
        type: 'Function', optionalValue: '—', defaultValue: '—'
    },
    {
        parameter: 'edit-render',
        explain: '可编辑渲染器',
        type: 'boolean', optionalValue: '—', defaultValue: 'false'
    },
    {
        parameter: 'tree-node',
        explain: '只对 tree-config 配置时有效，指定为树节点',
        type: 'boolean', optionalValue: '—', defaultValue: 'false'
    },
    {
        parameter: 'Scoped Slot',
        explain: '插槽',
        type: '主要是用来自定义列的，如template v-slot:edit="scope"', optionalValue: '—', defaultValue: '—',
        children: [
            {
                parameter: 'default',
                explain: '自定义显示内容模板',
                type: '如template上写 v-slot="{row, rowIndex, column, columnIndex}"', optionalValue: '—', defaultValue: '{row, rowIndex, column, columnIndex}'
            },
            {
                parameter: 'header',
                explain: '自定义表头内容的模板',
                type: '如template上写 v-slot:header="scope是个对象，里面就是这个:{row, rowIndex, column, columnIndex}"', optionalValue: '—', defaultValue: '{row, rowIndex, column, columnIndex}'
            },
            {
                parameter: 'content',
                explain: '只对 type=expand 有效，自定义展开后的内容模板',
                type: '如template上写 v-slot:expand="scope"', optionalValue: '—', defaultValue: '{row, rowIndex, column, columnIndex}'
            },
            {
                parameter: 'filter',
                explain: '只对 filter-render 启用时有效，自定义筛选模板',
                type: '如template上写 v-slot:filter="scope"', optionalValue: '—', defaultValue: '{column, columnIndex}'
            },
            {
                parameter: 'edit',
                explain: '只对 edit-render 启用时有效，自定义可编辑组件模板',
                type: '如template上写 v-slot:edit="scope"', optionalValue: '—', defaultValue: '{row, rowIndex, column, columnIndex}'
            }
        ]
    }
]
