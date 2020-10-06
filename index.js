
// Oliver Kovacs 2020
// gcdlcm.js - index.js

const gcd = (a, b) => {
    if (b > a) b = a + (a = b) - b;
    while (true) {
        if (a % b == 0) return Math.abs(b);
        b = a % (a = b);
    }
};

const lcm = (a, b) => {
    return Math.abs(a / gcd(a, b) * b);
};

const gcdn = (...args) => {
    return args.reduce((acc, cur) => gcd(acc, cur));
}

const lcmn = (...args) => {
    return args.reduce((acc, cur) => lcm(acc, cur));
}

module.exports = { gcd, lcm, gcdn, lcmn };