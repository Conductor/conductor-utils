'use strict';

var gulp = require('gulp');

gulp.task('dist', ['lint', 'test', 'bower-json', 'browserify', 'amd']);