'use strict';

var gulp    = require('gulp'),
    order   = require('gulp-order'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    sass    = require('gulp-sass'),
    jade    = require('gulp-jade'),
    rename  = require('gulp-rename'),
    watch   = require('gulp-watch');

//For scripts
gulp.task('minscripts', function(){
    gulp.src('js/lib/*.min.js')
        .pipe(order([
            "angular.min.js",
            "angular-animate.min.js",
            "angular-aria.min.js",
            "angular-messages.min.js",
            "angular-material.min.js",
            "angular-route.min.js"
        ]))
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('js/'));
});

gulp.task('scripts', function(){
    gulp.src('js/main/main.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('js/'));
});

//For Styles
gulp.task('styles', function(){
    gulp.src('css/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});

//For Templates
gulp.task('templates', function(){
    gulp.src('templates/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('pages/'));
});

//For Watch Task
gulp.task('watch', function(){
    gulp.watch('templates/**/*.jade',['templates']);
    gulp.watch('css/**/*.scss',['styles']);
    gulp.watch('js/**/*.js',['scripts']);

});

//For Default Task
gulp.task('default', ['minscripts','styles','scripts','templates','watch']);
