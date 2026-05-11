
const express = require('express');
const app = express();

app.get('/', (req, res) => {
   
    res.send('Bem-vindo ao servidor profissional com Express!');
});

app.get('/perfil', (req, res) => {
  
    res.json({
        nome: "Mary Anne",

        turma: "Devald"
    });
});

app.use((req, res) => {
    
    res.status(404).send('Ops! Caminho não encontrado.');
});

app.listen(2000, () => {
    console.log('Servidor Express rodando em http://localhost:2000');
});