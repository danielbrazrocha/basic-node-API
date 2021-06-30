//import cors from 'cors';

express = require('express'),
cors = require('cors')

app = express(),
port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors()); 

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
        [11, 16, 17, 18],
    destino:
        [11, 16, 17, 18]
};

newObjDDD = [
  [11, 16, 17, 18],
  [11, 16, 17, 18]
]

Object.entries(newObjDDD).map( (ddd) => console.log(ddd))
//console.log(newObjDDD["origem"])
//objDDD["origem"].map( (ddd) => console.log(ddd))

//Object.keys(Object.values(objDDD)).map( (ddd) => console.log(ddd))
// Object.values(objDDD).map( (ddd) => {
//   if (Object.keys(objDDD[ddd] == "origem") ) {
//     console.log(ddd);
//   }    
// });

// Object.entries(objDDD).forEach(([key, value]) => {
//   if (key == "origem") {
//       value.forEach( (item) => {
//         console.log(item);
//       } )
    
//   }    
// });


planos = ['Mais 30', 'Mais 60', 'Mais 120'];



app.listen(port);

app.get("/ddd", (req, res, next) => { res.json(objDDD); });
app.get("/planos", (req, res, next) => { res.json(planos); });
app.get("/tarifas", (req, res, next) => { res.json(tarifas); });

app.post('/calculate', function(req, res) {
  function doCalculate(dddOrigem, dddDestino, plano, tempoLigacao) {
    if (!tempoLigacao) {
      alert('Favor Informar a duração da ligação');
    }
    let res = '';
    let tarifaAplicada = tarifas[dddOrigem][dddDestino];
    if (tempoLigacao <= plano) {
      res = 0;
      res = parseInt(res.toFixed(2));
    } else {
      let tempoAlemPlano = tempoLigacao - plano;
      res = tempoAlemPlano * tarifaAplicada * 1.1;
    }

    let tarifaSemPlano = tempoLigacao * tarifaAplicada;
    let tarifaComPlano = res;
  
    return { 
      comPlano: tarifaComPlano,
      semPlano: tarifaSemPlano
     }
  };


  const {dddOrigem, dddDestino, plano, tempoLigacao} = req.body.data
  pricesArray = doCalculate(dddOrigem, dddDestino, plano, tempoLigacao);
  
  console.log(pricesArray)
  
  res.send(pricesArray);
});



console.log('todo list RESTful API server started on: ' + port);