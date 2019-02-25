const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var zWCC = require('./webpack.common'); // zorroWebpackCommonConfigs


// This line is intended to use in github-pages
// const ASSET_PATH = process.env.ASSET_PATH || '/webpack_helloworld/dist/';
const ASSET_PATH = process.env.ASSET_PATH || '/';
zWCC.config.output.publicPath = ASSET_PATH

zWCC.config.mode = 'production';
zWCC.config.plugins = [
	new OptimizeCssAssetsPlugin({
		assetNameRegExp: /\.css$/g,
		// cssProcessor: require('cssnano'),
		cssProcessorPluginOptions: {
			preset: ['default', { discardComments: { removeAll: true } }],
		},
		canPrint: true
	}),
	// This makes it possible for us to safely use env vars on our code
	new webpack.DefinePlugin({
		'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
	})
];

module.exports = zWCC.config;
