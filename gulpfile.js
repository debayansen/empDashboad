var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    // concat = require('gulp-concat'),
    // jshint = require('gulp-jshint'),
    watch = require('gulp-watch');

// gulp.task('concat', function() {
//     gulp.src('bower_components/**/*.js')
//         .pipe(concat('lib.js'))
//         .pipe(gulp.dest('js/lib/'));
// });

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
gulp.task('templates', function(){
    gulp.src('templates/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('pages/'));
})

gulp.task('watch', function(){
    // gulp.watch('bower_components/**/*.js',['concat']);
    gulp.watch('js/**/*.js',['scripts']);
    gulp.watch('css/**/*.scss',['styles']);
    gulp.watch('templates/**/*.jade',['templates']);

});

// gulp.task('default', ['concat', 'scripts','styles', 'templates', 'watch']);
gulp.task('default', ['scripts','styles', 'templates', 'watch']);
