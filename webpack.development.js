const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode    : "development",
	entry   : path.resolve(__dirname, "src", "index.js"),
	output  : {
		path     : path.resolve(__dirname, "dist"),
		filename : "bundle.js"
	},
	module  : {
		rules : [
			{
				// for any file with a suffix of js or jsx
				test    : /\.jsx?$/,
				// ignore transpiling JavaScript from node_modules as it should be that state
				exclude : /node_modules/,
				// use the babel-loader for transpiling JavaScript to a suitable format
				loader  : "babel-loader",
				options : {
					// attach the presets to the loader (most projects use .babelrc file instead)
					presets : [
						"@babel/preset-env",
						"@babel/preset-react"
					]
				}
			},
			{
				test : /\.css$/,
				use  : [
					"style-loader",
					"css-loader"
				]
			},
			{
				test : /\.s[ac]ss$/i,
				use  : [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader"
				]
			}
		]
	},
	// add a custom index.html as the template
	plugins : [
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html") })
	]
};
