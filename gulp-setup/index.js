'use strict';

var fs = require('fs');
var tasks = fs.readdirSync('./gulp-setup/tasks');

tasks.forEach(function(task) {
  require('./tasks/' + task);
});
