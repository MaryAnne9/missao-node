
const http = require('http');


const server = http.createServer((req, res) => {
    
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

   
    res.end('Bem-vindo ao servidor nativo! Missão 1 concluída.');
});


server.listen(3000, () => {
    console.log('Servidor HTTP Nativo rodando em http://localhost:3000');
});