const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("promise"));

fs.readFile("file.txt", "utf-8", () => {
  console.log("file read");
});

process.nextTick(() => {
  process.nextTick(() => console.log("2nd process.nextTick"));
  console.log("next tick");
});

console.log("last line");
