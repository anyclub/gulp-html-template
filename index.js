var through = require('through2');
var fs = require('fs');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

// 常量
const PLUGIN_NAME = 'gulp-html-header';

function replaceHtml(file, opt, done) {
	var context = String(file.contents);
	var src = file.base;
	var result;

	var dataReplace = context.replace(/<link\srel="template"\shref="(.*)">/gi, function(matchs, m1) {
		return fs.readFileSync(src + '/' + m1, {
			encoding: 'utf8'
		});
	});

	return dataReplace;
}

function gulpHtmlTemplate(options) {
	// 创建一个 stream 通道，以让每个文件通过
	var stream = through.obj(function(file, enc, cb) {
		if (file.isStream()) {
			this.emit('error', new PluginError(PLUGIN_NAME, '暂时不支持Streams!'));
			return cb();
		}

		if (file.isStream()) {
			// stream
			return;
		}

		if (file.isBuffer()) {
			file.contents = new Buffer(replaceHtml(file, options, cb));
		}
		this.push(file);
		cb();
	});

	// 返回文件 stream
	return stream;
};

// 导出插件主函数
module.exports = gulpHtmlTemplate;