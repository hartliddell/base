const autoprefixer = require('autoprefixer')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'dist/index.js'
	},
    devtool: "source-map",
	module: {
        preLoaders: [{
            test:    /\.js$/,
            exclude: /node_modules/,
            loader: 'jscs-loader'
        }],
		loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', [
                    'css-loader?sourceMap',
                    'postcss-loader',
                    'sass-loader?sourceMap'
            ])
        }, {
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015']
			}
		}]
	},
	plugins: [
		new ExtractTextPlugin('./dist/[name].css'),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development
            // host: 'localhost',
            // port: 3000,
            // This proxy isn't working. I don't know why.
            // [http://www.stilldrinking.org/blog_images/code-horror.gif]
            notify: false,
            open: false,
            proxy: 'local.base.com',
        })
	],
	postcss: [
		autoprefixer({
			browsers: ['last 2 versions']
		})
	],
    resolve: {
        alias: { 'picker': 'pickadate/lib/picker' }
    }
}
