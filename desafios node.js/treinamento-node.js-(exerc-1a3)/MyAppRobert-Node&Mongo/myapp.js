const express = require ('express');
const app = express ();
const porta = 3001;

app.get ('/', (req, res) => {
    res.send ('Hello World');
})

app.listen (porta, () => {
    console.log (`Exemplo de aplicativo rodando em http://localhost:${porta}`);
})

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});