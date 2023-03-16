var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('express-flash');
var cookieParser = require('cookie-parser');



//ejs
app.set('view engine', 'ejs');

//body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cookie-parser
app.use(cookieParser("SenhaCookieQueNaoFoiSalvaNoGitHubOuArmazenadoDoJeitoCerto"));

//express-session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

// express-flash
app.use(flash());

app.get('/', (req, res) => {
    var emailError = req.flash('emailError');
    var nameError = req.flash('nomeError');
    var pontosError = req.flash('pontosError');
    var email = req.flash('email');
    var name = req.flash('nome');
    var pontos = req.flash('pontos');

    emailError = (emailError == undefined || emailError.lenght == 0) ? undefined : emailError;
    nameError = (nameError == undefined || nameError.lenght == 0) ? undefined : nameError;
    pontosError = (pontosError == undefined || pontosError.lenght == 0) ? undefined : pontosError;

    email = (email == undefined || email.lenght == 0) ? "" : email;
    name = (name == undefined || name.lenght == 0) ? "" : name;
    pontos = (pontos == undefined || pontos.lenght == 0) ? "" : pontos;

    res.render("index", {emailError, nameError, pontosError, email: email, name: name, pontos: pontos});
});

app.post('/form', (req, res) => {
    var {email, name, pontos} = req.body;

    var emailError;
    var nameError;
    var pontosError;

    if(email == undefined || email == ''){
        emailError = 'Email inválido';
    
    }
    if(nome == undefined || nome == '' ){
        nameError= 'Nome inválido';
        
    }
    if(nome < 4 ){
        nameError= 'Nome Deve ter mais de 4 caracteres';
      
    }
    if(pontos == undefined || pontos == ''){
        pontosError='Pontos inválido';
    
    }

    if(emailError != undefined || nameError != undefined || pontosError != undefined){
        res.render('Tem algo errado neste formulário');
        res.flash('emailError', emailError);
        res.flash('nameError', nameError);
        res.flash('pontosError', pontosError);

        res.flash('email', email);
        res.flash('name', name);
        res.flash('pontos', pontos);

        res.redirect('/');
    }else{
        res.send('ok!');
    }
});

app.listen(3000,(req, res) => {
    console.log("Servidor rodando na porta 3000");
});