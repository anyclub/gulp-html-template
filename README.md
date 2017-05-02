# gulp-html-header

***

``` js
var gulp = require('gulp');
var template = require('htmlTemplate.js');

gulp.task('template', function() {
	gulp.src(['template/*.html', '!template/_header.html', '!template/_footer.html'])
		.pipe(template())
		.pipe(gulp.dest('html'))
})
```