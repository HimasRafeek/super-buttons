//process.env.DISABLE_NOTIFIER = true;
var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var notify       = require('gulp-notify');

var sassLoc = 'scss/style.scss';
var sassDist = "./css/";
var serve = "./";
var watch = 'scss/**/*.scss';

gulp.task('sass', function() {
       sass(sassLoc)
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
                browsers: "> 0%",
                cascade: false
        }))
        .on('error', sass.logError)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(sassDist))
        .pipe(browserSync.stream())
        .pipe(notify({
                title: "Sass Compiled",
                message: "Compiled",
                sound: false,
                onLast: true
        }));
        
});




gulp.task('browser-sync', function () {
        browserSync.init({
                server: serve
        });
});






gulp.task('default', ["sass", "browser-sync"]);





gulp.watch("./*.html").on('change', browserSync.reload);

gulp.task('watch', ["default"], function () {
        gulp.watch(watch,["sass"]);
});