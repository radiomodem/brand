"use strict";

var gulp = require("gulp")
  , $ = require("gulp-load-plugins")()
  , del = require("del")

gulp.task("img", function () {
  return gulp.src("img/*.sketch")
    .pipe($.sketch({
      export: "slices"
    , formats: [
        "png"
      , "svg"
      ]
    , scales: [
        "1.0"
      , "2.0"
      ]
    }))
    .pipe($.ignore.exclude(/@2x.svg$/))
    .pipe($.cache($.imagemin({
      svgoPlugins: [
        { removeTitle: true }
      , { removeDesc: true }
      ]
    })))
    .pipe(gulp.dest("dist"))
    .pipe($.size({
      showFiles: true
    }))
})

gulp.task("watch", function () {
  gulp.watch("img/*.sketch", ["img"])
})
