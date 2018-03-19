const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry : {
		main: 
		path.resolve(__dirname, "assets", "html.template.html")
	},
	output : {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
			new HtmlWebpackPlugin({ template: "./assets/html.template.html" }),
			new UglifyJsPlugin(),
		    new ExtractTextPlugin("styles.css"),
		    new SWPrecacheWebpackPlugin({
			    cacheId: "prjdream-" + Math.random(),
			    filename: "service-worker.js",
			    statisFileGlobs: [ "dist/*.{js,html,css}", "assets/img/**.*" ],
			    stripPrefix: "dist/"
		   })
			]
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: "css-loader",
					}
				]

			},
			{
				test:/\.scss$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "sass-loader" }
				]
			}
		]}