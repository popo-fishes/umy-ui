<template>
    <button class="u-button"
            :class="[[`icon-${position}`],
             typeStyle,sizeStyle,plainStyle,dangerStyle,dashedStyle,loadingStyle,circleStyle]
            "
            :disabled="disabled||loading"
            ref="button"
            :style="roundStyle"
            @click="onClick"
            @focus="focusOn"
            @blur="blurIt"
    >

        <u-icon :name="loading?'loading':icon"
                :color="color"
                :style="disabledStyle"
                v-if="icon || loading" :class="{loading:loading}">
        </u-icon>
        <span class="u-button-content"
             :style="disabledStyle"
        >
            <slot>
            </slot>
        </span>
    </button>

</template>

<script>

    import Icon from '../../icon/src/icon.vue'

    export default {
        name: 'u-button',
        components: {
            'u-icon': Icon
        },
        methods: {
            onClick() {
                this.$emit('click')
                this.dangerAnimation()
            },
            dangerAnimation() {
                let arr = this.$refs.button.classList
                arr.remove('loop')
                arr.add('loop')
                setTimeout(() => {
                    arr.remove('loop')
                }, 300)
            },
            focusOn() {

            },
            blurIt() {

            }
        },
        computed: {
            disabledStyle() {
                if (this.disabled)return 'pointer-events: none;'
            },
            typeStyle() {
                if (!this.type) return
                return `type-${this.type}`
            },
            sizeStyle() {
                if (!this.size) return
                return `size-${this.size}`
            },
            roundStyle() {
                if (this.round) {
                    return 'border-radius:21px;'
                }
            },
            circleStyle() {
                if (this.circle) {
                    return 'circle'
                }
            },
            plainStyle() {
                if (this.plain) {
                    return 'plain'
                }
            },
            dangerStyle() {
                if (this.danger) {
                    return 'danger'
                }
            },
            dashedStyle() {
                if (this.dashed) {
                    return 'dashed'
                }
            },
            loadingStyle() {
                if (this.loading) {
                    return 'loadingCloak'
                }
            }

        },
        props: {
            icon: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                validator:(val)=>['primary', 'success', 'warn', 'error', 'info'].indexOf(val) > -1
            },
            plain: {
                type: Boolean,
                default: false
            },
            dashed:{
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: 'medium',
                validator(val) {
                    return ['big', 'medium', 'small', 'mini'].indexOf(val) > -1
                }
            },
            round: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                default() {
                    if (this.type) {
                        return 'white'
                    } else {
                        return 'black'
                    }
                }
            },

            loading: {
                type: Boolean,
                default: false
            },
            danger: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'left',
                validator(value) {
                    return !(value !== 'left' && value !== 'right');
                }
            },
            circle: {
                type: Boolean,
                default: false
            }
        }
    }
</script>




