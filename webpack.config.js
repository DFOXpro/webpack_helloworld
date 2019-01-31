const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var zWCC = require('./webpack.common'); // zorroWebpackCommonConfigs

zWCC.config.mode = 'production';
zWCC.config.plugins = [
	new OptimizeCssAssetsPlugin({
		assetNameRegExp: /\.css$/g,
		// cssProcessor: require('cssnano'),
		cssProcessorPluginOptions: {
			preset: ['default', { discardComments: { removeAll: true } }],
		},
		canPrint: true
	})
];

module.exports = zWCC.config;
