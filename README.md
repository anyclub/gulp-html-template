# gulp-html-header

## 替换静态html下的头部文件

***


## html

```
<link rel="template" href="_header.html">

<!-- main -->

<link rel="template" href="_footer.html">
```

***
## gulpfile.js

``` js
var gulp = require('gulp');
var template = require('gulp-html-header');

gulp.task('template', function() {
	gulp.src('template/*.html')
		.pipe(template())
		.pipe(gulp.dest('html'))
})
```