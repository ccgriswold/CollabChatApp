/*
Gulpfiles!
 Add a gulp plugin
 1. Find it online (on NPM)
 2. npm install <plugin>
 3. require() it
 4. Add it to the right pipelines
 */

var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var cssvalidator = require('gulp-css-validator');
var jslint = require('gulp-jslint');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var obfuscator = require('gulp-js-obfuscator');
var gulpsass = require('gulp-sass');

/* This is the alternative to all of below
gulp.task('default', ['html', 'css', 'js']);
*/

gulp.task('html', function() {
  // First, find all of my HTML files.
  // Make any modifications (none for now)
  // Output them to their final resting place.

  // Copy all HTML files in the current directory into the public/ directory.
  return gulp.src('./*.html')
    .pipe(htmlhint())
    //This is to check for failures
    .pipe(htmlhint.failReporter())
    .pipe(gulp.dest('public/'));
});

gulp.task('css', function() {
  return gulp.src('css/*.css')
    .pipe(gulpsass())
    .pipe(gulp.dest('public/css'));
});

gulp.task('js', function() {
  return gulp.src('js/app.js')
    .pipe(jslint({
      browser: true,
      sloppy: true,
      node: true,
      evil: true,
      nomen: true,
      global: [],
      predef: [],
      reporter: 'default',
      edition: '2014-07-08',
      errorsOnly: false,
    }))
    .on('error', function(error) {
      console.error(String(error));
    })
    .pipe(browserify())
    .pipe(gulp.dest('public/js'));
});








/*
var html_validation = require('gulp-htmlhint');
var css_validation = require('gulp-css-validator');
var js_validation = require('gulp-jslint');
var uglify = require('gulp-uglify');
var js_obfuscator = require('gulp-js-obfuscator');
*/
