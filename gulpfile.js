var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint',function(){
  return gulp.src(['./*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
  ;
});

gulp.task('watch',function(){
  gulp.watch('./*.js',function(){
    gulp.run('lint');
  })
});

gulp.task('default',['lint'],function(){
  gulp.run('watch');
});
