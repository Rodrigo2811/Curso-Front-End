
const frm = document.getElementById('form-taxa')
const resp1 = document.querySelector('.resultado1')
const resp2 = document.querySelector('.resultado2')
const inpvalor = document.getElementById('inpValorConta').value
const inpQtd = document.getElementById('inpQtdPessoas').value
const custom = document.querySelector('.btn-custom').value


console.log(inpvalor)
console.log(inpQtd)
frm.addEventListener('submit', (e) => {

  e.preventDefault()



})

function taxaIput() {

  let valorConta = Number(inpvalor)
  custom.value = custom
  let gorjeta = (inpvalor * custom) / 100
  let valorPessoa = (valorConta / inpQtd) + gorjeta

  resp1.innerHTML = gorjeta.toFixed(2)
  resp2.innerHTML = valorPessoa.toFixed(2)

}

function taxa(numero) {

  let valorConta = Number(inpvalor)
  let qtdPessoas = Number(inpQtd)
  let gorjeta = valorConta * numero
  let valorPessoa = (valorConta / qtdPessoas) + gorjeta

  resp1.innerHTML = gorjeta.toFixed(2)
  resp2.innerHTML = valorPessoa.toFixed(2)


}

function reset() {
  const resetar = document.querySelector('#btn-reset')
  resp1.innerHTML = ""
  resp2.innerHTML = ""


}
