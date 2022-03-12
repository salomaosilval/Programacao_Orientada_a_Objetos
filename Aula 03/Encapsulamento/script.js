class Pessoa {
    constructor (nome, idade) {
        this.nome = nome,
        this.idade = idade
    }
    apresentar () {
        return `O meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
}

// Instanciar a classe pessoa
const p1 = new Pessoa("Salomão", 19);
console.log(p1);
console.log(p1.apresentar());
console.log(p1.nome);
console.log(JSON.stringify(p1));
console.log(Object.keys(p1));
console.log(Object.values(p1));

class PessoaPrivada {
    #nome
    #idade
    email
    constructor (nome, idade, email) {
        this.#nome = nome,
        this.#idade = idade,
        this.email = email
    }
    get nome() {
        return this.#nome;
    }
    set nome (i) {
        this.#nome = i;
    }
    apresentar () {
        return `O meu nome é ${this.#nome} e tenho ${this.#idade} anos.`
    }
    // Para resolver o caso do JSON
    toJSON () {
        return {
            nome: this.nome,
            idade: this.#idade,
            email: this.email
        }
    }
}

const p2 = new PessoaPrivada("Pedro", 25, "pedro@letscode.com.br");
p2.nome = "João";
console.log(p2);
console.log(p2.apresentar());
console.log(p2.nome); // A chamada foi feita do atributo
console.log(JSON.stringify(p2));
console.log(Object.keys(p2));
console.log(Object.values(p2));

/*
Crie uma classe Sorteio que tem o número de pessoas inscritas e um método sorteiaPremio que sorteia 
um número que corresponderá ao número de inscrição do participante e declara o vencedor. 
*/

class Sorteio {
    constructor (numPessoas) {
        this.numPessoas = numPessoas;
    }
    sorteiaPremio () {
        // return `O ganhador do sorteio é o participante N°${Math.floor(Math.random() * this.numPessoas + 1)}`
        for (let i = 1; i <= this.numPessoas; i++) {
            console.log(`O ganhador do sorteio é o participante N°${Math.floor(Math.random() * this.numPessoas + 1)}`)
        }
    }
}

const primeiroSorteio = new Sorteio(5);
primeiroSorteio.sorteiaPremio();