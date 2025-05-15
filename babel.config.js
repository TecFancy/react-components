module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    [
      '@babel/preset-react',
      { runtime: 'automatic', importSource: '@emotion/react' },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@emotion/babel-plugin',
      {
        autoLabel: 'always', // 自动添加 label
        labelFormat: 'tecfancy-[local]', // 使用固定前缀和类名作为 label
      },
    ],
    '@babel/plugin-transform-runtime',
  ],
};
