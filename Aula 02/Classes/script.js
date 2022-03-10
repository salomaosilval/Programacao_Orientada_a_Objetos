function constroiPessoaConstructor (nome, email, idade) {
    this.nome = nome,
    this.email = email,
    this.idade = idade

    // reescrevendo o método toString que seria encontrada no escopo global do JS
    this.toString = () => {
        return ("Nome da pessoa: " + this.nome + ", idade da pessoa: " + this.idade);
    }
}

// instanciando a função construtora
let jaque = new constroiPessoaConstructor ("Jaque", "jaque@jaque.com", 28);

console.log(jaque.toString());

// Transformando a função construtora em uma classe

class Pessoa {
    constructor (nome, email, idade) {
        this.nome = nome,
        this.email = email,
        this.idade = idade
    }

    get dobraIdade () {
        return this.idade * 2;
    }
}

let vini = new Pessoa("Vinicius", "vinicius@letscode.com.br", 20);

console.log(vini.dobraIdade);