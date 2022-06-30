const alunos = [
    {
        nome: "Matheus",
        nota: 7,
    },

    {
        nome: "Tiago",
        nota: 5,
    },

    {
        nome: "Larissa",
        nota: 2,
    },
    {
        nome: "Maria",
        nota: 10,
    },
]


function verificaAprovados(array, media) {
    let aprovados =[]

    for (let i=0; i < array.length; i++) {
        let {nota, nome} = array[i]
        if(nota >= media) {
            aprovados.push(nome)
        }
    }
    return aprovados;
}
console.log(verificaAprovados(alunos, 7))