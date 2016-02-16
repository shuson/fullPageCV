var gulp = require('gulp');
var ect = require('ect');

gulp.task('ect', function(){
  gulp.src('./src/*.ect')
      .pipe(ect())
      .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['ect'], function() {
  // place code for your default task here
});
