const webpack           = require('webpack');
const path              = require('path');
const autoprefixer      = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getStyleLoaders = (filetype) => {
    const styleLoaders = [];

    if (process.env.NODE_ENV === 'development') {
        styleLoaders.push('style-loader');
    }

    styleLoaders.push({
        loader: 'css-loader',
        options: {
            modules: (filetype === 'scss'),
            importLoaders: true,
            localIdentName:
                (process.env.NODE_ENV === 'development') ?
                    '[name]__[local]___[hash:base64:5]' :
                    undefined,
        },
    });
    styleLoaders.push('resolve-url-loader');
    styleLoaders.push({
        loader: 'sass-loader',
        options: {
            sourceMap: true,
        },
    });
    styleLoaders.push('postcss-loader');

    return styleLoaders;
};

module.exports = {
    entry: (() => {
        const entries = ['./src/js/app.js'];

        if (process.env.NODE_ENV === 'development') {
            entries.push('webpack/hot/only-dev-server');
        }

        return entries;
    })(),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ((process.env.NODE_ENV === 'development') ?
                    getStyleLoaders('css')
                    :
                    ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: getStyleLoaders('css'),
                    })
                ),
            },
            {
                test: /\.(scss)$/,
                use: ((process.env.NODE_ENV === 'development') ?
                    getStyleLoaders('scss')
                    :
                    ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: getStyleLoaders('scss'),
                    })
                ),
            },
            {
                test: /\.(jpg|gif|png|ico|webp|ttf|eot|svg|woff(2)?|mp4|webm|ogv)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'stage-0', 'react'],
                        },
                    },
                ],
            },
        ],
    },

    devtool: (process.env.NODE_ENV === 'development') ? 'eval-source-map' : undefined,

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
                API: JSON.stringify(process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : (process.env.API || '/api')),
            },
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer],
            },
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            allChunks: true,
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
            hash: true,
        }),
    ],

    resolve: {
        modules: [
            path.join(__dirname, 'src/js'),
            path.join(__dirname, 'src'),
            'node_modules',
        ],
    },

    // exclude and load from cdnjs
    externals: [
        // jquery: 'jQuery',
        // react: 'React',
        // 'react-dom': 'ReactDOM',
        // CdnWebpackPlugin.externals,
    ],
};
