require("./xyz.js"); //one module into another module
//const obj = require("./sum.js"); // if u dont  write with .js extension all it will wrk
//import { calculateSum } from "./module.js"; // ES module

// !!  this type of module is called CommonJS

// const { x, calculateSum } = require("./Multiply/sum.js"); // object destructure  and commonjs module type
// const { mutli } = require("./Multiply/multi.js");   // fpr two line of code shorted way at index

const { mutli, calculateSum } = require("./Multiply/index.js");
const data = require("./data.json");
const util = require("node:util");

var a = "Namaste Node JS";

var b = "1";

var c = 1;

var a = 10;
var b = 20;

d = 10; // not strcit mode in CommonJS it will work without declare var
e = 20;
console.log(d + e);
//obj.calculateSum(a, b); //without obect destructure

calculateSum(a, b); // with object destructure
mutli(a, b);



//console.log(x);

console.log(a);
console.log(data);

//console.log(obj.x);

console.log(calculateSum(a, b));
console.log(mutli(a, b));
console.log(b + c);
//console.log(obj.x);
