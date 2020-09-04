### (注意分页和侧滑弹窗是u-table和ux-grid共用的文档)

### Table分页属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| pagination-show | 是否显示分页组件 | boolean | — | false |
| total | 总条目数 | number | — | — |
| pager-count | 页码按钮的数量，当总页数超过该值时会折叠 | number | 大于等于 5 且小于等于 21 的奇数 | 5 |
| page-size | 每页显示条目个数 | Number | — | 10 |
| current-page | 当前页数 | Number | — | 1 |
| page-sizes | 每页显示个数选择器的选项设置 | number[] | — | [10, 20, 30, 50] |
| layout | 组件布局，子组件名用逗号分隔 | String | sizes, prev, pager, next, jumper, ->, total, slot | total, sizes, prev, pager, next, jumper |

### Table分页事件

事件名  |  说明  |  参数
:----------: | -------  |  :-------:
| handlePageSize  | 分页变化，条数变化 | { size: 条数 page: 页 } |


### Field Attributes(筛选字段侧滑弹窗属性)

属性  |  说明  |  类型  |  默认值
:----------: | -------  |  :-------:  |  :-------:
| dialog-data | 选择显示字段数组 格式如下 [{ name: '我的', // 表示字段名 state: true, // 表示选择状态 disabled: true // 表示是否禁用 }] | Array  | [] |
| show-amend  | 是否显示修改字段名按钮 | Boolean | false |
| field-title  | 弹框的标题 | String | '选择显示字段' |
| amend-btn-icon  | 修改字段名按钮的图标字体 (必须是iconfont字体) | String | 'el-icon-edit' |
| field-sort | 显示字段，是否可以拖动行进行排序 |  Boolean | true |


### Field Events（筛选字段侧滑弹窗的事件）

事件名  |  说明  |  参数
:----------: | -------  |  :-------:
| amend-field  | 修改单个字段按钮点击事件 |  row, index |
| show-field  | 确认按钮点击事件,获取当前的需要显示的字段 |  当前的字段数组 |
| reset  | 重置按钮点击事件 |  当前的字段数组 |


### Field Methods（筛选字段侧滑弹窗的的方法）

方法名  |  说明  |  参数
:----------: | -------  |  :-------:
| plDialogOpens | 打开弹窗 | -
