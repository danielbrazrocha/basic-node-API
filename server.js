var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

tarifas = {
    11: {
      16: 1.9,
      17: 1.7,
      18: 0.9,
    },
    16: {
      11: 2.9,
    },
    17: {
      11: 2.7,
    },
    18: {
      11: 1.9,
    },
};

objDDD = {
    origem: 
        ['11', '16', '17', '18'],
    destino:
        ['11', '16', '17', '18']
};

planos = ['Mais 30', 'Mais 60', 'Mais 120'];



app.listen(port);

app.get("/ddd", (req, res, next) => { res.json(objDDD); });
app.get("/planos", (req, res, next) => { res.json(planos); });
app.get("/tarifas", (req, res, next) => { res.json(tarifas); });


console.log('todo list RESTful API server started on: ' + port);