var webpack = require('webpack');
var path = require('path');

var src_dir = path.resolve(__dirname, 'src/');
var dist_dir = path.resolve(__dirname, 'dist/');

var config = {
	entry: [
		__dirname + '/src/index.js'
        ],

	output: {
		path: dist_dir,
		publicPath: '/',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devtool: 'source-map',
	devServer: {
		colors: true,
		historyApiFallback: true,
		inline: true,
		hot: true,
		contentBase: './'

	}

};

module.exports = config;
