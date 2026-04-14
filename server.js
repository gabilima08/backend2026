const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, {'Content-Type':'text/html'});
      res.end(data);
    });
  }else{
    if(req.url === '/style.css'){
      fs.readFile('style.css', (err, data) => {
        res.writeHead(200, {'Content-Type':'text/css'});
        res.end(data);
      });
    }
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});