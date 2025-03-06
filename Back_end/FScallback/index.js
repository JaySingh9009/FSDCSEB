const {writeAsync,readAsync} = require("./fileoperation")
console.log(writeAsync());
const result=readAsync();
console.log(result);