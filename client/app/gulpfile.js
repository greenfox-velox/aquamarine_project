var gulp = require('gulp'),
sass = require('gulp-sass'),
sourceMaps = require('gulp-sourcemaps'),
uglify = require('gulp-uglify');

// gulp.task('test', function (){
//   gulp.src('spec/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('minjs'))
// });

gulp.task('factorytest', function () {

})

gulp.task('server', function (cb) {
  exec('node lib/app.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });

gulp.task('style', function () {
  gulp.src('client/**/*scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
  gulp.watch('aquamarine-project/**/*.js', ['test']);
  gulp.watch('client/**/*scss', ['style']);
});

gulp.task('default', ['test', 'style', 'watch']);


// git rm style.css --cache(d)
//gulp karma
//aron browser
