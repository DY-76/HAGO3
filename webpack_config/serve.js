'use strict';

const path = require('path');
const merge = require('webpack-merge');
const common = require('./common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isWebGLEnabled = process.argv.some(
    (arg) => arg.startsWith('--webgl') && arg.split('=')[1] === 'true'
);
const templateName = (() => {
    if (process.env.NODE_ENV === 'serve') {
        return isWebGLEnabled ? 'example_webgl.ejs' : 'example.ejs';
    } else {
        return 'example_mini.ejs';
    }
})();
const template = path.resolve('example', templateName);
const devServerPort = 3000;


module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template,
            title: 'HAGO',
            filename: path.resolve('dist', 'index.html'),
            inject: false,
            hash: true,
        }),
    ],
    
    devServer: {
        contentBase: './',
        port: devServerPort,
        historyApiFallback: true,
        publicPath: '/',
        proxy: {
            '/lib/entry-js': {
                target: `http://localhost:${devServerPort}`,
                pathRewrite: { '^/lib/entry-js': '' },
            },
            '/dist': {
                target: `http://localhost:${devServerPort}`,
                pathRewrite: { '^/dist': '' },
            },
        },
    },
    devtool: 'source-map',

    
});




