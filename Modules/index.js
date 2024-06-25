const { add, sub } = require("./math")
const { multiple, add: add2 } = require("./math-2")

console.log(multiple(10, 20));
console.log(add2(10, 20));

console.log(add(10, 29))
console.log(sub(10, 29))