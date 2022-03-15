class Animal {
    constructor(especie) {
        this.especie = especie
    }
}

// Extendendo a classe pessoa de animal

class Pessoa extends Animal {
    constructor(nome, idade, especie = "Homo Sapiens Sapeiens") {
        super(especie)
        this.nome = nome,
        this.idade = idade
    }

    imprimeDados(saudacao) {
        return `${saudacao}, ${this.nome} tem ${this.idade} anos.`
    }
}

class Cidadao extends Pessoa {
    constructor(nome, idade, cpf, rg) {
        super(nome, idade)
        // O método super executa o construtor da classe Pai, que neste caso é pessoa
        // Internamente o método super está fazendo "this.nome = nome" e "this.idade = idade"
        this.cpf = cpf,
        this.rg = rg
    }
}

const joao = new Pessoa("João", 22);
console.log(joao);

const carlos = new Cidadao("Carlos", 24, "00000000000", "00000");
console.log(carlos);