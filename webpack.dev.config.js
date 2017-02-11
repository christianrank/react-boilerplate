const webpack           = require('webpack');
const autoprefixer      = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path              = require('path');

module.exports = {
    // entry: ['webpack/hot/dev-server', './src/js/app.js'],
    entry: './src/js/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                loader: ExtractTextPlugin.extract({
                  loader: [
                      {
                          loader: 'css-loader',
                          options: {
                              modules: true,
                              importLoaders: true,
                              localIdentName: "[name]__[local]___[hash:base64:5]",
                          }
                      },
                      'less-loader',
                      'postcss-loader',
                  ]
                })
            },
            {
                test: /\.(jpg|gif|png|webp|ttf|eot|svg|woff(2)?)$/,
                use: [
                    'file-loader'
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // loader: 'babel',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'stage-0', 'react']
                        }
                    }
                ],
            },
        ]
    },
    devtool: 'eval-source-map',
    plugins: [
        new ExtractTextPlugin({
            filename: 'app.css',
            allChunks: true,
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer]
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
                API: JSON.stringify(process.env.API || 'http://localhost:3000'),
            },
        }),
    ],
    resolve: {
        modules: [
            path.join(__dirname, 'src/js'),
            'node_modules',
        ],
        alias: {
            config: path.join(__dirname, 'src/js/config/development.js'),
        },
    },
    // exclude and load from cdnjs
    externals: {
        //jquery: 'jQuery',
        //react: 'React',
        //'react-dom': 'ReactDOM'
    }
};
