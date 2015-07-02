/**
 * Created by tongda on 15/6/30.
 */
'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var constants = require('../common/constants')();

gulp.task('sass', function(done) {
    gulp.src(constants.style.sass.src)
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest(constants.style.dest))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(constants.style.dest))
        .on('end', done);
});

gulp.task('style:watch', 'Watch changes for style files.', function() {
    gulp.watch(constants.style.sass.src, ['sass']);
});