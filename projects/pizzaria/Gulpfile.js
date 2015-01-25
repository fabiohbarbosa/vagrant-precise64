var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var sass = require('gulp-ruby-sass');
var jade = require('jade');

gulp.task('sass', function () {
    return gulp.src('./public/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload());
});

gulp.task('jade', function () {
    return gulp.src('./app/views/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./app/views/'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    gulp.watch('./app/views/*.jade', ['jade']);
});

gulp.task('develop', function () {
    livereload.listen();
    nodemon({
        script: 'app.js',
        ext: 'js jade'
    }).on('restart', function () {
        setTimeout(function () {
            livereload.changed();
        }, 500);
    });
});

gulp.task('default', [
    'sass',
    'develop',
    'watch'
]);