'use strict';

const path = require('path');
const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const isProd = process.argv.indexOf('-p') !== -1;

const webpackConfig = {
  entry: { index: './all.ts' },
  output: {
    filename: './dist/[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      's-js': path.resolve(path.join(__dirname, 'node_modules', 's-js')) //https://github.com/webpack/webpack/issues/2134#issuecomment-192579511
    }
  },
  target: isProd ? 'node' : undefined,
  externals: isProd ? nodeExternals() : undefined,
  devtool: isProd ? undefined : 'sourcemap',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['surplus-loader', 'awesome-typescript-loader']
      }
    ]
  },
  plugins: isProd ? [] : [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    port: 3020,
    open: true,
    hot: true,
    inline: true,
    openPage: 'demo',
    historyApiFallback: {
      index: './demo/index.html'
    }
  }
};

if (isProd) {
  webpackConfig.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 8889,
      reportFilename: 'report.html',
      openAnalyzer: true,
      logLevel: 'info'
    })
  );
}

module.exports = webpackConfig;
