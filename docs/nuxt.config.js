import config from "./config";
var hljs = require("highlight.js");
var path = require("path");
// 配置表
export default {
  mode: "universal",
  server: {
    host: config.host, // default: localhost
    port: config.port // 服务端口
  },
  /*
   ** Headers of the page
   */
  head: {
    title:
      "umyui-ui开发文档 - 为开发者准备的基于 Vue 2.0 的桌面端组件库，完美解决表格万级数据渲染卡顿问题",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "umyui, umy-ui, umy ui, ui, UI库, vue ui库, 解决element表格卡顿"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "themes/default",
    "themes/hightlight",
    "themes/publicLess",
    "themes/element-style/index",
    // ../lib/theme-chalk/index.css // 测试
    "../theme/index" // 开发
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/ElementUI", ssr: true }, // ssr:true代表在服务端渲染,客户端不渲染
    { src: "~/plugins/UmyUi", ssr: false }, // umyui
    { src: "~/plugins/permission", ssr: false } // 权限拦截
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/markdownit"],
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true,
    use: ["markdown-it-div", "markdown-it-attrs"],
    highlight: function(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre class="hljs"><code>' +
            hljs.highlight(lang, str, true).value +
            "</code></pre>"
          );
        } catch (__) {}
      }
      return (
        '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
      );
    }
  },
  axios: config.axios,
  /*
   ** Build configuration
   */
  build: {
    cssSourceMap: false, // 压缩JS 和 CSS
    extractCSS: true, // 使用Vue 服务器端渲染指南启用常见CSS提取。减少打包体积
    vendor: ["axios"],
    transpile: [/^element-ui/],
    loader: [
      {
        test: /\.sass$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ],
    // 公用样式变量文件配置
    styleResources: {
      scss: "./themes/common.scss"
    },
    extend(config, ctx) {
      Object.assign(config.resolve.alias, {
        "umy-ui": path.resolve(__dirname, "../")
      });
    }
  }
};
