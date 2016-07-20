let path = require("path");
let _ = require("lodash");

let webpack = require("webpack");
let precss = require("precss");
let autoprefixer = require("autoprefixer");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
let UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin.js");

const ENV = process.env || {};
const DEV = (ENV.NODE_ENV !== 'production');

const ROOT = __dirname;
const SRC = path.join(ROOT, "src");
const DIST = path.join(ROOT, "dist");
const PAGES = path.join(SRC, "pages");
const COMMON_JS_CHUNK_NAME = "common";
const COMMON_CSS_CHUNK_NAME = "css";

let config = {
	entry: {
		[COMMON_JS_CHUNK_NAME]: path.join(SRC, "common.js")
	},
	output: {
		path: path.join(ROOT, 'dist'),
		filename: "[name].bundle.js",
		chunkFilename: "[id].bundle.js"
	},
	// resolve: {
	// 	alias: {
	// 		"bootstrap": path.join(SRC,"bootstrap-styl/bootstrap/")
	// 	}
	// },
	module: {
		loaders: [
			{test: /\.html$/, loader: "html"},
			{test: /\.js$/, exclude: /node_modules/, loader: "babel"},
			{test: /\.css$/, loader: ExtractTextPlugin.extract('style','!css!postcss')},
			{test: /\.styl$/, loader: ExtractTextPlugin.extract('style','!css!postcss!stylus?paths=node_modules/bootstrap-styl/')},
			{ test: /\.(png|jpg|eot|otf|ttf|svg|woff|woff2)$/, loader: 'url-loader?limit=10000000' }
		]
	},
	postcss: function () {
		return [precss, autoprefixer];
	},
	plugins: [
		new ExtractTextPlugin("[name].style.css"),
		new CommonsChunkPlugin(COMMON_JS_CHUNK_NAME,`${COMMON_JS_CHUNK_NAME}.bundle.js`)
	]
};
console.warn('dev',DEV)
if (!DEV) {
	config.plugins.push( new UglifyJsPlugin() )
}


const pages = {
	"consumer-lookup": {
		title: 'Consumer',
		template: path.join(PAGES, 'consumer-lookup.ejs'),
		js: path.join(PAGES, 'consumer-lookup.js'),
		css: path.join(PAGES, 'consumer-lookup.css'),
		filename: "consumer-lookup.html",
		entries: [
			COMMON_JS_CHUNK_NAME
		],
		inject: 'body'
	}
	, "search": {
		title: 'Search',
		template: path.join(PAGES, 'search.ejs'),
		js: path.join(PAGES, 'search.js'),
		css: path.join(PAGES, 'search.css'),
		filename: "search.html",
		entries: [
			COMMON_JS_CHUNK_NAME
		],
		inject: 'body'
	}
};

_.chain(pages)
	.each((page = {}, pageName = "")=> {
		if (page.js) config.entry[pageName] = page.js;
		if (page.template) {
			let entries = _.concat(page.entries||[], [pageName]);
			let params = _.chain(page)
				.omit(['js', 'css'])
				.extend({
					entries: entries,
					chunks: entries,
					chunksSortMode: 'none',
				})
				.value();
			console.warn("params");
			console.warn(params);
			config.plugins.push(
				new HtmlWebpackPlugin(params)
			);
		}
	})
	.value();


module.exports = config;