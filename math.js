export const safeAdd = (arg1, arg2) => {
    let r1, r2, m, c;
    try {
        r1 = arg1.toString().split('.')[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split('.')[1].length;
    } catch (e) {
        r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
        let cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace('.', ''));
            arg2 = Number(arg2.toString().replace('.', '')) * cm;
        } else {
            arg1 = Number(arg1.toString().replace('.', '')) * cm;
            arg2 = Number(arg2.toString().replace('.', ''));
        }
    } else {
        arg1 = Number(arg1.toString().replace('.', ''));
        arg2 = Number(arg2.toString().replace('.', ''));
    }
    return (arg1 + arg2) / m;
};

export const safeSub = (arg1, arg2) => {
    let r1, r2, m, n;
    try {
        r1 = arg1.toString().split('.')[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split('.')[1].length;
    } catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
};

export const safeMul = (arg1, arg2) => {
    let m = 0;
    let s1 = arg1.toString();
    let s2 = arg2.toString();
    try {
        m += s1.split('.')[1].length;
    } catch (e) {
    }
    try {
        m += s2.split('.')[1].length;
    } catch (e) {
    }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
};

export const safeDiv = (arg1, arg2) => {
    let t1 = 0;
    let t2 = 0;
    let r1;
    let r2;
    try {
        t1 = arg1.toString().split('.')[1].length;
    } catch (e) {
    }
    try {
        t2 = arg2.toString().split('.')[1].length;
    } catch (e) {
    }
    r1 = Number(arg1.toString().replace('.', ''));
    r2 = Number(arg2.toString().replace('.', ''));
    return (r1 / r2) * Math.pow(10, t2 - t1);
    
};
