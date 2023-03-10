class Leitor{

    Ler(caminho){
        console.log(caminho);
    }
}

class Escritor{

    Escrever(arquivo, conteudo){
        console.log("Conteudo escrito com sucesso"+" nome: "+arquivo+" Conteudo: "+conteudo);
    }
}

class Criador{

    Criar(nome){
        console.log("Arquivo criado com sucesso: "+ nome);
    }
}

class Destruidor{

    Deletar(nome){
        console.log("Arquivo deletado com sucesso: " + nome);
    }
}
        


class ManipuladorDeArquivo {
    constructor(nomeArquivo) {
        this.nomeArquivo = nomeArquivo
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.destruidor = new Destruidor();
    }

}

class GerenciadorDeArquivo {
    constructor() {
        this.criador = new Criador();
        this.escritor = new Escritor();
    }

    SalvarListaDeUsuarios(listaDeUsuarios) {
        this.criador.Criar("usuarios.txt");
        this.escritor.Escrever("usuarios.txt", listaDeUsuarios);
    }

}

var manipulador = new ManipuladorDeArquivo("arquivo.txt");

manipulador.leitor.Ler("arquivo.txt");
manipulador.escritor.Escrever("arquivo.txt", "Conteudo do arquivo");
manipulador.criador.Criar("arquivo.txt");
manipulador.destruidor.Deletar("arquivo.txt");

var gerenciador = new GerenciadorDeArquivo();
gerenciador.SalvarListaDeUsuarios("minha lista");