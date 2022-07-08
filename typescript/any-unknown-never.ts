let anyEstaDeVolta: any
anyEstaDeVolta = 3
anyEstaDeVolta = 'aaa'
anyEstaDeVolta = 5

let stringTeste: string = 'verificar'

let unknownValor: unknown
unknownValor = 2
unknownValor = 's'
unknownValor = true
unknownValor = 'vai sim'

let stringTeste2: string = 'agora vai'


if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor
}

function jogaErro(erro: string, codigo:number): never {
    throw {error: erro, code: codigo}
}
jogaErro('erro', 500)