// 1. Chamo o módulo 'http' que já vem instalado no Node.js
const http = require('http');

/* 2. http.createServer(): Este método serve para criar o servidor.
   Ele fica esperando alguém "bater na porta" (fazer uma requisição).
*/
const server = http.createServer((req, res) => {
    /* 3. Objeto 'res' (Response): É a nossa resposta. 
       Aqui eu digo que deu tudo certo (status 200) e que vou enviar um texto.
    */
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

   // 4. res.end(): Envia a mensagem final e fecha a conexão.
    res.end('Bem-vindo ao servidor nativo! Missão 1 concluída.');
});

// 5. O servidor liga na porta 2000.
server.listen(2000, () => {
    console.log('Servidor HTTP Nativo rodando em http://localhost:2000');
});