const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin')
const htmlmin = require('gulp-htmlmin')
const { parallel } = require('gulp')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload




function tarefasCSS(callback){

     gulp.src('./assets/css/style.css', 
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
     './node_modules/font-awesome/css/font-awesome.min.css',
         './vendor/owl/css/owl.css')
        
        .pipe(concat('libs.css'))       //mescla arquivos
        .pipe(cssmin())                 //minifica o css
        .pipe(rename({suffix: '.min'})) //nomeia o arquivo 
        .pipe(gulp.dest('./dist/css'))  //cria arquivo em novo diretorio
        
        return callback()
}

function tarefaJS(callback){

     gulp.src('./node_modules/jquery/dist/jquery.min.js',
     './node_modules/bootstrap/dist/js/bootstrap.js',
     './vendor/owl/js/owl.js'
     )
     .pipe(babel({
        comments:false,
        presets: ['@babel/env']
     }))
    .pipe(concat('libs.js'))  //mescla os arquivos
    .pipe(uglify())           //unifica o JavaScript  
    .pipe(rename({suffix: '.min'})) //nomeia o arquivo
    .pipe(gulp.dest('./dist/JS'))   //Cria arquivo em novo diretorio


    return callback()
}

function tarefaImagem(){

    return gulp.src('./assets/images/*')
    .pipe(image({                       //mescla imagens
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

    .pipe(gulp.dest('./dist/image')) //cria arquivos em novo diretorio
}

function tarefasHTML(callback){
    gulp.src('./assets/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'))

    return callback()

}

gulp.task('serve', function(){
    
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./dist/**/*').on('change', reload)
})

exports.styles = tarefasCSS
exports.scripts = tarefaJS
exports.image = tarefaImagem

exports.default = parallel (tarefasHTML, tarefasCSS, tarefaJS )



