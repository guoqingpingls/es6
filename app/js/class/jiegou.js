// 数组结构赋值
{
  let a, b, rest;
  [a, b] = [1, 2]
  console.log(a, b)
}
{
  let a, b, rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6]
  console.log(a, b, rest)
}

// 对象解构赋值
{
  let a, b;
  ({a, b} = {a: 1, b: 2});
  console.log(a, b);
}

// 默认值
{
  let a, b, c;
  [a, b, c=3] = [1, 2]
  console.log(1, 2, 3)
}
// 使用场景
// 1,变量交换
{
  let a = 1;
  let b = 2;
  [a, b] = [b, a]
  console.log(a, b)
}
// 2, 
{
  function f () {
    return [1, 2]
  }
  let a, b;
  [a, b] = f()
  console.log(a, b)
}
// 3. 
{
  function f () {
    return [1, 2, 3, 4, 5]
  }
  let a, b, c;
  [a, , , b] = f();
  console.log(a, b);
}
// 
{
  function f () {
    return [1, 2, 3, 4, 5, 6]
  }
  let a, b;
  [a, ...b] = f()
  console.log(a, b)
}
// 对象
{
  let a = {p: 42, q: true}
  let {p, q} = a
  console.log(p, q)
}
{
  let {a=10, b=5} = {a: 3}
  console.log(a, b)
}

{
  let metaData = {
    title: 'abc',
    test: [
      {
        title: 'test',
        describ: 'description'
      }
    ]
  }
  let {title:esTitle, test:[{title:ncTitle}]} = metaData
  console.log(esTitle, ncTitle)
}