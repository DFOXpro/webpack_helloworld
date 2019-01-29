const LiveReloadPlugin = require('webpack-livereload-plugin');

var zWCC = require('./webpack.common'); // zorroWebpackCommonConfigs

zWCC.config.mode = 'development';
zWCC.config.devServer = {
	open: false
};
// zWCC.config.watch = true;
// zWCC.config.plugins = [
// 	new LiveReloadPlugin({})
// ];

module.exports = zWCC.config;
