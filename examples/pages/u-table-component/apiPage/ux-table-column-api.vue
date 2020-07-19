<template>
    <div class="tableApi width100">
        <p class="api-title">ux-table-column Attributes（属性）</p>
        <u-table
                ref="plTableAttributes"
                fixed-columns-roll
                :data="datas"
                beautify-table
                inverse-current-row
                header-drag-style
                row-key="uuid"
                border>
            <u-table-column
                    v-for="(item, index) in columnsAttributes"
                    :key="index"
                    :resizable="false"
                    :prop="item.prop"
                    :label="item.label"
                    :min-width="item.minWidth"
                    :width="item.width"/>
        </u-table>
    </div>
</template>

<script>
    import {data,columns} from '../apiConfig/ux-table-column-api'
    import {addUuid} from '../../../utils'
    export default {
        name: "ux-table-column-api",
        data () {
            return {
                columnsAttributes: [],
                datas: [],
            }
        },
        mounted () {
            setTimeout(() => {
                this.columnsAttributes = columns
                this.datas = addUuid(data)
            })
        }
    }
</script>

<style scoped>

</style>
