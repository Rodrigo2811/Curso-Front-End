const frm = document.getElementById('form')
const campos = document.querySelectorAll('.require')
const spans = document.querySelectorAll('.msg-erro')
const iconeErro = document.querySelectorAll('.img-error')
const regexEmail = /\S+@\S+\.\S+/;

function setError(index) {
  campos[index].style.border = '2px solid #e63636'
  spans[index].style.visibility = 'visible'
  iconeErro[index].style.visibility = 'visible'
}

function removeError(index) {
  campos[index].style.border = ''
  spans[index].style.visibility = 'hidden'
  iconeErro[index].style.visibility = 'hidden'
}


frm.addEventListener('submit', (event) => {
  event.preventDefault()
  nameValidate()
  sobreNomeValidate()
  emailValidate()
  senhaValidate()

})

function nameValidate() {
  if (campos[0].value.length < 3) {
    setError(0)
  } else {
    removeError(0)
  }
}
function sobreNomeValidate() {
  if (campos[1].value.length < 3) {
    setError(1)
  } else {
    removeError(1)
  }
}

function emailValidate() {
  if (!regexEmail.test(campos[2].value)) {
    setError(2)
  } else {
    removeError(2)
  }
}

function senhaValidate() {
  if (campos[3].value.length < 3) {
    setError(3)
  } else {
    removeError(3)
  }
}

