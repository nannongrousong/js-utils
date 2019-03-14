//  函数组合合并 compose(f, g, h)(...args) 等同于 f(g(h(...args)))
const composeFunc = (...funcs) => funcs.reduce((prev, curr) => (...args) => prev(curr(...args)));

const fun1 = (a) => (a + 1);
const fun2 = (a) => (a + 2);
const fun3 = (a) => (a + 3);

const lastFun = composeFunc(fun1, fun2, fun3)
lastFun(10)
