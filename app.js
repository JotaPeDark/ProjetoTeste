const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Olá, mundo! Este é o servidor rodando no Docker na porta 3000!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
