const fs = require("fs");
const https = require("https");

console.log("Hello world");

var a = 123222;
var b = 23231;

fs.readFileSync("./file.txt", "utf-8");   // this code will block the execution for while
console.log("this will execute only after the file is read");

https.get("https://jsonplaceholder.typicode.com/todos/1", (res) => {
  console.log("fetch data");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

function multiple(a, b) {
  const result = a * b;
  return result;
}

var c = multiple(a, b);
console.log(c);
