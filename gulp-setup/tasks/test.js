'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', ['lint'], function () {
  return gulp.src(['./spec/spec-setup.js', './spec/**/*.spec.js'], { read: false })
    .pipe(mocha({ reporter: 'spec' }));
});