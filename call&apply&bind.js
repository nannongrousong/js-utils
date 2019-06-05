let earth = {
    areaName: 'earth',
    welcome: function (name1, name2, nameArr) {
        console.log(`welcome to ${this.areaName},${name1} and ${name2}, ${nameArr.toString()}`);
        return 'this is welcome function';
    }
};

let school = {
    areaName: 'school'
};

earth.welcome.call(school, 'zhangsan', 'lisi', ['wanger', 'wangliu']);
Function.prototype.call2 = function (ctx, ...args) {
	const vFn = Symbol('vFn');
	ctx[vFn] = this;
	const res = ctx[vFn](...args);
	delete ctx[vFn];
	return res;
};
earth.welcome.call2(school, 'zhangsan', 'lisi', ['wanger', 'wangliu']);

earth.welcome.apply(school, ['zhangsan', 'lisi', ['wanger', 'wangliu']]);
Function.prototype.apply2 = function (ctx, ...args) {
	const vFn = Symbol('vFn');
	ctx[vFn] = this;
	const res = args.length === 0
		? ctx[vFn]()
		: ctx[vFn](...args[0]);
	delete ctx[vFn];
	return res;
};
earth.welcome.apply2(school, ['zhangsan', 'lisi', ['wanger', 'wangliu']]);

earth.welcome.bind(school, 'zhangsan', 'lisi', ['wanger', 'wangliu'])();
Function.prototype.bind2 = function (ctx, ...args) {
	const vFn = Symbol('vFn');
	ctx[vFn] = this;
	return function () {
		const res = ctx[vFn](...args);
		delete ctx[vFn];
		return res;
	};
}
earth.welcome.bind2(school, 'zhangsan', 'lisi', ['wanger', 'wangliu'])();
