import gulp from 'gulp'
import connect from 'gulp-connect'

gulp.task('connect', function() {
    connect.server({
        livereload: true
    })
})

gulp.task('slides', function() {
    gulp.src('index.html')
        .pipe(connect.reload());
})

gulp.task('watch', function() {
    gulp.watch(['index.html', 'js/index.js', 'css/application.css'], ['slides']);
})

gulp.task('default', ['connect', 'watch']);
