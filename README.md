# gulp-html-header

## 替换静态html下的头部文件

***


## html

### _header.html

``` html
	<header></header>

```

### template.html

``` html
<link rel="template" href="_header.html">
<div class="main"></div>
```

## gulpfile.js

``` js
var gulp = require('gulp');
var template = require('gulp-html-header');

gulp.task('template', function() {
	gulp.src('template.html')
		.pipe(template())
		.pipe(gulp.dest('html'))
})
```

***

## html/template.html

``` html
<header></header>
<div class="main"></div>
```