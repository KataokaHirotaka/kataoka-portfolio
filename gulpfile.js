// sassコンパイル
var gulp = require("gulp");
var sass = require("gulp-sass");
var watch = require("gulp-watch");

gulp.task("default", function () {
    gulp.src("css/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css/style.css"));

gulp.task("watch", function () {
  gulp.watch('css.*.scss', ['sass']);
});

});



gulp.task('default', ['sass-watch']);

// gulpコネクト
var gulp = require('gulp');
var connect = require('gulp-connect');
 
gulp.task('default', function() {
  // place code for your default task here
});
 
gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
});
 
gulp.task('default', ['connect', 'watch']);


// ブラウザシンク
var gulp = require("gulp");
var browserSync = require('browser-sync').create();

// ブラウザの自動リロード
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html'
    },
    port: 3000
  });
});
gulp.task('browser-reload', function () {
  browserSync.reload();
});

//
//監視ファイル
//
gulp.task('default', ['browser-sync'], function () {
    gulp.watch("./*.html",            ['bs-reload']);
    gulp.watch("./css/*.css", ['bs-reload']);
    gulp.watch("./js/*.js",   ['bs-reload']);
});


