var gulp = require('gulp');
const chalk = require('chalk');
var panini = require('panini');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "dist"
    });
});

gulp.task('sass', function () {
  return gulp.src('./src/assets/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('panini', function() {
  gulp.src('src/pages/**/*.html')
    .pipe(panini({
      root: 'src/pages/',
      layouts: 'src/layouts/',
      partials: 'src/partials/',
      helpers: 'src/helpers/',
      data: 'src/data/'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/{pages,layouts,partials,helpers,data}/**/*'], ['panini', panini.refresh]);
  gulp.watch("./src/assets/scss/**/*.scss", ['sass']);
  gulp.watch("dist/**/*").on('change', browserSync.reload);
})

gulp.task('default', function(cb) {
  runSequence(['panini', 'sass'], 'serve', 'watch', cb);
});
