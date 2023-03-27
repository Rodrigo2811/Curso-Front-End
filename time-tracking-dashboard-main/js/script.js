
//seleciona os elementos de 1 card
let titulo = document.querySelector('#title')
let hora = document.querySelector('#horas')
let footerInfo = document.querySelector('#footerInfo')
const btnDaily = document.getElementById('btnDaily')
const btnWekly = document.getElementById('btnWekly')
const btnMonth = document.getElementById('btnMonth')


const url = "../data.json"

//Dados que são carregados ao carregar a pagina
function pegarDados(i) {
  fetch(url).then(response => response.json())
    .then(dados => {
      if (dados.erro) {
        console.log("Erro ao acessar o JSON")
        return
      }
      let qtdCards = (dados.atividades.length)
      console.log("Quant. de Cards " + qtdCards)

      atribuirDados(dados, i)
    })

}


pegarDados(0)
pegarDados(1)
pegarDados(2)
pegarDados(3)
pegarDados(4)
pegarDados(5)


//eventos dos botoes para puxar as informações corretas

btnDaily.addEventListener('click', () => {
  function pegarDados(i) {
    fetch(url).then(response => response.json())
      .then(dados => {
        if (dados.erro) {
          console.log("Erro ao acessar o JSON")
          return
        }
        let qtdCards = (dados.atividades.length)
        console.log("Quant. de Cards " + qtdCards)

        atribuirDados2(dados, i)
      })

    btnDaily.classList.add('btnAtivo')
    btnWekly.classList.remove('btnAtivo')
    btnMonth.classList.remove('btnAtivo')

  }

  pegarDados(0)
  pegarDados(1)
  pegarDados(2)
  pegarDados(3)
  pegarDados(4)
  pegarDados(5)
})


btnWekly.addEventListener('click', () => {
  function pegarDados(i) {
    fetch(url).then(response => response.json())
      .then(dados => {
        if (dados.erro) {
          console.log("Erro ao acessar o JSON")
          return
        }
        let qtdCards = (dados.atividades.length)
        console.log("Quant. de Cards " + qtdCards)

        atribuirDados(dados, i)
      })

    btnDaily.classList.remove('btnAtivo')
    btnWekly.classList.add('btnAtivo')
    btnMonth.classList.remove('btnAtivo')
  }
  pegarDados(0)
  pegarDados(1)
  pegarDados(2)
  pegarDados(3)
  pegarDados(4)
  pegarDados(5)
})


btnMonth.addEventListener('click', () => {
  function pegarDados(i) {
    fetch(url).then(response => response.json())
      .then(dados => {
        if (dados.erro) {
          console.log("Erro ao acessar o JSON")
          return
        }
        let qtdCards = (dados.atividades.length)
        console.log("Quant. de Cards " + qtdCards)

        atribuirDados3(dados, i)
      })

    btnDaily.classList.remove('btnAtivo')
    btnWekly.classList.remove('btnAtivo')
    btnMonth.classList.add('btnAtivo')
  }
  pegarDados(0)
  pegarDados(1)
  pegarDados(2)
  pegarDados(3)
  pegarDados(4)
  pegarDados(5)
})


//selecionar todos os cads por class
let titulos = document.getElementsByClassName('title')
let horas = document.getElementsByClassName('horas')
let footersInfors = document.getElementsByClassName('footerInfo')

function atribuirDados(dados, i) {
  titulos[i].innerHTML = dados.atividades[i].title
  horas[i].innerHTML = dados.atividades[i].timeframes.weekly.current + " hrs"
  footersInfors[i].innerHTML = "Last week " + dados.atividades[i].timeframes.weekly.previous
}

function atribuirDados2(dados, i) {
  titulos[i].innerHTML = dados.atividades[i].title
  horas[i].innerHTML = dados.atividades[i].timeframes.daily.current + "hrs"
  footersInfors[i].innerHTML = "Last daily " + dados.atividades[i].timeframes.daily.previous
}


function atribuirDados3(dados, i) {
  titulos[i].innerHTML = dados.atividades[i].title
  horas[i].innerHTML = dados.atividades[i].timeframes.monthly.current + "hrs"
  footersInfors[i].innerHTML = "Last monthly " + dados.atividades[i].timeframes.monthly.previous
}






