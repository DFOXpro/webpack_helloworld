const path = require('path');
const PROJECT_CODENAME = 'zpwpp'; // Zorro Platzi Webpack Project
const zorroWebpackRulesIndex = {
	jsWorkers: 0,
	js: 1,
	css: 2,
	htmlIndex: 3,
	// htmlTemplates: 4,
}
const zorroWebpackCommonConfigs = {
	module: {
		rules: [
			{ // web/service workers
				test: /_workers\.js$/,
				use: [
					{
						loader: 'worker-loader',
						options: { name: `js/${PROJECT_CODENAME}_[name].[hash].js` }
					}
				]
			},
			{ // old browsers compatibility layer
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					// 'file-loader?name=js/[name].js', // dev
					// '', // `'file-loader?name=js/${jsName}.js`,
					// 'file-loader?name=js/[name].[hash].js', // prod
					// 'extract-loader',
					{
						loader: 'babel-loader',
						options: {
							presets: [
								// '@babel/preset-es2017'
								// '@babel/preset-env',
								// {"useBuiltIns": "entry"},
								'@babel/react'
							],
							plugins: ['@babel/plugin-syntax-dynamic-import']
						}
					}
				]
			},
			{ // CSS Stylus loader
				test: /\.styl$/,
				use: [
					`file-loader?name=css/${PROJECT_CODENAME}_[name].[hash].css`,
					'extract-loader',
					'css-loader',
					'stylus-loader'
				]
			},
			{ // HTML Pug loader for templates
				// test: /\.nohash\.pug$/,
				test: /\.pug$/,
				use: [
					'file-loader?name=[name].html',
					// 'file-loader?name=[name].html',
					'extract-loader',
					{
						loader: 'html-loader',
						options: {
							minimize: true,
							attrs: [
								// 'script:src',
								'img:src',
								'link:href'
							]
						}
					},
					{ // 'pug-html-loader?pretty=true'
						loader: 'pug-html-loader',
						options: {
							pretty: true,
							data: {
								PROJECT_CODENAME: PROJECT_CODENAME
							}
						}
					}
				]
			},
			// { // HTML Pug loader for templates
			// 	test: /\.pug$/,
			// 	use: [
			// 		`file-loader?name=template/[name].html`,
			// 		// 'file-loader?name=[name].html',
			// 		'extract-loader',
			// 		{
			// 			loader: 'html-loader',
			// 			options: {
			// 				attrs: [
			// 					// 'script:src',
			// 					'img:src',
			// 					'link:href'
			// 				]
			// 			}
			// 		},
			// 		'pug-html-loader?pretty=true'
			// 	]
			// }
		]
	},

	// plugins: [
	// ],
	optimization: {
		splitChunks: {
			name: "shared",
			chunks: "initial"
		}
	},
	entry: {
		vendor: ['react', 'react-dom'], // , 'babel-polyfill'],
		app: './src/js/app.js',
		// web_worker: './src/js/web_workers.js', // compiled as async
		// service_worker: './src/js/service_workers.js', // compiled as async
		index: './src/html/index.pug',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: `js/${PROJECT_CODENAME}_[name].js`,
		publicPath: '/',
		chunkFilename: `js/${PROJECT_CODENAME}_async_[id].js`, // .[chunkhash]
	},
	devServer: {
		open: false,
		writeToDisk: true
	}
}

// export zorroWebpackCommonConfigs
module.exports = {
	config: zorroWebpackCommonConfigs,
	index: zorroWebpackRulesIndex,
	PROJECT_CODENAME: PROJECT_CODENAME
};
