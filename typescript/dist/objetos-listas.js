"use strict";
const pessoa = {
    nome: 'mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'paula',
    idade: 25,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['matematica', 'programacao']
};
const monica = {
    nome: 'jessica',
    idade: 28,
    materias: ['matematica', 'programacao']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
