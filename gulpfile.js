var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    // jshint = require('gulp-jshint'),
    watch = require('gulp-watch');

gulp.task('scripts', function(){
    gulp.src('js/**/*.js')
        .pipe(uglify())
        // .pipe(jshint())
        // .pipe(jshint.reporter('YOUR_REPORTER_HERE'))
        .pipe(gulp.dest('js/'));
});
gulp.task('styles', function(){
    gulp.src('css/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function(){
    gulp.watch('js/**/*.js',['scripts']);
    gulp.watch('css/**/*.scss',['styles']);
});

gulp.task('default', ['scripts','styles','watch']);
