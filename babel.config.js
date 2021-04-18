module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@Infra': './src/infra',
          '@CrossCuting': './src/crossCuting',
          '@Main': './src/main',
          '@Domain': './src/domain',
          '@Presentation': './src/presentation',
          '@config': './src/main/config'
        }
      }
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    'babel-plugin-transform-typescript-metadata'
  ],
  ignore: ['**/*.spec.ts']
}
