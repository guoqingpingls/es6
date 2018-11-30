import yargs from 'yargs'

const args = yargs
// 开发环境 OR 生产环境
.option('production', {
  boolean: true,
  default: false,
  decribe: 'min all script'
})
.option('watch', {
  boolean: true,
  default: false,
  describe: 'watch all files'
})
// 是否输出命令行日志
.option('verbose', {
  boolean: true,
  default: false,
  describe: 'log'
})
// js映射  处理参数
.option('sourcemap', {
  describe: 'force the creation of sourcemap'
})
//端口
.option('port', {
  string: true,
  default: 8088,
  describe: 'server port'
})
// 输出为字符串
.argv