var gulp = require('gulp'),
      jshint = require('gulp-jshint'),
      stylish = require('jshint-stylish');

gulp.task('hint', function () {
  return gulp.src(['server.js', 'server/**/*.js', 'gulpfile.js'])
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

gulp.task('watch', ['hint'], function(){
  gulp.watch(['server.js', 'server/**/*.js', 'gulpfile.js'], ['hint']);
});
