var currentNumber = document.getElementById("currentNumber")
var adicionar = document.getElementById('adicionar')
var subtrair = document.getElementById('subtrair')
var newNumber = 0

adicionar.addEventListener('click', increment)
adicionar.addEventListener('click', changeColor)
subtrair.addEventListener('click' , decrement)
subtrair.addEventListener('click', changeColor)


function increment() {
    newNumber = newNumber + 1
    currentNumber.innerHTML = newNumber
}

function decrement() {
    newNumber = newNumber - 1
    currentNumber.innerHTML = newNumber
}

function changeColor() {
    if (currentNumber.innerHTML > 0) {
        currentNumber.style.color = "blue"
    } else {
        currentNumber.style.color = "red"
    }
}
