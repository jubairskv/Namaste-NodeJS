const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getData") {
    return res.end("GET DATA");
  }
  res.end("Hello world");
});

server.listen(7777);
