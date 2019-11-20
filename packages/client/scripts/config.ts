import * as path from 'path'
import { Configuration } from 'webpack'
import MonacoEditorWebpackPlugin from 'monaco-editor-webpack-plugin'
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development'

export const mainConfig: Configuration = {
  mode,
  devtool: false,
  target: 'electron-main',
  entry: {
    main: ['./src/main/main.ts'],
  },
  output: {
    path: path.resolve('dist/main'),
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  externals: {
    'aws-sdk': 'empty',
    fsevents: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
}

export const rendererConfig: Configuration = {
  mode,
  devtool: 'source-map',
  target: 'electron-renderer',
  entry: {
    renderer: ['./src/renderer/renderer.tsx'],
  },
  output: {
    path: path.resolve('dist/renderer'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.node'],
  },
  externals: {
    'aws-sdk': 'empty',
    fsevents: 'empty',
    // bindings: 'bindings',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.node$/,
        loader: 'node-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/renderer/index.html',
    }),
    new MonacoEditorWebpackPlugin(),
  ],
}
