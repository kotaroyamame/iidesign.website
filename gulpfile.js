var gulp = require('gulp');
var watch = require('gulp-watch');
var typescript = require('gulp-typescript');
var uglify = require("gulp-uglify");
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var minifycss = require('gulp-minify-css');
var spritesmith = require('gulp.spritesmith');
var browserSync = require('browser-sync');

gulp
.task('ts', () => {
    return gulp.src(['dev/ts/main.ts'])
        .pipe(typescript({
            target: 'ES3',
            removeComments: true,
            out: 'iidesignwebApp.js'
        }))
        .pipe(uglify({compress:false,mangle:false,beautify:false}))
        .pipe(gulp.dest('dev/js'));
})
.task('webserver', () => {
  return browserSync({
        server: {
            baseDir: "./dest/"
        }
    });
})
.task("copy", () => {
  return gulp.src(
    [ 
      'dev/css/**',
      'dev/librariesimg/**/*.js',
      'dev/**/*.html',
      'dev/img/**',
      '!dev/img/sprite/**'
    ],
    { base: 'dev/' }
  ).pipe( gulp.dest( 'dest' ) );
})
.task('s2', ['webserver'])
.task('default',
    [
        'ts',
        'webserver'
    ]
);