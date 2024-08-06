const express = require('express');

require('./config/db');

const app = express();

app.get ('/', (req, res ) => {
    res.send({ message: 'seja bem vindo (a) à API do Classic Models!'});
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});