const pessoa = {
    nome: 'mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

const andre:  {nome: string, idade: number, profissao: string} ={
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula:  {nome: string, idade: number, profissao: string} ={
    nome: 'paula',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Estudante extends Pessoa {
    materias: string[]
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

const vanessa: Pessoa = {
    nome: 'vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['matematica', 'programacao']
}

const monica: Estudante = {
    nome: 'jessica',
    idade: 28,
    materias: ['matematica', 'programacao']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item)
    }
}

listar(monica.materias)