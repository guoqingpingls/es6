{
  // es5写法
  let regex = new RegExp('xyz', 'i')
  let regex2 = new RegExp(/xyz/i)
  console.log(regex.test('xyz123'),regex2.test('xyz123'))

  // es6 允许第二个参数是修饰符 但是会覆盖第一个参数的修饰符
  let regex3 = new RegExp(/xyz/ig, 'i')
  console.log(regex.flags)  // i 正则的修饰符
}

{
  // y修饰符 粘连修饰符
  // y g 都是全局匹配 g是从上次匹配的位置继续寻找，寻找下一个匹配值， y是从上次匹配位置的下一位置匹配，必须是紧接着的匹配成功才行
  let s = 'bbb_bb_b'
  let a1 = /b+/g;
  let a2 = /b+/y;
  console.log(a1.exec(s), a2.exec(s)) // bbb   bbb
  console.log(a1.exec(s), a2.exec(s)) // bb    null
  // .sticky 检测是否开启y修饰符
  console.log(a1.sticky, a2.sticky)

}

{
  // u修饰符  正则处理 unicode u 是正则在处理unicode字符的时候的特征值
  // 没加 会吧后面的当成四个字节 2+2字节 两个字符
  // 加了 会把后面的四个字节当成一个字符
  console.log('u-1:', /^\uD83D/.test('\uD83D\uDc2A'))   // true
  console.log('u-1:', /^\uD83D/u.test('\uD83D\uDc2A'))  // false

  // {}包起来的内容作为一个unicode字符， 但是不加u是不会被识别的
  console.log(/\u{61}/.test('a'))   // false
  console.log(/\u{61}/u.test('a'))   // true

  // .字符  <0xf的字符
  console.log(`\u{20bb7}`);
  let s = '𠮷'
  // 字符大于俩个字节需要加上u修饰符
  console.log('u: ', /^.$/.test(s));    // false
  console.log('u-1: ', /^.$/u.test(s));   // true

  console.log('test: ', /𠮷{2}/.test('𠮷𠮷')) // false
  console.log('test-2: ', /𠮷{2}/u.test('𠮷𠮷')) // true
  // 如果处理的字符串中 正则表达式中，有大于两个字节的字符
  // .可以匹配到任意字符（必须小于等于两个字节）
  // （回车符，换行符，行分隔符，段分隔符，这些.是不能识别的，这时候需要s修饰符，暂未实现）
}