var path = require('path');

module.exports = {
	context: __dirname,
	//entry: './frontend/js/app.js',
	entry: {
		app: './main.js',
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].prod.js'
	},
	module: {
		loaders: [
		{
			// test: /\.js$/,
			//include: path.resolve(__dirname, '/react-models'),
			exclude: path.resolve(__dirname, '/node_modules'),
			loader: "babel-loader",
			query: {
				presets: ['es2015']
			}
		}
		]
		//noParse: new RegExp('^' + path.resolve(__dirname + '/node_modules/'))
	},
	externals: [
	{
		"PIXI": "var PIXI"
	}
	]
};