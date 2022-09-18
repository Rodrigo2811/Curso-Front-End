import getMeses from './meses.js'



//filtra
const filtroDias = getMeses().filter((mes) => {
  return mes.dias === 28, 30
})
console.log(filtroDias)

//listagem
let toPrint = ""

filtroDias.forEach(filtroDias => {
  toPrint += filtroDias.mes + ', '
})


//reduce = função com todos os itens do array e devolve um valor único
let somaMeses = filtroDias.reduce((prev, next) => {
  return { dias: prev.dias + next.dias }
})

console.log(somaMeses)


//map = funções em array de retorno individual  (cada valor uma array)

let cachorro = [10, 15, 7, 8, 9]


let years = cachorro.map((cachorro => {
  return cachorro * 7

}))

document.getElementById('lista').innerHTML = toPrint + '<br> Soma dos dias dos meses selecionados: ' + somaMeses.dias + '<br> em 10 anos tem: ' + years + ' dias'


