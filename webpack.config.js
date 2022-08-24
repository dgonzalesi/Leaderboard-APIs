const path = require('path');
// eslint-disable-next-line import/no-unresolved
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  devServer: {
    port: 9000,
    open: true,
    // contentBase: path.join(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      title: 'Leaderboard App',
      filename: 'index.html',
      inject: 'head',
      scriptLoading: 'defer',
    }),
  ],
};
