const mongoose = require('mongoose');
const articleModel = require('./article');

mongoose.connect("mongodb://localhost:27017/mongoaprendendo");

const Article = mongoose.model('Article', articleModel);



/* Update, Atualizando um documento específico pelo ID
Article.findByIdAndUpdate('64146fc89d206692b80b0590', {title: 'NodeJS é muito legal',
 author: 'Not Ang', 
 body: 'Js e'
}).then(() => {
    console.log("dado atualizado com sucesso!");
}).catch(err => {
    console.log(err);
});
*/


/* Deletar um documento específico pelo ID
Article.findByIdAndDelete('64146f58aa0022a9210af673').then(() => {
    console.log("dado deletado com sucesso!");
}).catch(err => {
    console.log(err);
});
*/




/* Retorna um artigo específico pelo objeto interno
Article.find({'resume.content': 'NodeJS é ..'}).then(article => {
    console.log(article);
}).catch(err => {
    console.log(err);
});
*/


/* Retorna um artigo específico pelo título e pelo corpo
Article.find({'author': 'Ang', 'body': 'NodeJS é ..'}).then(article => {
    console.log(article);
}).catch(err => {
    console.log(err);
});
*/

/* Retornar um artigo específico pelo ID
Article.find({'_id': '64147364f6f0880a4eee77a2'}).then(article => {
    console.log(article);
}).catch(err => {
    console.log(err);
});
*/

/* Retornar todos os artigos
Article.find({}).then(articles => {
    console.log(articles);
}).catch(err => {
    console.log(err);
});
*/

/* Cadastrar um artigo
const artigo = new Article({
    title: "NodeJS",
    author: "Ang",
    body: "NodeJS é ..",
    special: true,
    resume: {
        content: "NodeJS é ..",
        author: "Ang"
    }
})

artigo.save().then(() => {
    console.log("Artigo salvo com sucesso!");
}).catch(err => {
    console.log("Erro ao salvar artigo: " + err);
});
*/