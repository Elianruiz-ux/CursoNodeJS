// .js -> por defecto utiliza CommonJS
// .mjs -> para utilizar ES modules
// .cjs -> para utilizar CommonJS

import { sum, mult, sub } from "./sum.mjs";

console.log(sum(10, 10));
console.log(sub(10, 10));
console.log(mult(10, 10));
