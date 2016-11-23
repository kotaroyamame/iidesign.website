var gulp = require('gulp');
var watch = require('gulp-watch');
var typescript = require('gulp-typescript');
var uglify = require("gulp-uglify");
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var minifycss = require('gulp-minify-css');
var spritesmith = require('gulp.spritesmith');
var browserSync = require('browser-sync');

// var tsProject = ts.createProject('tsconfig.json');
// gulp
// .task('ts', () => {
//   var tsResult = tsProject.src()
//     .pipe(tsProject());

//   return tsResult.js
//     .pipe(uglify({compress:false,mangle:false,beautify:false}))
//     .pipe(gulp.dest('dev/js'));
        
// })
// .task('webserver', () => {
//   return browserSync({
//         server: {
//             baseDir: "./dest/"
//         }
//     });
// })
.task("copy", () => {
  return gulp.src(
    [ 
      'css/**/*',
      '**/*.html',
      'img/**/*',
      'app/**/*',
      '!img/sprite/**'
    ],
    { base: 'dev/' }
  ).pipe( gulp.dest( 'dest' ) );
})
.task('s', ['webserver'])
.task('default',
    [
        'copy'
    ]
);