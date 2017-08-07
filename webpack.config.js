var path = require('path');
var webpack = require('webpack');

var env = process.env.NODE_ENV || 'dev';

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    externals: {
        jquery: 'jQuery'
    },
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [
            'node_modules',
            'app/components',
            'app/api',
        ],
        alias: {
            app: path.resolve(__dirname, './app'),
            applicationStyles: path.resolve(__dirname, './app/styles/app.scss'),
            actions: path.resolve(__dirname, './app/actions/actions.jsx'),
            reducers: path.resolve(__dirname, './app/reducers/reducers.jsx'),
            configureStore: path.resolve(__dirname, './app/store/configureStore.jsx')
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
        {
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    },
    devtool: env === 'prod' ? undefined : 'cheap-module-eval-source-map'
};
