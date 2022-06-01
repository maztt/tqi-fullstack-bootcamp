var buttonPlus = document.getElementsByClassName('increment')[0]
buttonPlus.addEventListener('click', increment)

var buttonMinus = document.getElementsByClassName('decrement')[0]
buttonMinus.addEventListener('click', decrement)

let count = 0

const CURRENT_NUMBER = document.getElementById('currentNumber')

function increment() {
  count++
  CURRENT_NUMBER.innerHTML = count
  if (count == 5) {
    buttonPlus.disabled = true
  }
  if (count > 0) {
    CURRENT_NUMBER.style.color = 'white'
    CURRENT_NUMBER.style.fontWeight = 'bold'
  }
  if (count > -5) {
    buttonMinus.disabled = false
  }
}

function decrement() {
  count--
  CURRENT_NUMBER.innerHTML = count
  if (count == -5) {
    buttonMinus.disabled = true
  }
  if (count < 0) {
    CURRENT_NUMBER.style.color = 'red'
    CURRENT_NUMBER.style.fontWeight = 'bold'
  }
  if (count < 5) {
    buttonPlus.disabled = false
  }
}
