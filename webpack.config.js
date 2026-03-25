import path from 'node:path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(import.meta.dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    watchFiles: ['./src/index.html'],
  },
  devtool: 'eval-source-map',
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
