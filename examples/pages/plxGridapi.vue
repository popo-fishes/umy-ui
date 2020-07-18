/**
* desc： plxGridApi
* date： 2020/7/13 21:15
*/
<template>
    <div class="tableApi width100">
        <p class="api-title">马上完善！！！</p>
    </div>
</template>

<script>
    import {data,columns,eventsData, columnsEvents, columnsMethods, methodsData} from '../apiFile/u-table-api'
    import {addUuid} from '../utils'
    export default {
        name: "plxGridApi",
        data() {
            return {
                columnsAttributes: columns,
                datas:addUuid(data),
                columnsEvents: columnsEvents,
                data2:addUuid(eventsData),
                columnsMethods: columnsMethods,
                data3:addUuid(methodsData),
            }
        }
    }
</script>
