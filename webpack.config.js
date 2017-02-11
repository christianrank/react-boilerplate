const webpack           = require('webpack');
const autoprefixer      = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path              = require('path');

const styleLoaders = [];

if (process.env.NODE_ENV === 'development') {
    styleLoaders.push('style-loader');
}

styleLoaders.push({
    loader: 'css-loader',
    options: {
        modules: true,
        importLoaders: true,
        localIdentName:
            (process.env.NODE_ENV === 'development') ?
                '[name]__[local]___[hash:base64:5]' :
                undefined,
    },
});
styleLoaders.push('less-loader');
styleLoaders.push('postcss-loader');

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
    },

    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ((process.env.NODE_ENV === 'development') ?
                    styleLoaders
                    :
                    ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: styleLoaders,
                    })
                ),
            },
            {
                test: /\.(jpg|gif|png|webp|ttf|eot|svg|woff(2)?)$/,
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
        new ExtractTextPlugin({
            filename: 'app.css',
            allChunks: true,
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer],
            },
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
    },

    // exclude and load from cdnjs
    externals: {
        // jquery: 'jQuery',
        // react: 'React',
        // 'react-dom': 'ReactDOM',
    },
};
