import gulp from 'gulp'
import gulpif from 'gulp-if'
import concat from 'gulp-concat'
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import named from 'vinyl-named' // 用来保持输入和输出的文件名相同的插件
import livereload from 'gulp-livereload'
import plumber from 'gulp-plumber'  // 防止来自gulp插件的错误导致中断操作的插件
import rename from 'gulp-rename' // 重命名插件
import uglify from 'gulp-uglify' // js代码混淆压缩插件
import {log, colors} from 'gulp-util'
import args from './util/args'

gulp.task('scripts', () => {
  return gulp.src(['app/js/index.js'])
  .pipe(plumber({ // 将错误通过errorHandle输出
    errorHandler: function () {
      // 省略
    }
  }))
  .pipe(named())  // vinyl-named用来保持输入和输出的文件名相同，否则会自动生成一个hash
  .pipe(gulpWebpack({ // 使用webpack对js文件通过babel转义
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        }
      ]
    }
  }), null, (err, stats) => {
    log(`Finished${colors.cyan('script')}`, stats, toString({
      chunks: false
    }))
  })
  .pipe(gulp.dest('server/public/js'))  // 输出处理后的js文件
  .pipe(rename({ // 重命名，这里是对js文件压缩后的文件命名
    basename: 'cp',
    extname: '.min.js'
  }))
  .pipe(uglify({compress:{propserties: false}, output: {'quote_keys': true}}))
  .pipe(gulp.dest('server/public/js')) // 重新输出处理后的js文件 压缩后的
  .pipe(gulpif(args.watch, livereload())) // watch 监听文件饼自动刷新 注意： 这里的watch是watch命令。不是监听文件变化
})