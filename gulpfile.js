var gulp = require('gulp');
var sass = require('gulp-sass');
var mocha = require('gulp-mocha');
var KarmaServer = require('karma').Server;
var browserSync = require('browser-sync').create();
  // uglify = require('gulp-uglify'),
// var exec = require('child_process').exec;
// sourceMaps = require('gulp-sourcemaps'),

// gulp.task('test', function (){
//   gulp.src('spec/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('minjs'))
// });
//
gulp.task('supertest', function() {
  gulp.src('spec/backendtest.js')
  .pipe(mocha());
});

// gulp.task('karma', function (cb) {
//   exec('karma start', function (err, stdout, stderr) {
//     console.log(stdout);
//     console.log(stderr);
//     cb(err);
//   });
// });

gulp.task('karma', function(done) {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});


gulp.task('style', function() {
  gulp.src('client/**/*scss', {base: 'client/assets/css'})
    .pipe(sass())
    .pipe(gulp.dest('client/assets/css/'));
});

gulp.task('sass-watch', ['style'], browserSync.reload);

gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: 'client/'
    }
  });

  gulp.watch('backend/*.js', ['supertest']);
  gulp.watch('client/*.js', ['karma']);
  gulp.watch('client/**/*scss', ['sass-watch']);
});

// gulp.task('browserSync', function() {
//  browserSync.init({
//    proxy: 'http://localhost:3000',
//    port: 7000
//  });
// });

// gulp.task('default', ['supertest', 'karma', 'style', 'watch']);
gulp.task('default', ['watch']);
