var gulp = require('gulp'),
    sequence = require('gulp-sequence'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

var sassOptionsProd = {
    errLogToConsole: true,
    //outputStyle: 'compressed'
};

// Task: Compile styles.sass and save it as styles.css
gulp.task('sass', function () {
    return gulp.src(['scss/**/*.scss'])
        .pipe(sass(sassOptionsProd).on('error', sass.logError))
        .pipe(concat('main-styles.css'))
        .pipe(gulp.dest('./css'))
});


gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('./css');
});

// Task: Default (run everything once, in sequence, and start server)
gulp.task('default', ['sass','sass:watch'], function () {
    sequence('gulp');
});