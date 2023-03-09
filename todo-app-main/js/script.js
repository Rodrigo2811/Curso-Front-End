const tarefa = document.getElementById('inpTarefa')
const lista = document.getElementById('lista')
const qtdtarefas = document.getElementById('nTarefas')
const erro = document.getElementById('erro')
const qtd = document.getElementById('qtd')


qtd.innerHTML = 0

let contador = 0

function acrescentar() {
  contador++
  qtd.innerHTML = contador

}


function decrementar() {
  contador--
  qtd.innerHTML = contador

}


function validar() {
  if (tarefa.value === "") {
    erro.innerHTML = 'Digite uma tarefa'
    erro.style.color = 'white'
    tarefa.focus()
  }
  else {
    criarParagrafo()
    limparCampo()

  }
}

tarefa.addEventListener('focusout', (e) => {

  if (validar === validar) {
    validar()

  } else {
    e.preventDefault()

  }

})
function criarParagrafo() {

  lista.innerHTML += `<p> <checkbox class='selecionar' onclick='selecionar()'>
<svg width="11" height="9"><path fill="none" stroke="#fff" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg></checkbox> <span class="tarefa"> ${tarefa.value}</span> <button class="remover" onclick='excluir()'>
<svg width="18" height="18"><path id="svgFechar" fill="red" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg></button></p>`
  acrescentar()

}

function limparCampo() {

  tarefa.value = ''

}


function selecionar() {
  const checkEL = event.target
  const parentCheck = checkEL.closest('checkbox')
  const parentCheck2 = checkEL.closest('p')

  if (checkEL.classList.contains('selecionar')) {
    parentCheck.classList.toggle('ativo'),
      parentCheck2.classList.toggle('ativo2')

  }

}



function excluir() {
  const excluir = document.querySelector('p')
  excluir.remove()
  decrementar()
}

function light() {
  const btn = document.querySelector('.btn-light')

  if (btn.value === 'light') {

    document.querySelector('body').style.backgroundColor = 'hsl(235, 21%, 11%)',
      document.querySelector('body').style.color = 'white',
      document.getElementById('inpTarefa').style.backgroundColor = 'hsl(235, 24%, 19%)',
      document.querySelector('.containerLinstaTarefa').style.backgroundColor = 'hsl(235, 24%, 19%)',
      document.querySelector('input').style.color = 'white',
      document.querySelector('.img-Light').src = '../images/bg-desktop-dark.jpg',
      document.querySelector('.darck').style.visibility = 'visible',
      document.querySelector('.light').style.visibility = 'hidden',
      document.getElementById('btnAll').style.color = '#fff',
      document.getElementById('btnActive').style.color = '#fff',
      document.getElementById('btnCompleted').style.color = '#fff',
      document.getElementById('btnClear').style.color = '#fff'


  }
}

function darck() {
  const btndarck = document.querySelector('.btn-darck')
  if (btndarck.value === 'darck') {

    document.querySelector('body').style.backgroundColor = 'white',
      document.querySelector('body').style.color = 'black',
      document.getElementById('inpTarefa').style.backgroundColor = 'white',
      document.getElementById('inpTarefa').style.Color = 'red',
      document.querySelector('.containerLinstaTarefa').style.backgroundColor = 'white',
      document.querySelector('H1').style.color = 'white',
      document.querySelector('input').style.color = 'black',
      document.querySelector('.img-Light').src = '../images/bg-desktop-light.jpg',
      document.querySelector('.darck').style.visibility = 'hidden',
      document.querySelector('.light').style.visibility = 'visible',
      document.getElementById('btnAll').style.color = 'black',
      document.getElementById('btnActive').style.color = 'black',
      document.getElementById('btnCompleted').style.color = 'black',
      document.getElementById('btnClear').style.color = 'black'

  }
}


