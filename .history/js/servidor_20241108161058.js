const express = require('express');
const app = express();
const port = 3000


app.get( '/', (reg, res) => {

    res.send('deu certo');
    
    
    });


app.listen(port, () => {

    console.log(`servidor rodando em http://localhost:${port}`)


});



