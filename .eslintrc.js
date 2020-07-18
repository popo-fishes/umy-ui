module.exports = {
  root: true,
  "globals": {
      "ga": true,
      "chrome": true
  },
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    "@vue/standard",
  ],
  parserOptions: {
    'ecmaVersion': 6
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    "key-spacing": 0,
    "comma-dangle": 0,
    "no-unused-vars": 0,
    "spaced-comment": 0,
    "comma-spacing": 0,
    "keyword-spacing": 0,
    "space-before-blocks": 0,
    "space-infix-ops": 0,
    "radix": 0,
    "no-extend-native": 0,
    "brace-style": 0,
    "indent": 0, //缩进风格
    "semi": 1,  // 语句可以不需要分号结尾
    "no-extra-parens": 1, // 非必要的括号
    "no-empty": 1, // 块语句中的内容不能为空
    "eqeqeq": 0, // 必须使用全等
    "one-var": 0, // 连续声明
    "no-undef": 0, // 可以 有未定义的变量
    "space-before-function-paren": 1,  // 函数定义时括号前面要不要有空格
    "no-restricted-globals": ["error", "event", "fdescribe"],
    "no-return-assign": "off",
    "no-inner-declarations": [1, "functions"],
    "no-multi-spaces": 0, // 连续多个不用于缩进的空格通常是错误
    "no-multiple-empty-lines": ["error", { "max": 2, "maxBOF": 1}]
  }
}
