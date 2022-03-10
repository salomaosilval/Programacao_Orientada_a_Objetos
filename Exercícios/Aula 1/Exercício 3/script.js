function Aluno(nome, idade, email, matricula, curso) {
    this.nome = nome,
    this.idade = idade,
    this.email = email,
    this.matricula = matricula,
    this.curso = curso
};

Aluno.prototype.getCurso = function() {
    return this.curso;
};

const aluno1 = new Aluno(
    "Salomão",
    19,
    "salomaosilval@hotmail.com",
    123456,
    "POO"
);

console.log(aluno1);