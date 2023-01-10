const data = document.getElementById('data')
const horas = document.getElementById('horas')
const minuto = document.getElementById('minutos')
const segundos = document.getElementById('segundos')


const relogio = setInterval(function time() {
  let date = new Date();
  let dia = date.getDate()
  let hora = date.getHours();
  let minutos = date.getMinutes();
  let segundo = date.getSeconds();

  console.log(date)

  if (dia < 10) dia = '0' + dia

  if (hora < 10) hora = '0' + hora

  if (minutos < 10) minutos = '0' + minutos

  if (segundo < 10) segundo = '0' + segundo


  data.textContent = dia
  horas.textContent = hora
  minuto.textContent = minutos
  segundos.textContent = segundo

})