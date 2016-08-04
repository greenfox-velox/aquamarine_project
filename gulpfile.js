var gulp = require('gulp'),
sass = require('gulp-sass'),
// sourceMaps = require('gulp-sourcemaps'),
uglify = require('gulp-uglify'),
mocha = require('gulp-mocha');
var exec = require('child_process').exec;
var KarmaServer = require('karma').Server;

// gulp.task('test', function (){
//   gulp.src('spec/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('minjs'))
// });
//
gulp.task('supertest', function () {
  gulp.src('spec/backendtest.js')
  .pipe(mocha())
})

// gulp.task('karma', function (cb) {
//   exec('karma start', function (err, stdout, stderr) {
//     console.log(stdout);
//     console.log(stderr);
//     cb(err);
//   });
// });

gulp.task('karma', function (done) {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
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

gulp.task('default', ['test', 'style', 'server', 'watch']);


// git rm style.css --cached
//gulp karma
//aron browser
