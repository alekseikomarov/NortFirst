const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  const queryData = url.parse(req.url, true).query;
  console.log(queryData.perekond);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if(queryData.perekond){
    res.end(`Tere heihei perekond ${queryData.perekond}!`);
    return
  }
  res.end("Tere!");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});