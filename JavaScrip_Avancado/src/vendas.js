import * as carros from './carros.js'
import { getCarros } from './carros.js'

const modeloCarros = getCarros().filter((carro) => {
  return carro.Modelo === 'Uno'
})

console.log(modeloCarros)

let anoModelo = ''

modeloCarros.forEach(anoFab => {
  anoModelo += anoFab.ano + ', '


});

//console.log(anoModelo)


let somaCarros = modeloCarros.reduce((pInicial, pFinal) => {

  return { Preco: pInicial.Preco + pFinal.Preco }
})

//console.log(somaCarros)


let pCarros = [22000, 47000, 25000, 86000, 92000, 101000, 43000, 35000, 52000]


let desconto = pCarros.map((pCarros) => {

  return pCarros * 0.10
})

//console.log(desconto)


//document.getElementById('listaCarros').innerHTML = "<br> Esses são os modelos disponiveis" + modeloCarros + "<br> Preços: " + pCarros + " <br> valor do desconto por veiculo " + desconto













