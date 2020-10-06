# gcdlcm

Fast and simple [gcd](https://en.wikipedia.org/wiki/Greatest_common_divisor)/[lcm](https://en.wikipedia.org/wiki/Least_common_multiple) implementation in JavaScript using the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm  ).

## Installation

[npm](https://www.npmjs.com/)
```bash
npm i @dnydxn/gcdlcm
```

## Usage

Import
```js
const { gcd, lcm } = require("@dnydxn/gcdlcm");     // cjs

// or

import gcdlcm from "@dnydxn/gcdlcm";                // mjs
const { gcd, lcm } = gcdlcm;
```

Examples
```js
gcd(2, 3)   // 1
gcd(2, 4)   // 2

lcm(2, 3)   // 6
lcm(2, 4)   // 4
```

The gcdn/lcmn functions can take an arbitrary amount of parameters.\
Note that gcd/lcm is faster when only two parameters are given.
```js
const { gcdn, lcmn } = require("@dnydxn/gcdlcm");

gcdn(2, 3, 4)       // 1
gcdn(2, 4, 6, 8)    // 2

lcmn(2, 3, 4)       // 12
lcmn(2, 4, 5, 6)    // 60
``` 

## License
[MIT](https://choosealicense.com/licenses/mit/)