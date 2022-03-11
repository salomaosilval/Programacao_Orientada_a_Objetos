let aluno = {
    nome: "Salomão",
    matricula: 123456,
    idade: 19,
    curso: "Lets Code",
    getCurso: function(curso = "Lets Code") {
        return curso;
    }
}

console.log(aluno);
console.log(aluno.getCurso());
console.log(aluno.getCurso("POO"));
console.log(aluno);