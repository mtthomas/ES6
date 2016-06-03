const gulp = require("gulp")
const connect = require("gulp-connect")
const fs = require("fs")
const browserify = require("browserify")

gulp.task("connect", function() {
    connect.server({
        livereload: true
    })
})

gulp.task("jsx", function() {
    return browserify({
            entries: "jsx/index.jsx"
        })
        .transform("babelify")
        .bundle()
        .pipe(fs.createWriteStream("js/index.js"))
})

gulp.task("reload-js", ["jsx"], function() {
    gulp.src("index.html")
        .pipe(connect.reload())
})

gulp.task("reload", function() {
    gulp.src("index.html")
        .pipe(connect.reload())
})

gulp.task("watch", ["jsx"], function() {
    gulp.watch("jsx/**/*.jsx", ["reload-js"])
    gulp.watch(["index.html", "css/application.css"], ["reload"]);
})

gulp.task("default", ["connect", "watch"]);
