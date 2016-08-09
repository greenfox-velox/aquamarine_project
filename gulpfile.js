var gulp = require('gulp');
var sass = require('gulp-sass');
var mocha = require('gulp-mocha');
var KarmaServer = require('karma').Server;
var browserSync = require('browser-sync').create();

// supertest runs with tape
gulp.task('supertest', function() {
  gulp.src('spec/backendtest.js')
  .pipe(mocha());
});

gulp.task('karma', function(done) {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('style', function() {
  gulp.src('client/**/*scss', {base: 'client/assets/css'})
    .pipe(sass())
    .pipe(gulp.dest('client/assets/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', function() {
  browserSync.init({
    proxy: 'http://localhost:3000',
    port: 7000
  });
  gulp.watch('backend/*.js', ['supertest']);
  gulp.watch('client/*.js', ['karma']);
  gulp.watch('client/**/*scss', ['style']);
});

gulp.task('default', ['karma', 'supertest', 'browserSync']);
