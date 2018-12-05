import gulp from 'gulp'
import gulpSequence from 'gulp-sequence'
// build任务执行先后 []里面的任务平行执行
gulp.task('build', gulpSequence('clean', 'css', 'pages','scripts', ['browser', 'serve']))
