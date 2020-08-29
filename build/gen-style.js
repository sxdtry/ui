const gulp = require("gulp");
const cleanCss = require("gulp-clean-css");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const components = require("./component.json")

function buildCss(cb){
    gulp.src("../styles/index.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(rename("index.css"))
        .pipe(gulp.dest("../lib/styles"));
    cb()
}

function buildSeperateCss(cb){
    Object.keys(components).forEach(compName=>{
        gulp.src(`../styles/${compName}.scss`)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(rename(`${compName}.css`))
        .pipe(gulp.dest("../lib/styles"));
    cb()
    })
}

exports.default = gulp.series(buildCss,buildSeperateCss)