
```html
 <template>
 <div>
   <el-row>
     <u-button>Default</u-button>
     <u-button dashed>Dashed</u-button>
     <u-button type="primary">主要按钮</u-button>
     <u-button type="success">成功按钮</u-button>
     <u-button type="warn">警告按钮</u-button>
     <u-button type="error">危险按钮</u-button>
     <u-button type="info">信息按钮</u-button>
   </el-row>
 
   <el-row style="margin-top: 30px">
     <u-button type="primary" plain>主要按钮</u-button>
     <u-button type="success" plain>成功按钮</u-button>
     <u-button type="info" plain>信息按钮</u-button>
     <u-button type="warn" plain>警告按钮</u-button>
     <u-button type="error" plain>危险按钮</u-button>
   </el-row>
   <h3 style="margin-top: 30px">图标位置</h3>
   <p>设置position改变图标在按钮内容左右的位置，默认是left</p>
   <el-row style="margin-top: 30px">
     <u-button icon="left" type="primary">left</u-button>
     <u-button icon="right" type="primary" position="right">right</u-button>
     <u-button icon="left">left</u-button>
     <u-button icon="right" position="right">right</u-button>
   </el-row>
   <h3 style="margin-top: 30px">按钮大小</h3>
   <p>设置size可以更改Button的大小尺寸，提供四种大小big、medium、small、mini</p>
   <el-row style="margin-top: 30px;margin-bottom: 20px">
     <u-button @click="buttonSize='big'">big</u-button>
     <u-button @click="buttonSize='medium'">medium</u-button>
     <u-button @click="buttonSize='small'">small</u-button>
     <u-button @click="buttonSize='mini'">mini</u-button>
   </el-row>
   <u-button type="primary" :size="buttonSize">Size</u-button>
 
   <h3 style="margin-top: 30px">加载与禁用</h3>
   <p>添加loading和disabled分别使Button进入loading和disabled状态。</p>
   <el-row style="margin-top: 30px">
     <el-row>
       <u-button type="success" icon="youxiang" @click="sendMsg"  :loading="buttonLoading">发送</u-button>
       <u-button type="success" circle loading></u-button>
     </el-row>
 
     <el-row>
       <u-button type="success"  disabled>禁用</u-button>
       <u-button type="success" icon="download" circle  disabled></u-button>
     </el-row>
   </el-row>
 </div>
 </template>
 
 <script>
     export default {
         data () {
           return {
             buttonSize: 'big',
             buttonLoading:false
           }
        },
        methods:{
          sendMsg(){
            this.buttonLoading = true
          }
        }
     }
 </script>
 
 <style scoped>
 
 </style>

```

### button属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size     | 尺寸   | string  |   big、medium、small、mini           |    —     |
| type     | 类型   | string    |   dashed、type、round、plain,circle |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| dashed  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| position | 位置 | string   |  —  |  —  |
