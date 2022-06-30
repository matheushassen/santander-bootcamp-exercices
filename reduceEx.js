// Some todos os números de um array
/* 
function somaNumeros(array) {
    return array.reduce(function(prev, current) {
        console.log({prev})
        console.log({current})
        return prev + current
    })
}

const array = [5, 2, 4]

console.log(somaNumeros(array))*/

// Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
const lista = [
    {
        name: 'sabão em pó',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name:'toalha',
        preco: 30
    }
]

const saldoDisponivel = 100

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada', index +1 )
        console.log({prev})
        console.log({current})
        return prev - current.preco
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista))