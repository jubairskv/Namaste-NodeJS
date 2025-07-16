const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("promise"));

fs.readFile("file.txt", "utf-8", () => {
  setTimeout(() => console.log("2nd setTimeout"), 0);
  process.nextTick(() => console.log("2nd process.nextTick"));
  setImmediate(() => console.log("2nd setImmediate"));
  console.log("file read");
});

process.nextTick(() => console.log("process.nextTick"));
console.log("last line");

/**
 * last line
 * process.nextTick
 * promise
 * setTimeout
 * setImmediate
 * file read
 * 2nd process.nextTick
 * 2nd setImmediate
 * 2nd setTimeout

 * 
 * 
 */
