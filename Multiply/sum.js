// module protect their variables and functions from leakage
console.log("sum module executed");

var x = "Hellow world";

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

console.log(x);

//wht is module.export?   --> {empty object}
console.log(module.exports);

// module.exports = {
//   x: x,
//   calculateSum: calculateSum, // old way
// };

module.exports = {
  x, // if dont need to export x remove from the object destructure
  calculateSum, // new way
};

// module.exports.x = x; // this also one way to export
// module.exports.calculateSum = calculateSum;
