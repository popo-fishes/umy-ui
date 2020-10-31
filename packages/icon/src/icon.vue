<template>
    <svg class="u-icon" @click="$emit('click',$event)" :style="{fill:`${color}`,fontSize: fontWidth}" :class="{loading:loading}">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    import '../../../tools/utils/svg.js'
    import {isString,isNumber} from "../../../tools/utils/types"

    export default {
        name: "u-icon",
        props: {
            name,
            fontSize:{
              type:Number|String,
              default: '1em '
            },
            color: {
                type: String
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        computed:{
            fontWidth(){
                if(isString(this.fontSize))return this.fontSize
                if(isNumber(this.fontWidth))return this.fontSize +'px'
                return new Error('fontSize must be Number or String')
            }
        }
    }
</script>
