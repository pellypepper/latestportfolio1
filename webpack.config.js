const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // Other configurations...
  optimization: {
    splitChunks: {
        chunks: 'all',
      },
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    
  ],
   externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};