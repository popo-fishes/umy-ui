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
<style lang="scss" scoped>
    @import "../../../theme/global";

    @keyframes loop {
        to {
            top: -8px;
            left: -8px;
            bottom: -8px;
            right: -8px;
            border-width: 6px;
            opacity: 0;
        }
    }

    @keyframes danger {
        0% {
            transform: scale(1);
            opacity: 0.0;
        }
        25% {
            transform: scale(1.02);
            opacity: 0.1;
        }
        50% {
            transform: scale(1.04);
            opacity: 0.3;
        }
        75% {
            transform: scale(1.06);
            opacity: 0.5;
        }
        100% {
            transform: scale(1.08);
            opacity: 0.0;
        }
    }

    @-webkit-keyframes danger {
        0% {
            -webkit-transform: scale(0);
            opacity: 0.0;
        }
        25% {
            -webkit-transform: scale(0);
            opacity: 0.1;
        }
        50% {
            -webkit-transform: scale(0.1);
            opacity: 0.3;
        }
        75% {
            -webkit-transform: scale(0.5);
            opacity: 0.5;
        }
        100% {
            -webkit-transform: scale(1);
            opacity: 0.0;
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }


    .u-button {
        font-size: $font-size;
        padding: 10px 20px;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        transition: all .2s;
        cursor: pointer;
        &:focus {
            border-color: #F1C40F;
        }

        > .cloakLeft {
            float: left;
            height: inherit;
            opacity: 0.5;
        }

        > .cloakRight {
            float: right;
            height: inherit;
            opacity: 0.5;
        }

        &.size-big {
            font-size: 15px;
            padding: 10px 23px;
            border-radius: 5px;
        }

        &.size-medium {
            font-size: 14px;
            padding: 8px 18px;
            border-radius: 4px;
        }

        &.size-small {
            font-size: 13px;
            padding: 6px 15px;
            border-radius: 3px;
        }

        &.size-mini {
            font-size: 12px;
            padding: 4px 12px;
            border-radius: 3px;
        }

        &:hover {
            opacity: 0.6;
        }

        &:active {
            background-color: $button-active-bg;
        }

        &:focus {
            outline: none;
        }

        > .u-button-content {
            order: 2;
            white-space: nowrap;
        }

        > .u-icon {
            order: 1;
            margin-left: 0;
            margin-right: 0.3em;
        }

        &.icon-right {
            > .u-icon {
                order: 2;
                margin-right: 0;
                margin-left: 0.3em;
            }

            > .u-button-content {
                order: 1;
            }
        }

        &[disabled] {
            color: #c0c4cc;
            background: none;
            pointer-events: none;
            border-color: #ebeef5;
            opacity: 0.5;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;

            &:hover {
                color: rgba(0, 0, 0, .25);
                border-color: #d9d9d9;
            }
        }

        &.dashed {
            border: 1px dashed $border-color;
        }

        &.type-error {
            color: white;

            background-color: $button-error;
            border-color: $button-error;

            &:active {
                opacity: 1;
                color: white;
                background-color: #d81e06;
                border-color: #d81e06;
            }
        }

        &.type-warn {
            color: white;
            background-color: $button-warn;
            border-color: $button-warn;

            &:hover {
                border-color: #ffb311;
            }
        }

        &.type-info {
            color: white;
            background-color: $button-info;
            border-color: $button-info;

            &:hover {
                border-color: #909399;
            }
        }

        &.type-success {
            color: white;
            background-color: $button-success;
            border-color: $button-success;

            &:hover {
                opacity: 1;
                border-color: $button-success;
            }
        }

        &.type-primary {
            color: white;
            background-color: $button-primary;
            border-color: $button-primary;

            &:hover {
                opacity: 1;
                border-color: $button-primary;
            }
        }

        &.type-success.plain {
            color: $button-success;
            background-color: #f0f9eb;
            border-color: $button-success;

            &:hover {
                opacity: 1;
                color: white;
                background-color: $button-success;
                border-color: $button-success;
            }
        }

        &.type-primary.plain {
            color: $button-primary;
            background-color: #ecf5ff;
            border-color: $button-primary;

            &:hover {
                opacity: 1;
                color: white;
                background-color: $button-primary;
                border-color: $button-primary;
            }

        }

        &.type-info.plain {
            color: $button-info;
            background-color: #f4f4f5;
            border-color: $button-info;

            &:hover {
                opacity: 1;
                color: white;
                background-color: $button-info;
                border-color: $button-info;
            }
        }

        &.type-warn.plain {
            color: $button-warn;
            background-color: #fdf6ec;
            border-color: $button-warn;

            &:hover {
                opacity: 1;
                color: white;
                background-color: $button-warn;
                border-color: $button-warn;
            }
        }

        &.type-error.plain {
            color: $button-error;
            background-color: #fef0f0;
            border-color: $button-error;

            &:hover {
                opacity: 1;
                color: white;
                background-color: $button-error;
                border-color: $button-error;
            }

            &:active {
                opacity: 1;
                color: white;
                background-color: #d81e06;
                border-color: #d81e06;
            }
        }

        &.danger:hover {
            border: 6px solid $button-error;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            z-index: 1;
            opacity: 0;
            -webkit-animation: danger 1s ease-out;
            -moz-animation: danger 1s ease-out;
            animation: danger 1s ease-out;
            -webkit-animation-iteration-count: infinite;
            -moz-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
        }


        &.circle {
            width: 2.5em;
            height: 2.5em;
            border-radius: 50%;
            padding: 10px;
            font-size: 16px;

            .u-icon {
                margin-left: 0;
                margin-right: 0;
            }

            &.type-primary:hover {
                background-color: $button-primary;
            }

            &.type-success:hover {
                background-color: $button-success;
            }

            &.type-warn:hover {
                background-color: $button-warn;
            }

            &.type-error:hover {
                background-color: $button-error;
            }

            &.type-info:hover {
                background-color: $button-info;
            }
        }

        .loading {
            animation: spin 1s infinite linear;
        }

        &.loadingCloak {
            opacity: .5;
        }

        &[disabled] {
            cursor: not-allowed;
        }
    }

    .loop {
        position: relative;

        &::before {
            content: '';
            display: block;
            background-color: inherit;
            pointer-events: none;
            position: absolute;
            z-index: 1;
            top: -3px;
            left: -3px;
            bottom: -3px;
            right: -3px;
            border-radius: inherit;
            border: 0 solid inherit;
            opacity: .3;
            animation: loop .3s ease-in-out;
            flex-shrink: 0;
        }
    }


</style>





