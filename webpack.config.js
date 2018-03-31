const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const API_HOST_DEVELOPMENT = 'http://localhost:3000'
const API_HOST_STAGING = '/api'
const API_HOST_PRODUCTION = '/api'

const getStyleLoaders = (filetype) => {
  const styleLoaders = []

  styleLoaders.push('style-loader')

  styleLoaders.push({
    loader: 'css-loader',
    options: {
      modules: (filetype === 'less'),
      localIdentName: (process.env.NODE_ENV === 'development') ? '[name]__[local]___[hash:base64:5]' : undefined,
    },
  })

  styleLoaders.push('resolve-url-loader')

  if (filetype === 'less') {
    styleLoaders.push({
      loader: 'less-loader',
      options: {
        sourceMap: true,
        javascriptEnabled: true,
        paths: [
          path.resolve(__dirname, './src/js/components'),
        ],
      },
    })
  }

  return styleLoaders
}

module.exports = {
  entry: [
    'babel-polyfill',
    './src/js/app.jsx',
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: (process.env.NODE_ENV === 'development') ? '[name].js' : '[name].[chunkhash].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: getStyleLoaders('css'),
      },
      {
        test: /\.(less)$/,
        use: getStyleLoaders('less'),
      },
      {
        test: /\.(svg|jpg|gif|png|ico|webp|ttf|eot|woff(2)?|mp4|webm|ogv)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-0', 'react'],
              plugins: [['import', {
                libraryName: 'antd',
              }]],
            },
          },
        ],
      },
    ],
  },

  devtool: (process.env.NODE_ENV === 'development') ? 'cheap-module-eval-source-map' : undefined,

  plugins: (() => {
    const plugins = []

    let apiHost = API_HOST_PRODUCTION

    if (process.env.API_ENV) {
      switch (process.env.API_ENV) {
        case 'development':
          apiHost = API_HOST_DEVELOPMENT
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
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [autoprefixer],
        },
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        minify: (process.env.NODE_ENV === 'development') ? false : {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
        },
      }),
    )

    if (process.env.WEBPACK_ANALYZE) {
      plugins.push(new BundleAnalyzerPlugin())
    }

    plugins.push(new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module, count) => (module.context && module.context.indexOf('node_modules') >= 0),
    }))

    plugins.push(new webpack.optimize.CommonsChunkPlugin({
      async: true,
      minChunks: 2,
    }))

    if (process.env.NODE_ENV !== 'development') {
      plugins.push(new UglifyJSPlugin())
    }

    return plugins
  })(),

  resolve: {
    modules: [
      path.join(__dirname, 'src/js'),
      path.join(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    compress: true,
    disableHostCheck: true,
  },
}
