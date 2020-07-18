var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');

// 不参与打包文件的路径配置externals

var utilsList = fs.readdirSync(path.resolve(__dirname, '../tools/utils'));
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../tools/mixins'));
var externals = {};

Object.keys(Components).forEach(function(key) {
    externals[`umy-ui/packages/${key}`] = `umy-ui/lib/${key}`;
});

externals['umy-ui/tools/locale'] = 'umy-ui/lib/locale';

utilsList.forEach(function(file) {
    file = path.basename(file, '.js');
    externals[`umy-ui/tools/utils/${file}`] = `umy-ui/lib/utils/${file}`;
});
mixinsList.forEach(function(file) {
    file = path.basename(file, '.js');
    externals[`umy-ui/tools/mixins/${file}`] = `umy-ui/lib/mixins/${file}`;
});

externals = [Object.assign({
  vue: 'vue',
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
    '@': path.resolve(__dirname, '../examples'),
    packages: path.resolve(__dirname, '../packages'),
    'umy-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};
