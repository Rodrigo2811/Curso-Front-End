
//preenchimento de dados dno form para o cartao
window.oninput = function (event) {

  const campo = event.target.id; // pega o id do campo que chamou o evento

  if (campo == "inCartao") {
    document.querySelector('.inpCartao').value = document.querySelector('#inCartao').value;
  } else if (campo == "inpCartao") {
    document.querySelector('#inCartao').value = document.querySelector('.inpCartao').value;
  }
  if (campo == "inNome") {
    document.querySelector('.inpNome').value = document.querySelector('#inNome').value;
  } else if (campo == "inpNome") {
    document.querySelector('#inNome').value = document.querySelector('.inpNome').value;
  }
  if (campo == "inMes") {
    document.querySelector('.inpMes').value = document.querySelector('#inMes').value;
  } else if (campo == "inpValinpMesidade") {
    document.querySelector('#inMes').value = document.querySelector('.inpMes').value;
  }
  if (campo == "inAno") {
    document.querySelector('.inpAno').value = document.querySelector('#inAno').value;
  } else if (campo == "inpAno") {
    document.querySelector('#inAno').value = document.querySelector('.inpAno').value;
  }
  if (campo == "inSeguranca") {
    document.querySelector('.inpSeguranca').value = document.querySelector('#inSeguranca').value;
  } else if (campo == "inpSeguranca") {
    document.querySelector("#inSeguranca").value = document.querySelector('.inpSeguranca').value;
  }
};


function mcc(v) {
  v = v.replace(/\D/g, ""); // Permite apenas dígitos
  v = v.replace(/(\d{4})/g, "$1."); // Coloca um ponto a cada 4 caracteres
  v = v.replace(/\.$/, ""); // Remove o ponto se estiver sobrando
  v = v.substring(0, 19)// Limita o tamanho

  return v;
}

//validacao de formulario
const form = document.getElementById('formulario');

if (form.addEventListener) {
  form.addEventListener('submit', validaForm)
} else if (form.attachEvent) {
  form.attachEvent('onsubmit', validaForm)
}


function validaForm(evt) {
  const nome = document.getElementById('inNome');
  const cartao = document.getElementById('inCartao');
  const mes = document.getElementById('inMes');
  const ano = document.getElementById('inAno');
  const cvc = document.getElementById('inSeguranca');
  const msgErro = document.getElementById('msg-erro');

  if (nome.value == "") {

    nome.focus();
    nome.style.border = "2px solid  hsl(0, 100%, 66%)";
    return false;
  } else {
    nome.style.border = "2px solid hsl(249, 99%, 64%)"
  }

  if (cartao.value == "" || length.value == 16) {
    cartao.style.border = "2px solid  hsl(0, 100%, 66%)";
    cartao.focus();
    return false
  } else {
    cartao.style.border = "2px solid hsl(249, 99%, 64%)"
  }
  if (mes.value == "") {
    mes.style.border = "2px solid  hsl(0, 100%, 66%)"
    mes.focus();
    return false;
  } else {
    mes.style.border = "2px solid hsl(249, 99%, 64%)"
  }

  if (ano.value == "") {
    ano.style.border = "2px solid  hsl(0, 100%, 66%)"
    ano.focus();
    return false;
  } else {
    ano.style.border = "2px solid hsl(249, 99%, 64%)"
  }

  if (cvc.value == "") {
    cvc.style.border = "2px solid hsl(0, 100%, 66%)"
    cvc.focus();
    return false;
  } else {
    cvc.style.border = "2px solid hsl(249,99%, 64%)"
  }

  if (!msgErro) {
    evt.preventDefault();
  } else {
    window.open("./sucesso.html")
  }

}

//mensagem de erro form
document.querySelector(".btn-confirm").addEventListener("click", validar, false);

function validar() {
  const msgErro = document.getElementById('msg-erro');
  const nome = document.getElementById('inNome');
  const cartao = document.getElementById('inCartao')
  const mes = document.getElementById('inMes');
  const ano = document.getElementById('inAno');
  const cvc = document.getElementById('inSeguranca');

  if (nome.value.length == 0) {
    msgErro.style.color = 'red',
      msgErro.innerHTML = 'Campo com * Obrigatorio'
  } else {
    msgErro.innerHTML = ''
  }
  if (cartao.value == 0) {
    msgErro.style.cor = 'red',
      msgErro.innerHTML = 'Campo com * Obrigatorio'
  } else {
    msgErro.innerHTML = ""
  }
  if (mes.value == "") {
    msgErro.style.color = 'red',
      msgErro.innerHTML = 'Campo com * Obrigatorio'
  } else {
    msgErro.innerHTML = ""
  }
  if (ano.value == "") {
    msgErro.style.color = 'red',
      msgErro.innerHTML = 'Campo com * Obrigatorio'
  } else {
    msgErro.innerHTML = ""
  }
};







//function mascara(o, f) {
//v_obj = o
//v_fun = f
//setTimeout("execmascara()", 1)
//}
//function execmascara() {
//v_obj.value = v_fun(v_obj.value)
//}
//function mcc(v) {
//v = v.replace(/\D /g, ".");
//v = v.replace(/^(\d{4})(\d)/g, "$1 $2");
//v = v.replace(/^(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3");
//v = v.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3 $4");

//  return v;
//}

function id(el) {
  return document.getElementById(el);
}
window.onload = function () {
  id('inCartao').onkeypress = function () {
    mascara(this, mcc);
  }
}