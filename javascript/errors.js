function verficaArray(array, num) {
    try {
        if (!array && !num) throw new ReferenceError("Envie os parametros!")
        if (typeof array !== 'object') throw new TypeError("Array precisa ser do tipo object!")
        if (typeof num !== 'number') throw new TypeError("Precisa ser um número!")
        if (array.length !== num) throw new RangeError('Tamanho é inválido!')

        return array

    } catch (e) {
        if(e instanceof ReferenceError) {
            console.log("Esté erro é um ReferenceError!")
            console.log(e.message)
        }else if(e instanceof TypeError) {
            console.log("Esté erro é um TypeError!")
            console.log(e.message)
        }else if(e instanceof RangeError) {
            console.log("Esté erro é um RangeError!")
            console.log(e.message)
        }else {
            console.log("Tipo de erro não esperado: " + e)
        }
    }    
}

console.log(verficaArray([1, 2,3,4,5], 5))

