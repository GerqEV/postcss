Install (npm, gulp required):
$ npm install gulp-postcss postcss-mixins postcss-simple-vars postcss-nested autoprefixer-core --save-dev

install plugins:
$ npm install css-mqpacker
$ npm install cssnano


Create gulpfile.js

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


postcss:

$colorFore: #333;
$colorBack: #fff;
$colorHighlight: #f00;

@define-mixin reset {
	padding: 0;
	margin: 0;
}

@define-mixin transition $property: all, $time: 150ms, $easing: ease-out {
  transition: $(property) $(time) $(easing);
}

#main {
	font-family: Arial;
	@mixin reset;
	color: $colorFore;
	background-color: $colorBack;
	
	article {
		color: $colorBack;
		background-color: $colorFore;
	}
}

.example-autoprefix {
	display: flex;
    transition: all .5s;
    user-select: none;
    background: linear-gradient(to bottom, white, black);
}

.example-mixin-parameter {
	transition: color 2s ease-in;
}

a {
  color: $colorFore;

  &:hover {
    color: $colorHighlight;
  }

  &:focus {
  	background: $colorHighlight;
  }
}

.bar {
  width: 100%;

  @media (min-width: 960px) {
    width: 50%;
  }
}


compile (gulp, cli, broccoli, fly, meteor...):

$ gulp css


result:

#main {
	font-family: Arial, sans-serif;
	padding: 0;
	margin: 0;
	color: #333;
	background-color: #fff;
}

#main article {
	color: #fff;
	background-color: #333;
}

.example-autoprefix {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
    -webkit-transition: all .5s;
    transition: all .5s;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    background: -webkit-linear-gradient(top, white, black);
    background: linear-gradient(to bottom, white, black);
}

.example-mixin-parameter {
	-webkit-transition: color 2s ease-in;
	transition: color 2s ease-in;
}

a {
  color: #333;
}

a:hover {
	color: #f00;
}

a:focus {
	background: #f00;
}

.bar {
  width: 100%;
}

@media (min-width: 960px) {

	.bar {
		width: 50%;
	}
}


plugins (200+): 
https://github.com/postcss/postcss

