const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

var zWCC = require('./webpack.common'); // zorroWebpackCommonConfigs

zWCC.config.mode = 'development';
zWCC.config.output.path = path.resolve(__dirname, 'www');
zWCC.config.module.rules[zWCC.index.htmlIndex].use[2].options.minimize = false;
// zWCC.config.watch = true;
// zWCC.config.plugins = [
// 	new LiveReloadPlugin({})
// ];

module.exports = zWCC.config;
