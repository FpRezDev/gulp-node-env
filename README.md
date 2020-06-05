# gulp-node-env

Get, Set or evaluate `process.env.NODE_ENV`

Install
========

```
npm i -D gulp-node-env
```

Usage
======

### Example

```js
// gulpfile.js
const { src, dest, series } = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const cssmin = require("gulp-cssmin");
const { 
  setDevelopmentEnvironment, 
  setProductionEnvironment, 
  setTestEnvironment,
  isTest,
  isProduction,
  isDevelopment 
} = require('gulp-node-env');

const build = (cb) => {
  if(isTest()) {
    return cb();
  }
  return src('scss/styles.scss')
          // only make sourcemaps if development
          .pipe(gulpIf(isDevelopment(), sourcemaps.init()))
          .pipe(sass().on('error', sass.logError))
          // only write sourcemaps if development
          .pipe(gulpIf(isDevelopment(), sourcemaps.write('./')))
          // only minify for production
          .pipe(gulpIf(isProduction(), cssmin()))
          .pipe(dest('wwwroot/css/'));
}

exports.build = series(setProductionEnvironment, build);
exports.devBuild = series(setDevelopmentEnvironment, build);
exports.testBuild = series(setTestEnvironment, build);
```