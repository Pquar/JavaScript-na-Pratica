var pdf = require('html-pdf');
var ejs = require('ejs');

var disciplina = 'Programação Web';
var professor = 'Prof. Dr. Ang';
var ferramenta = 'EJS';


ejs.renderFile('./pagina.ejs', {disciplina: disciplina, professor: professor, ferramenta: ferramenta},(err, html) => {
    if (err) {
        console.log(err);
    } else {
        pdf.create(html, {}).toFile('./mypdf.pdf', function(err, res) {
            if (err) { 
                console.log(err)
            }else{
        
                console.log(res);
            }
        });
    }
});
