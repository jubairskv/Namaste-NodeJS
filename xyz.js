function x() {
  console.log("xyz module executed");
  const a = 10;
  function b() {
    console.log("b function executed");
  }
}

console.log(a);
b();

// !!! IIFE --> Immediately Invoked Function Expression

// require("./path")

// all the code  of the mdoule is wrapped inside a function(IIFE) and then executed

//IIFE:

(function (module, require) {
  require("./path");
  function calculateSum() {
    const sum = a + b;          // this is how module will work
    console.log(sum);
  }
  module.exports = { calculateSum };
})();
