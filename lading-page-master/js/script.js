
const btnFechar = document.querySelector('.btn-fechar')
const btnAbrir = document.querySelector('.btn-abrir')
const menuMobile = document.querySelector('.nav-mobile')

btnAbrir.addEventListener('click', () => {

  menuMobile.style.display = 'block',
    btnAbrir.style.display = 'none',
    btnFechar.style.display = 'block'

})

btnFechar.addEventListener('click', () => {


  menuMobile.style.display = 'none',
    btnAbrir.style.display = 'block',
    btnFechar.style.display = 'none'


})





