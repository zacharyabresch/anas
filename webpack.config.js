const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

module.exports = {
	output: {
		filename: "[name].bundle.js",
		chunkFilename: "[name].[chunkhash].js",
		path: path.resolve(__dirname, "dist")
	},
	target: "node",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",

				options: {
					presets: ["env"]
				}
			}
		]
	},

	plugins: [
		new UglifyJSPlugin(),
		new webpack.BannerPlugin({
			banner: "#!/usr/bin/env node",
			raw: true
		}),
		new CopyWebpackPlugin(["support/.anasrc.js"])
	],
	mode: "development",

	optimization: {
		splitChunks: {
			chunks: "async",
			minSize: 30000,
			minChunks: 1,
			name: true,

			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				}
			}
		}
	}
};
