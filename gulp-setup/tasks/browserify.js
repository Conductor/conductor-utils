'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var rename = require('gulp-rename');
var vinyl = require('vinyl-source-stream')

gulp.task('browserify', function () {
  var bundleStream = browserify('./index.js', {
      standalone: {
        name: 'conductor-utils',
        amd: { deps: ['underscore'] }
      }
    })
    .exclude('underscore')
    .bundle();

  return bundleStream.pipe(vinyl('./index.js'))
    .pipe(rename('conductor-utils.js'))
    .pipe(gulp.dest('dist'));
});
