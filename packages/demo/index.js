import demo from './src/demo';

/* istanbul ignore next */
demo.install = function(Vue) {
    Vue.component(demo.name, demo);
};

export default demo;
