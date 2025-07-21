import http from "http";

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url === "/") {
    
    res.writeHead(200,"Ok", {"content-type":"text/html"});
    res.end("<h1>HOME</h1>");
  } else if (req.url === "/about") {
    
    res.writeHead(200,"Ok", {"content-type":"text/html"});
    res.end("<h1>ABOUT</h1>");
  }else{
    
    res.writeHead(404,"Not found", {"content-type":"text/html"});
    res.end('404 PAGE NOT FOUND')
  }
});

server.listen(8000, () => console.log("server is up!"));
