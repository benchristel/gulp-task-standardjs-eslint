var gulp = require('gulp')
var esLint = require('gulp-eslint')

module.exports = function (sources) {
  return function lint () {
    return gulp.src(sources)
    .pipe(esLint())
    .pipe(esLint.format('stylish', process.stdout))
    .pipe(esLint.failAfterError())
  }
}
