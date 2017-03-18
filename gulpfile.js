var gulp = require('gulp');
const chalk = require('chalk');
var panini = require('panini');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var bundle = require('gulp-bundle-assets');

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "dist"
    });
});

gulp.task('bundle', function() {
  return gulp.src('./bundle.config.js')
    .pipe(bundle())
    .pipe(bundle.results({
        fileName: 'manifest',
        dest: './src/data'
      }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
  return gulp.src('./src/assets/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
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

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('clean:data', function() {
  return del.sync('src/data/manifest.json');
})

gulp.task('clean:js', function() {
  return del.sync('dist/*.js');
})

gulp.task('watch', function() {
  gulp.watch(['./src/{pages,layouts,partials,helpers,data}/**/*'], ['panini', panini.refresh]);
  gulp.watch("./src/assets/scss/**/*.scss", ['sass']);
  gulp.watch("dist/**/*.html").on('change', browserSync.reload);
  gulp.watch('./src/assets/js/**/*.js', function() {runSequence('clean:js','bundle')});
});

gulp.task('default', function(cb) {
  runSequence(['clean:dist', 'clean:data'], 'bundle', ['panini', 'sass'], 'serve', 'watch', cb);
});
