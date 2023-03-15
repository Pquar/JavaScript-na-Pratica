const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const JWTSecret = "SenhaMuitoSecretaQueDeveriaSerArmazenadaEmUmArquivoDeConfiguracaoNaoComitadoNoGit";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function auth(req, res, next){

    const authToken = req.headers['authorization'];
    if(authToken != undefined){
        
        const bearer = authToken.split(' ');
        var token = bearer[1];

        jwt.verify(token, JWTSecret, (err, data) => {
            if(err){
                res.status(401);
                res.json({err: "Token inválido"});
            } else{
                req.token = token;
                req.loggedUser = {id: data.id, email: data.email};
                next();
            }
        });
    } else{
        res.status(401);
        res.json({err: "Token inválido"});
    }
}

var BD = {
    games: [
        {
            id: 23,
            title: "Call of Duty MW",
            year: 2019,
            price: 60
        },
        {
            id: 65,
            title: "Sea of Thieves",
            year: 2018,
            price: 40
        },
        {
            id: 2,
            title: "Minecraft",
            year: 2012,
            price: 20
        }
    ],
    users: [
        {
            id: 1,
            name: "Ang",
            email: "ang_avatar@gmail.com",
            password: "deveriaSerHash"
        },
        {
            id: 2,
            name: "Bang",
            email: "skt_1_adc@gmail.com",
            password: "E_UmHash"
        }

        ]
}
app.get("/games", auth, (req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
});

app.get("/game/:id",auth, (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        var game = DB.games.find(g => g.id == id);
        if(game != undefined){
            res.statusCode = 200;
            res.json(game);
        }else{
            res.sendStatus(404);
        }
    }
});

app.post("/game",auth, (req, res) => {
    var {title, price, year} = req.body;
   // VALIDAR OS DADOS
    DB.games.push({
        id: 2323, // GERAR UM ID
        title,
        price,
        year
    });
    res.sendStatus(200);
});

app.delete("/game/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id);
        if(index == -1){
            res.sendStatus(404); // NOT FOUND
        }else{
            DB.games.splice(index, 1);
            res.sendStatus(200);
        }
    }
});

app.put("/game/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        var game = DB.games.find(g => g.id == id);
        if(game != undefined){
            var {title, price, year} = req.body;
            // Recebendo os dados que o usuario nao enviou
            if(title != undefined){
                game.title = title;
            }
            if(price != undefined){
                game.price = price;
            }
            if(year != undefined){
                game.year = year;
            }
            res.sendStatus(200);
        }else{
            res.sendStatus(404);
        }
    }
});

app.post("/auth", (req, res) => {
    var {email, password} = req.body;
    if(email != undefined){
    var user = DB.users.find(u => u.email == email);
    if(user != undefined){
        if(user.password == password){

            jwt.sign({id: user.id, email: user.email}, JWTSecret, {expiresIn: '48h'}, (err, token) => { //payload, secret, options, callback
            if(err){
                res.status(400);
                res.json({err: "Falha interna"});
            }else{
                res.sendStatus(200);
                res.json({token: token});
            }
        });
        }else{
            res.sendStatus(401);
            res.json({err: "Senha incorreta"});
        }
    } else{
        res.sendStatus(404);
        res.json({err: "O email não existe"});
    }
    }else{
        res.sendStatus(400);
        res.json({err: "O email é inválido"});
    }

});

app.listen(3000, () => {
    console.log('Server rodando na porta 3000');
});