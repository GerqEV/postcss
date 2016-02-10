PostCSS (https://github.com/postcss/postcss)
==============

PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.


**The Advantages**

- Modularity
You need only add the plugins and functions you require for your project.
- Lightweight
Preprocessors are increasingly large and sophisticated applications. You probably won’t want or use every feature but they’re still present. PostCSS reduces the bulk.
- Immediate implementation
Have you ever waited for something to become available in Sass, LibSass, LESS, Stylus or another preprocessor? You can now develop your own features using…
- JavaScript functions
Your CSS preprocessor uses JavaScript — a true programming language (despite what some people say!)
- many (200+) plugins http://postcss.parts
 
**The Disadvantages**

- Increased complexity
Your build process will become more difficult to manage.
- A different syntax
PostCSS requires valid CSS
Most preprocessors parse plain text files so any syntax is theoretically possible. PostCSS creates an object model so it requires syntactically-correct CSS from the start.


- Install (npm, gulp required):
	- $ npm install gulp-postcss postcss-mixins postcss-simple-vars postcss-nested autoprefixer-core --save-dev

- install plugins:
	- $ npm install css-mqpacker
	- $ npm install cssnano


- create gulpfile.js
- create postcss:
- compile (gulp, cli, broccoli, fly, meteor...):
	- $ gulp css

- Result: 
	- css
	- minified (nano)

