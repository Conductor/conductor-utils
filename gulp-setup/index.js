'use strict';

var fs = require('fs');
var tasks = fs.readdirSync('./gulp-setup/tasks');
var gulp = require('gulp');
var conBuild = require('gulp-conductor-common');

gulp.task('bower-json', conBuild('bower-json'));
gulp.task('lint', conBuild('lint'));
gulp.task('test', conBuild('test'));

tasks.forEach(function(task) {
  require('./tasks/' + task);
});
