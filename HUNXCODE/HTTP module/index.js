import http from "http";

const server = http.createServer((req, res) => {
//   res.statusCode = 404;
//   res.statusMessage = "NOT FOUND";
//   res.setHeader("Content-Type", "text/html"); // ✅ Correct key with hyphen
//   below is a shorthand method for:
// Setting the status code
// Setting the status message
// Setting response headers

  res.writeHead(202, "GOOD req", {"Content-Type": "text/html"})

  res.write("<h1>hello from server</h1>");
  res.end();
});

server.listen(8000, () => console.log("server is up!"));
