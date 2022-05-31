module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true, // 支持后面的测试环境
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 13, // 保持一致
    sourceType: 'module',
  },
  rules: {
    // 关闭 eslint 的如下功能
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    'no-shadow': 0,
    'no-restricted-syntax': 0,
    'no-return-assign': 0,
    'no-param-reassign': 0,
    'no-sequences': 0,
    'no-loop-func': 0,
    'no-nested-ternary': 0,
    'no-bitwise': 0,
    'object-curly-newline': 0,
    radix: 0,
  },
};
