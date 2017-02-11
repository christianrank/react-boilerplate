var autoprefixer        = require('autoprefixer');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/js/app.js'],
    output: {
        path: './dist',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1!postcss!less')
            },
            {
                test: /\.(jpg|gif|png|webp|ttf|eot|svg|woff(2)?)$/,
                loader: 'file'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
        ]
    },
    postcss: [autoprefixer],
    plugins: [
        new ExtractTextPlugin('app.css', {
            allChunks: true
        })
    ],
    resolve: {
        modulesDirectories: ['web_modules', 'node_modules', 'src/js'],
        alias: {
            config: __dirname + '/src/js/config/production.js',
        },
    },
    // exclude and load from cdnjs
    externals: {
        //jquery: 'jQuery',
        //react: 'React',
        //'react-dom': 'ReactDOM'
    }
};
