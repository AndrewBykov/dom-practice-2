const body = document.querySelector('body')

const inputBackgroundColor = document.querySelector('#input-backgroundColor')
const inputTextColor = document.querySelector('#input-colorText')
const inputDomain = document.querySelector('#input-domain')

const btnBackgroundColor = document.querySelector('#btn-backgroundColor')
const btnTextColor = document.querySelector('#btn-colorText')
const btnDomain = document.querySelector('#btn-domain')

const text = document.querySelector('#text-color')
const link = document.querySelector('#link')

btnBackgroundColor.addEventListener('click', functionBodyBackgroundColor)
btnTextColor.addEventListener('click', functionTextColor)
btnDomain.addEventListener('click', functionDomain)


function functionBodyBackgroundColor() {
  body.style.backgroundColor=inputBackgroundColor.value
}

function functionTextColor() {
  text.style.color=inputTextColor.value
}

function functionDomain() {
  link.href=inputDomain.value
}