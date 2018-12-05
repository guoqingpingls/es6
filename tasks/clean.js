import gulp from 'gulp'
import del from 'del'
import args from './util/args'

gulp.task('clean', (cb) => {
  // 清空下面的两个文件
  return del(['server/public', 'sever/views'])
});