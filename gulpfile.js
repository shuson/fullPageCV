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
    console.log("type 'npm run serve' to deploy it to http-server\n");
});
