const numbers = [2, 4, 6, 8, 10, 17, 15]

function onlyEvenNumbers(array) {
   return array.filter((item) => item % 2 === 0)
}

console.log(onlyEvenNumbers(numbers))