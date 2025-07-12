console.log("Hello world");

var a = 123222;
var b = 23231;

// this callback will  only be pushed to call stack in v8 once the call stack is empty
setTimeout(() => {
  console.log("setTimeout called ryt now");
}, 0);

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

function multiple(a, b) {
  const result = a * b;
  return result;
}

var c = multiple(a, b);
console.log(c);
