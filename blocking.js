const crypto = require("node:crypto"); // or crypto

console.log("Hello world");

var a = 123222;
var b = 23231;

//pbkdf2 : password Base Key Derivation Function

console.log("===========");

//Sync function - !!! will blck the main thread dont use it
const hash = crypto.pbkdf2Sync("password", "salt", 1000000, 512, "sha512"); // dont use sync function this will block main thread
console.log(hash.toString("hex"));

setTimeout(() => {
  console.log("setTimeout called ryt now");
}, 0);  // it will work only be called once call stack pf main thread is empty

//Async function
crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
  console.log("password encrypted");
});

function multiple(a, b) {
  const result = a * b;
  return result;
}

var c = multiple(a, b);
console.log(c);
