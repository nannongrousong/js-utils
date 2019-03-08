let earth = {
    areaName: 'earth',
    welcome: function (name1, name2, nameArr) {
        console.log(`welcome to ${this.areaName},${name1} and ${name2}, ${nameArr.toString()}`);
    }
};

let school = {
    areaName: 'school'
};

earth.welcome.call(school, 'zhangsan', 'lisi', ['wanger', 'wangliu']);
Function.prototype.call2 = function (ctx) {
    const vFn = Symbol('vFn');
    ctx[vFn] = this;
    ctx[vFn](...[...arguments].slice(1));
    delete ctx[vFn];
};
earth.welcome.call2(school, 'zhangsan', 'lisi', ['wanger', 'wangliu']);

earth.welcome.apply(school, ['zhangsan', 'lisi', ['wanger', 'wangliu']]);
Function.prototype.apply2 = function (ctx) {
    const vFn = Symbol('vFn');
    ctx[vFn] = this;
    if (arguments.length == 1) {
        ctx[vFn]();
    } else {
        ctx[vFn](...[...arguments].slice(1)[0]);
    }
    delete ctx[vFn];
};
earth.welcome.apply2(school, ['zhangsan', 'lisi', ['wanger', 'wangliu']]);

earth.welcome.bind(school, 'zhangsan', 'lisi', ['wanger', 'wangliu'])();
Function.prototype.bind2 = function (ctx) {
    const vFn = Symbol('vFn');
    ctx[vFn] = this;
    let args = arguments;
    return function () {
        ctx[vFn](...[...args].slice(1));
        delete ctx[vFn];
    };
}
earth.welcome.bind2(school, 'zhangsan', 'lisi', ['wanger', 'wangliu'])();
