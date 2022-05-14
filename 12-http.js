const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page ");
  }
  if (req.url === "/about") {
    res.end("Here is our shorty history");
  }

  res.end(`<h1>Ooops!</h1>
  <p>We cant seem to finnd your page are looking for </p>
  <a href="/">back home</a>
  `);
});

server.listen(5000);
