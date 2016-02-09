var
	gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	processors = [
		require('postcss-mixins'),
		require('postcss-simple-vars'),
		require('postcss-nested'),
		require('css-mqpacker'),
		function(css) {
			// sans-serif fallback
			css.eachDecl('font-family', function(decl) {
				decl.value = decl.value + ', sans-serif';
			});
		},
		require('autoprefixer-core')({ browsers: ['last 2 versions', '> 2%'] })
	];
	nano = require('gulp-cssnano');

// compile CSS
gulp.task('css', function() {
  return gulp.src('source/css/styles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dest/styles/'))
    .pipe(nano())
    .pipe(gulp.dest('dest/styles/min'));
});