const express = require('express')
const app = express()

app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) //Checa se o protocolo informado nos headers é HTTP
        res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS
    else //Se a requisição já é HTTPS
        next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado
});

const port = 3000

function horadata (){
  var data = new Date ()
  return data

//rotas

app.get('/', (req, res) => {
  res.send('Ola pessoal da umbler')
})

app.get('/hora', (req, res) => {
  res.sendFile(__dirname + '/HTML/hora_e_Data.html' )
})

app.get('/alunos', (req, res) => {
  res.send( )
})

///////

app.listen(port, () => {
  console.log(`servidor funcionando em http://localhost:${port}`)
})

//mongo

const MongoClient = require('robertbd').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'robertbd';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
