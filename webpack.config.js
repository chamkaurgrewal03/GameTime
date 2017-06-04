var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Main : 'app/components/Main.jsx',
			applicationStyles: 'app/styles/app.scss',
			Court : 'app/components/court.jsx',
			Score : 'app/components/Score.jsx',
			RecordPlay: 'app/components/recordplay.jsx',
			OnCourt: 'app/components/oncourt.jsx',
			ScoreTime: 'app/components/scoretime.jsx',
			EndGame: 'app/components/endgame.jsx'
		},
		extensions: ['','.js','.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react','es2015']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'
};