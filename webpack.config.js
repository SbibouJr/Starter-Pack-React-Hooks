const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    entry: './src/',
    mode: 'development',
    plugins: [
      new htmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          loaders: [
            'style-loader',
            'css-loader',
          ],
          exclude: /node_modules/,
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
  }
};
