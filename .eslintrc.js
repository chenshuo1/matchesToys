module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true, // 支持后面的测试环境
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // https://www.lowerfish.com/2018/08/28/what-is-the-benefit-of-prefer-default-export/
    // 有利于tree shake 减小文件体积
    'import/prefer-default-export': 0,
  },
};
