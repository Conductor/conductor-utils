'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var wrap = require('gulp-wrap');

gulp.task('amd', function () {
  return gulp.src('./index.js')
    .pipe(rename('conductor-utils.amd.js'))
    .pipe(wrap("define('conductor-utils', ['underscore'], function () { var module = {}; <%= contents %>; return module.exports; });"))
    .pipe(gulp.dest('dist'))
});