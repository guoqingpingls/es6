{
  // es5写法
  let regex = new RegExp('xyz', 'i')
  let regex2 = new RegExp(/xyz/i)
  console.log(regex.test('xyz123'),regex2.test('xyz123'))

  // es6 允许第二个参数是修饰符 但是会覆盖第一个参数的修饰符
  let regex3 = new RegExp(/xyz/ig, 'i')
  console.log(regex.flags)
}

{
  // y修饰符
  // y g 都是全局匹配 g是从上次匹配的位置继续匹配，寻找下一个， y是从上次匹配位置的下一位置匹配，必须是紧接着
  let s = 'bbb_bb_b'
  let a1 = /b+/g;
  let a2 = /b+/y;
  console.log(a1.exec(s), a2.exec(s)) // bbb   bbb
  console.log(a1.exec(s), a2.exec(s)) // bb    null
  // .sticky 检测是否开启y修饰符
  console.log(a1.sticky, a2.sticky)

}

{
  // u修饰符  正则处理
}