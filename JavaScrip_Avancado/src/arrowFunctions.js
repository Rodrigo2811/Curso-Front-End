//"use strict"

function Pessoa() {

  this.idade = 0

  setInterval(() => {
    console.log(this.idade++)
  }, 2000);

}

