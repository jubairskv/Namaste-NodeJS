const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmediate"));  // a -> queue  // this will be executed 2nd under cycle phase event loop

fs.readFile("file.txt", "utf-8", () => {         // c -> queue  filed read will take some time to read
  console.log("file read");
});

setTimeout(() => console.log("setTimeout"), 0);  // b -> queue   // this will be executed 2nd under cycle phase event loop

function printA() {
  console.log("a=", a);
}

printA();

console.log("last line");

// !!! logs:

//a=100
//last line
//setTimeout
//setImmediate
//file read
