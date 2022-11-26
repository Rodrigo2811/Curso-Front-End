function animar(e) {
  const btn = document.getElementsByClassName("dropdown")[e]
  btn.classList.toggle('girar')

}
const menu = document.querySelector('.menu-mobile')
const botao = document.querySelector('.container-sanduiche')
const btnFechar = document.querySelector('.btn-fechaMenu')

event.preventDefaault()
menu.addEventListener('click', abriMenu)

function abriMenu(e) {
  menu.classList.toggle('abrir')
  botao.classList.toggle('ativo')
}







