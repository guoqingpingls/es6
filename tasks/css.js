import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './util/args'

gulp.task('css', () => {
  // 找到匹配的文件
  return gulp.src('app/**/*.css')
  // 导出文件到指定的位置
  .pipe(gulp.dest('server/public'))
  // .pipe(gulpif(args.watch,livereload()))
})