const maca = {
    value:2,
}

const laranja = {
    value:3,
}

function mapComThis(array, thisArg) {
   return array.map(
    function (item) {
        return item * this.value
    }, thisArg
   )
}

function mapSemThis(array) {
    return array.map((item) => item * 2)
}

const numbers = [2, 4, 6, 8, 10]

console.log('this -> maçã', mapComThis(numbers, maca))
console.log('this -> laranja', mapComThis(numbers, laranja))

console.log('Sem this *2 ->',mapSemThis(numbers))
