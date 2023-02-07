const av1 = document.getElementById('av1')
const av2 = document.getElementById('av2')
const av3 = document.getElementById('av3')
const av4 = document.getElementById('av4')
const av5 = document.getElementById('av5')

function selecionar1() {
  av1.classList.toggle('ativo')

}
function selecionar2() {
  av2.classList.toggle('ativo')
}
function selecionar3() {
  av3.classList.toggle('ativo')
}
function selecionar4() {
  av4.classList.toggle('ativo')
}
function selecionar5() {
  av5.classList.toggle('ativo')
}






const avaliacao = document.querySelectorAll('.circulo')
const resp = document.querySelector('.resp')
const container = document.querySelector('.container')
const container2 = document.querySelector('.container-confimarcao')
const btnEnviar = document.querySelector('.btn-enviar')




let resposta = ""
for (let i = 0; i < avaliacao.length; i++) {

  avaliacao[i].addEventListener('click', (e) => {
    e.preventDefault()
    console.log(avaliacao[i].value)
    btnEnviar.addEventListener('click', (e) => {
      resp.innerHTML = `You selected ${avaliacao[i].value} out of 5`,
        container.style.display = 'none',
        container2.style.display = 'block'
      e.preventDefault()
    })

  })
}



