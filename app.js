const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.write("hello world");
    res.end();
    return;
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
    return;
  }

  res.statusCode = 404;
  res.end("Not Found");
});

server.listen(3000);
console.log("Listening on port 3000...");
