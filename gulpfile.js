var gulp = require('gulp');
var ect = require('gulp-ect');

var cv = require('./src/example.json')

gulp.task('ect', function(){
  gulp.src('./src/CV.ect')
      .pipe(ect({data: cv}))
      .pipe(gulp.dest('./dist'));
});

gulp.task('static', function(){
    gulp.src(['./src/style.css', './src/script.js'])
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['ect', 'static'], function() {
  // place code for your default task here
});
