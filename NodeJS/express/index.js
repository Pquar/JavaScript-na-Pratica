const express = require('express'); //
const app = express();

app.get('/', function (req, res) {
  res.send('<h1> Hello World! </h1>');
});

app.get('/sobre', function (req, res) {
  res.send('<h1> Sobre </h1>');
});
app.get('/produtos/produto', function (req, res) {
    res.send('<h1> Produto</h1>');
  });
//parametros obrigatórios
  app.get('/usuario/:nome/:empresa', function (req, res) {
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send('<h1> Ola ' + nome + " da(o) "+ empresa+ '</h1>');
    });
//parametros opcionais
app.get('/blog/:artigo?', function (req, res) {
    var artigo = req.params.artigo;
    if(artigo){
    res.send('<h1> Ola ' + artigo + '</h1>');
    }else{
        res.send('<h1> Pagina inicial</h1>');
    }
    });
//Query parametros 
app.get('/canal/youtube', function (req, res) {
    var canal = req.query['canal'];
    if(canal){
    res.send('<h1> Ola ' + canal + '</h1>');
    }else{
        res.send('<h1> Pagina inicial</h1>');
    }
    });

// servidor
app.listen(3000, function (error) {
  if (error) {
    console.log('Ocorreu um erro');
  } else {
    console.log('Servidor rodando na porta 3000');
  }
});
