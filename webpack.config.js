const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const devMode = (process.env.NODE_ENV === 'development')

const API_HOST_LOCAL = 'http://localhost:5000/PROJECT_NAME/us-central1/api'
const API_HOST_DEVELOP = 'https://europe-west1-PROJECT_NAME.cloudfunctions.net/api'
const API_HOST_STAGING = 'https://europe-west1-PROJECT_NAME.cloudfunctions.net/api'
const API_HOST_PRODUCTION = '/api'

const getStyleLoaders = (filetype, modules) => {
  const styleLoaders = []

  styleLoaders.push(
    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules,
        localIdentName: devMode ? '[name]__[local]___[hash:base64:5]' : undefined,
      },
    },
    'postcss-loader',
    'resolve-url-loader',
  )

  if (filetype === 'less') {
    styleLoaders.push({
      loader: 'less-loader',
      options: {
        javascriptEnabled: true,
        paths: [
          path.resolve(__dirname, './src/components'),
        ],
      },
    })
  }

  return styleLoaders
}

module.exports = {
  entry: [
    '@babel/polyfill',
    './src/index.jsx',
  ],

  output: {
    filename: devMode ? '[name].js' : '[name].[contenthash].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.global\.less$/,
        use: getStyleLoaders('less', false),
      },

      {
        test: /^((?!\.global).)*less$/,
        use: getStyleLoaders('less', true),
      },

      {
        test: /\.css$/,
        use: getStyleLoaders('css', false),
      },

      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-react-loader',
        query: {
          classIdPrefix: '[name]-[hash:8]__',
        },
      },

      {
        test: /\.(jpg|gif|png|ico|webp|ttf|eot|woff(2)?|mp4|webm|ogv)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
    ],

    extensions: ['.js', '.jsx'],
  },

  devServer: {
    hot: true,
    historyApiFallback: true,
    compress: true,
  },

  devtool: devMode ? 'cheap-module-eval-source-map' : false,

  plugins: (() => {
    const plugins = []

    let apiHost = API_HOST_PRODUCTION

    if (process.env.API_ENV) {
      switch (process.env.API_ENV) {
        case 'local':
          apiHost = API_HOST_LOCAL
          break
        case 'develop':
          apiHost = API_HOST_DEVELOP
          break
        case 'staging':
          apiHost = API_HOST_STAGING
          break
        default:
          break
      }
    }

    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
          API: JSON.stringify(apiHost),
        },
      }),

      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

      new HtmlWebpackPlugin({
        template: 'src/index.html',
        minify: devMode ? false : {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
        },
      }),

      new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : '[name].[contenthash].css',
      }),
    )

    if (devMode) {
      plugins.push(new webpack.HotModuleReplacementPlugin())
    }

    if (process.env.WEBPACK_ANALYZE) {
      plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins
  })(),

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCssAssetsPlugin(),
    ],
  },
}
