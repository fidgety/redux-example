const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const env = process.env.WEBPACK_ENV;

var host = '0.0.0.0';
var port = '9000';

const config = {
    entry: './client/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        publicPath: __dirname + '/public'
    },
    module: {
        loaders: [{
            test: /client.*\.js?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                    // activate source maps via loader query
                    'css?sourceMap!' +
                    'sass?sourceMap&' +
                    'includePaths[]=' +
                    './client/sass-globals')
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    plugins: [
        new ExtractTextPlugin('./styles.css')
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        dns: 'empty'
    }
};


if (env !== 'prod') {
    new WebpackDevServer(webpack(config), {
        contentBase: './public',
        historyApiFallback: true,
        hot: true,
        debug: true
    }).listen(port, host, function (err, result) {
        if (err) {
            console.log(err);
        }
    });
    console.log('-------------------------');
    console.log('Local web server runs at http://' + host + ':' + port);
    console.log('-------------------------');
}

module.exports = config;
