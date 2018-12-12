let earth = {
    areaName: 'earth',
    welcome: function (name1, name2) {
        console.log(`welcome to ${this.areaName},${name1} and ${name2}`);
    }
};

let school = {
    areaName: 'school'
}

earth.welcome.call(school, 'zhangsan', 'lisi')

Function.prototype.call2 = function (ctx) {
    ctx.fn = this;
    let args = Array(arguments.length - 1).fill('').map((v, i) => (`arguments[${i + 1}]`));
    eval(`ctx.fn(${args.toString()})`);
    delete ctx.fn;
};

earth.welcome.call2(school, 'zhangsan', 'lisi');


earth.welcome.apply(school, ['zhangsan', 'lisi']);

Function.prototype.apply2 = function (ctx) {
    ctx.fn = this;
    let args = Array((arguments[1] || []).length).fill('').map((v, i) => (`arguments[1][${i}]`));
    eval(`ctx.fn(${args.toString()})`);
    delete ctx.fn;
};
earth.welcome.apply2(school, ['zhangsan', 'lisi']);


earth.welcome.bind(school, 'zhangsan', 'lisi')();

Function.prototype.bind2 = function (ctx) {
    ctx.fn = this;
    let arguments2 = arguments;

    return function () {
        let args = Array(arguments2.length - 1).fill('').map((v, i) => (`arguments2[${i + 1}]`));
        eval(`ctx.fn(${args.toString()})`);
    };
}

earth.welcome.bind2(school, 'zhangsan', 'lisi')();
