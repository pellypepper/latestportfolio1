const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // Other configurations...
  optimization: {
    splitChunks: {
        chunks: 'all',
      },
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};