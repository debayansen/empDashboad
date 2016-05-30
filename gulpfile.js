'use strict';

var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    sass    = require('gulp-sass'),
    jade    = require('gulp-jade'),
    watch   = require('gulp-watch');

// gulp.task('concat', function() {
//     gulp.src('bower_components/**/*.min.js')
//         .pipe(concat('lib.js'))
//         .pipe(gulp.dest('js/lib/'));
// });

gulp.task('scripts', function(){
    // gulp.src('js/**/*.js')
    //     .pipe(uglify())
    //     .pipe(gulp.dest('js/'));
});

gulp.task('styles', function(){
    gulp.src('css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});

gulp.task('templates', function(){
    gulp.src('templates/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('pages/'));
});

gulp.task('watch', function(){
    gulp.watch('templates/**/*.jade',['templates']);
    gulp.watch('css/**/*.scss',['styles']);
    gulp.watch('js/**/*.js',['scripts']);

});

gulp.task('default', ['styles','scripts','templates','watch']);
