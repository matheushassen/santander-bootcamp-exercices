//Cenário 01
function verificarPalindromo(string) {
    if (!string) return "String inexistente";

    return string.split("").reverse().join("") === string;
}

 

//Cenário 02
/*

abba  length      0 = a !== 4-1-0= (a)
0123  4 - 1 = 3   1 = b !== 4-1-1=2(b)
                  2 = b !== 4-1-2=1(b)
                  3 = a !== 4-1-3=0(a)


*/
function verificarPalindromo2(string) {
    if (!string) return "String inexistente";

    for(let i=0; i < string.length/2; i++) {
        if (string[i] !== string[string.length -1 - i]){
            return false
        }
    }
    return true;
}

console.log(verificarPalindromo2("abba"))