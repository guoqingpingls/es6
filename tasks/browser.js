import gulp from 'gulp'
import gulpif from 'gulp-if'
import gutil from 'gulp-util'
import args from './util/args'

gulp.task('browser', (cb) => {
  if (!args.watch) return cb()
  // 监听js文件变化
  gulp.watch('app/**/*.js', ['scripts']);
  // 监听ejs文件变化
  gulp.watch('app/**/*.ejs', ['pages'])
  // 监听css文件变化
  gulp.watch('app/**/*.css', ['css']) 
});