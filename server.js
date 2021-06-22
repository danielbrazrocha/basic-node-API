var express = require('express'),
app = express(),
port = process.env.PORT || 3000;


obj = {
    origem: 
        ['11', '16', '17', '18'],
    destino:
        ['11', '16', '17', '18']
}

app.listen(port);

app.get("/getDDD", (req, res, next) => { res.json(obj); });

app.get("/url", (req, res, next) => { res.json(["Tony","Lisa","Michael","Ginger","Food"]); });

console.log('todo list RESTful API server started on: ' + port);