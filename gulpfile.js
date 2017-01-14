const gulp = require('gulp'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass');

gulp.task('css', function () {
  return gulp.src(['scss/**/*.scss', 'js/**/*.scss', 'scss/**/*.css', 'js/**/*.css'] )
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('css:watch', function () {
  gulp.watch(['scss/**/*.scss', 'js/**/*.scss', 'scss/**/*.css', 'js/**/*.css'], ['css']);
});

gulp.task('default', ['css', 'css:watch']);
