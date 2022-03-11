let ave = {
    especie: "Galinha",
    getEspecie: function () {
        return this.especie;
    }
}

let peixe = {
    especie: "Salmão"
}

console.log(ave.getEspecie);

let especie = ave.getEspecie.bind(peixe);
console.log(especie);