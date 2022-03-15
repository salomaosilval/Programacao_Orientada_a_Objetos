class CNH {
    constructor(pais, categoria) {
        this.pais = pais;
        this.categoria = categoria;
    }
        get idade() {
            if (this.pais == "US" || this.pais == "CA") {
            let idade = 16;
            `O país é ${this.pais}, a idade é ${idade}`
        } else if (this.pais == "CH" || this.pais == "RU") {
            let idade = 21;
            `O país é ${this.pais}, a idade é ${idade}`
        } else if (this.pais == "BR") {
            if (this.categoria == undefined) {
                return `Digite a categoria`
            } else {
                let idade = 18;
                return `O país é ${this.pais}, a idade é ${idade} e a categoria é ${this.categoria}`;
            }
        } else {
            return "País não catalogado"
        }
    }
}

const Carteira = new CNH("BR", "A");
console.log(Carteira.idade);