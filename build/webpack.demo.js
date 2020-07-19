const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const utils = require('./utils')
const config = require('./config');
const isProd = process.env.NODE_ENV === 'production'

const webpackConfig = {
    mode: process.env.NODE_ENV,
    devtool: isProd ? false : '#eval-source-map',
    entry: {app: './examples/index.js'},
    output: isProd ? {
        publicPath: './', // 发布路径
        filename: utils.assetsPath('js/[name].[hash:7].js'),
        chunkFilename: utils.assetsPath('js/[id].[hash:7].js'),
        path:path.join(__dirname,'../docs')
    } : { publicPath: '/', filename: '[name].js'}, // 输出文件命名规则},
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: ['node_modules'],
        alias: config.alias,
    },
    devServer: {
        host: 'localhost',
        port: 86,
        publicPath: '/',
        hot: true
    },
    performance: {
        hints: false
    },
    stats: {
        children: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [{
                    loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-resources-loader',
                    options: {
                        resources: [
                            path.resolve(__dirname, '../examples/themes/common.scss')
                        ]
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            }
                        }
                    },
                    {
                        loader: path.resolve(__dirname, './md-loader/index.js')
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './examples/index.html',
            filename: './index.html',
            favicon: './examples/assets/icon/favicon.ico'
        }),
        new ProgressBarPlugin(),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env.FAAS_ENV': JSON.stringify(process.env.FAAS_ENV)
        }),
        new webpack.LoaderOptionsPlugin({
            vue: {
                compilerOptions: {
                    preserveWhitespace: false
                }
            }
        })
    ],
    optimization: {
        minimizer: []
    }
}

webpackConfig.externals = {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'element-ui': 'ELEMENT',
    'vuex': 'Vuex',
    'highlight.js': 'hljs'
}
if (isProd) {
    webpackConfig.optimization.minimizer.push(
        new TerserPlugin({ // 压缩js
            test: /\.js($|\?)/i,
            cache:  true,
            terserOptions: {
                compress: {
                    drop_console: false, // 去掉console
                    drop_debugger: true, // 去掉debugger
                },
            },
            parallel:  true,
        }),
        new OptimizeCSSAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {removeAll: true},
                // 避免 cssnano 重新计算 z-index
                safe: true,
                //所以这里选择关闭，使用postcss的autoprefixer功能
                autoprefixer: false
            },
            assetNameRegExp: /\.css\?_=[a-z0-9]*$/g
        })
    );
    webpackConfig.plugins.push(
        new MiniCssExtractPlugin({
            path: utils.assetsPath('css'),
            filename: '[name].css?_=[chunkhash]',
            chunkFilename: utils.assetsPath('css/[id].css?_=[chunkhash]')
        })
    )
}

module.exports = webpackConfig
