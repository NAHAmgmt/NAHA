const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'article.html',
      template: 'src/articles.html',
      chunks: ['exampleEntry'],
    }),
    new HtmlWebpackPlugin({
        filename: 'aboutUs.html',
        template: 'src/aboutUs.html',
        chunks: ['exampleEntry'],
      }),
  ],
  devtool: 'inline-source-map',
  devServer: {
      static: './dist'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};