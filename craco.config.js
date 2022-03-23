module.exports = {
    babel: {
      plugins: [
        'babel-plugin-transform-typescript-metadata',
        [' ', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
      presets: ['@babel/preset-typescript'],
    },
  }