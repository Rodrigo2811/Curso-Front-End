const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin')




function tarefasCSS(cb){

    return gulp.src('./assets/css/style.css', 
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
     './node_modules/font-awesome/css/font-awesome.min.css',
         './vendor/owl/css/owl.css')

        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
        

}

function tarefaJS(){

    return gulp.src('./node_modules/jquery/dist/jquery.min.js',
     './node_modules/bootstrap/dist/js/bootstrap.js',
     './vendor/owl/js/owl.js'
     )
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/JS'))

}

function tarefaImagem(){

    return gulp.src('./assets/images/*')
    .pipe(image({
    pngquant: true,
    optipng: false,
    zopflipng: true,
    jpegRecompress: false,
    mozjpeg: true,
    gifsicle: true,
    svgo: true,
    concurrent: 10,
    quiet: true
        
    }))

    .pipe(gulp.dest('./dist/image'))
}

exports.styles = tarefasCSS
exports.scripts = tarefaJS
exports.image = tarefaImagem


