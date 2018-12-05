// 这里的server是指express,是web的server,架构一个本地虚拟web服务器来渲染网页文件,
import gulp from 'gulp'
import gulpif from 'gulp-if'
import liveserver from 'gulp-live-server'
import args from './util/args'

gulp.task('serve', (cb) => {
  if (!args.watch) return cb() // 只有watch参数才会触发web服务器
  var server = liveserver.new(['--harmony', 'server/bin/www']);
  server.start(); // 开启web服务器
  // 这里真正使用了gulp的watch监听功能
  // 先通知web服务器有那些文件变动了
  gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function (file) {
    // 会被加载到web的文件缓存中
    server.notify.apply(server, [file]);
  })
  // 重新启动web服务器，相当于重新加载所有文件，实现了自动加载
  gulp.watch(['server/routes/**/*.js', 'server/app.js'], function () {
    server.start.bind(server)()
  })
})