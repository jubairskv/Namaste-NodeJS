const fs = require("fs");
const crypto = require("node:crypto");

process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2("password", "salt", 500000, 512, "sha512", () => {
  console.log("1 -password encrypted");
});

// fs.readFile("file.txt", "utf-8", () => {
//   console.log("file read");
// });

crypto.pbkdf2("password", "salt", 500000, 512, "sha512", () => {
  console.log("2-password encrypted");
});

crypto.pbkdf2("password", "salt", 500000, 512, "sha512", () => {
  console.log("3-password encrypted");
});

crypto.pbkdf2("password", "salt", 500000, 512, "sha512", () => {
  console.log("4-password encrypted");
});

crypto.pbkdf2("password", "salt", 500000, 512, "sha512", () => {
  console.log("5-password encrypted");
});
