// 1. Importo o Express (o framework que ajuda a criar rotas fácil)
const express = require('express');
const app = express();
// 2. Rota Principal (/): O que aparece na "home" do site
app.get('/', (req, res) => {
   
    res.send('Bem-vindo ao servidor profissional com Express!');
});
// 3. Rota de Dados (/perfil): Onde mostramos seus dados
app.get('/perfil', (req, res) => {
  
    res.json({
        nome: "Mary Anne",
        turma: "Devald"
    });
});
/* 4. DESAFIO EXTRA (Erro 404): 
   Uma "Rota" no Express é um caminho. Se o usuário digitar algo que não existe,
   o código abaixo (app.use) captura o erro.
*/
app.use((req, res) => {
    
    res.status(404).send('Ops! Caminho não encontrado.');
});
// 5. Liga o servidor
app.listen(2000, () => {
    console.log('Servidor Express rodando em http://localhost:2000');
});