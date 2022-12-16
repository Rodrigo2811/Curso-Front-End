function validaForm() {
  const masSobre = new XMLHttpRequest();
  masSobre.onload = function () {

  }
  masSobre.open("GET", '/sucesso.html');
  masSobre.send("");

}


$(document).ready(function () {
  $('#formulario').each(function () {
    this.reset();
  });