let express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.json({success: true});
});

app.get("/cor/:nome", (req, res) => {
    let nome = req.params.nome;

    if(nome == "victor"){
        res.json({cor: "vermelho", color: "red"});
    }

});

module.exports = app;