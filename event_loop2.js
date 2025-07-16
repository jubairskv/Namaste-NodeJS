const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve().then(() => console.log("promise"));

fs.readFile("file.txt", "utf-8", () => {
  // c -> queue  filed read will take some time to read
  console.log("file read");
});

setTimeout(() => console.log("setTimeout"), 0);

process.nextTick(() => console.log("process.nextTick"));

function printA() {
  console.log("a=", a);
}

printA();

console.log("last line");

// !!! logs:

//a=100
//last line
//process.nextTick
//promise
//setTimeout
//setImmediate
//file read
