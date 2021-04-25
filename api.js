const { JSON } = require('body-parser');
const express = require('express');
const port = 3000;
let app = express();

//recurso que sera acionado pelo metodo get

app.get('/cep/filter:', (req, res) =>{
    console.log(req.query);
    res.send(req.query);
});

app.get('/bairro/filter:', (req, res)=>{
    console.log(req.query);
    res.send(req.query);
});

app.get('/cidade/filter:', (req, res)=>{
    console.log(req.query);
    res.send(req.query);
});

app.get('/localidade/filter:', (req, res)=>{
    console.log(req.query);
    res.send(req.query);
});

app.listen(port,()=>{
    console.log(`projeto iniciado na porta ${port}`);
    console.log(`Pressione ctrl+C para sair`);
});