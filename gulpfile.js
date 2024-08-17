'use strict';
const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

gulp.task('less', function () {
    return gulp.src('./src/less/styles.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(cssmin()) // минификация после конвертации
        .pipe(rename({suffix: '.min'})) // маркирование
        .pipe(gulp.dest('./dist/styles'));
});
exports.watch = function () {
    gulp.watch('./src/less/*.less', gulp.series('less'));
};



