//  函数组合合并 compose(f, g, h)(...args) 等同于 f(g(h(...args)))
const composeFunc = (...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

const fun1 = (a) => (a + 1);
const fun2 = (a) => (a + 2);
const fun3 = (a) => (a + 3);

const lastFun = composeFunc(fun1, fun2, fun3)
lastFun(10)
