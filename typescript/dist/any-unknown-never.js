"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'aaa';
anyEstaDeVolta = 5;
let stringTeste = 'verificar';
let unknownValor;
unknownValor = 2;
unknownValor = 's';
unknownValor = true;
unknownValor = 'vai sim';
let stringTeste2 = 'agora vai';
if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('erro', 500);
