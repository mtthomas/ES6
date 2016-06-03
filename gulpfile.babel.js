import gulp from "gulp"
import connect from "gulp-connect"
import fs from "fs"
import browserify from "browserify"

gulp.task("connect", function() {
    connect.server({
        livereload: true
    })
})

gulp.task("jsx", function() {
    browserify("jsx/**/*.jsx")
        .transform("babelify", {
            presets: ["es2015", "react"]
        })
        .bundle()
        .pipe(fs.createWriteStream("bundle.js"))
        .pipe(connect.reload())
})

gulp.task("reload", function(){
  gulp.src("index.html")
    .pipe(connect.reload());
})

gulp.task("watch", function() {
    gulp.watch("jsx/**/*.jsx", ["jsx"])
    gulp.watch(["index.html", "css/application.css", "js/index.js"], ["reload"]);
})

gulp.task("default", ["connect", "watch"]);
