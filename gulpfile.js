'use strict';

//Gulp files.
require('./gulp/development');
require('./gulp/production');
require('./gulp/script');
require('./gulp/server');
require('./gulp/style');
require('./gulp/vendor');
require('./gulp/documentation');
require('./gulp/jshint');

// var browserSync = require('browser-sync');

// gulp.task('watch', function () {
// 	gulp.watch('bower.json', ['install']);
//     gulp.watch(['gulpfile.js', 'pom.xml'], ['ngconstant:dev']);
//     gulp.watch('./app/**/*.less', ['styles:dev']);
//     gulp.watch('./content/images/**', ['images']);
//     gulp.watch('./app/**/*.js', ['scripts:dev']);
//     gulp.watch(['./*.html','./app/**']).on('change', browserSync.reload);
// });