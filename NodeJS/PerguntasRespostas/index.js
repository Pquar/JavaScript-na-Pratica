const express = require('express');
const app = express();


// setando o ejs como view engine
app.set('view engine', 'ejs');
app.use(express.static('public')); 

app.get('/:nome/:empresa', function (req, res) {
  //parametros obtidos da url
  var nome = req.params.nome;
  var empresa = req.params.empresa;
  var exibirMsg = false;

  var produtos = [
    {nome: "Dorflex", preco: 19.90},
    {nome: "Buscopan", preco: 9.90},
    {nome: "Neosaldina", preco: 7.90},
    {nome: "Dipirona", preco: 5.90}
  ];

  res.render("index",{
    nome:nome,
    lang: "Javascript",
    empresa: empresa,
    inscritos: 12,
    msg: exibirMsg,
    produtos: produtos
  });
});

app.listen(3000,(error) =>{
    if (error) {
        console.log('Ocorreu um erro');
      } else {
        console.log('Servidor rodando na porta 3000');
      }
}); // servidor