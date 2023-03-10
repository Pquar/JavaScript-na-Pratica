class Filme {
  constructor(titulo, ano, genero, diretor, atores, duracao) {
    this.titulo = titulo;
    this.ano = ano;
    this.genero = genero;
    this.diretor = diretor;
    this.atores = atores;
    this.duracao = duracao;
  }

  Reproduzir() {
    console.log('Reproduzindo filme...');
  }

  Pausar() {
    console.log('Pausando filme...');
  }

  Avancar() {
    console.log('Avançando filme...');
  }

  Fechar() {
    console.log('Fechando filme...');
  }

    Ficha() {
        console.log("Titulo: " + this.titulo);
        console.log("Ano: " + this.ano);
        console.log("Genero: " + this.genero);
    }

}

// Filme 1
var vingadores = new Filme();
vingadores.titulo = 'Vingadores: Guerra Infinita';
vingadores.ano = 2018;
vingadores.genero = 'Ação';
vingadores.diretor = 'Joe Russo';
vingadores.atores = ['Robert Downey Jr.', 'Chris Evans', 'Chris Hemsworth'];
vingadores.Pausar();
vingadores.Avancar();
vingadores.Fechar();
console.log(vingadores.titulo);
console.log('filme do ano ' + vingadores.ano);
console.log(vingadores.Ficha());

// Filme 2

    var flash = new Filme(
  'Flash',
  2014,
  'Ação',
  'Zack Snyder',
  ['Henry Cavill', 'Amy Adams', 'Michael Shannon'],
  120
);
console.log(flash.atores);


// Filme 3
   var interestelar = new Filme() 

;


