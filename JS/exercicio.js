// Exercicio 1- Respçva as operações.
/**
 * 10 + 15 = 25 (numer)
 * "10" + 2 = 102 (string) 
 * "10" * 2 = 20 (number)
 * "10" / 3=  3.33333 (number)
 * "10" % 3 = 1 (number)
 *  10 + true = 11 (number)
 *  10 == "10" = true (boolean)
 * 10 === "10" = false (boolean)
 * 10 < 11 = true (boolean)
 * 10 > 12 = false (boolean)
 * 10 <= 10.1 = true (boolean)
 * 10 > 9.99 = true (boolean)
 * 10 != "dez" = true (boolean)
 * 10 + true = 11 (number)
 * "dez" + true = deztrue (string)
 * 10 + false = 10 (number)
 * 10 * false = 0 (number)
 * true + true = 2 (number)
 * 10 ++ = sem resultado (incremento)
 * 10 -- = sem resultado  (decremento)  
 * 1 & 1 =  1 (number)
 * 1 & 0 = 0 (number)
 * 0 & 0 = 0 (number)
 * 1 & 0 = 0 (number)
 * 0 / 1 = 0 (number)
 * 5 + 5 == 10 = true (boolean)
 * "5" * 2 > 9 = true (boolean)
 * (10 + 10) * 2 = 40 (number)
 * 10 + 10 * 2 = 30 (number)
 */
/* Exercicio 2 - Responda as perguntas de acordo com as variáveis*/
/*
 * Reposta A - false;
 * Resposta B - true;
 * Resposta c - false;
 * Resposta D - true;
 * Resposta E - 
 * Resposta F - 21 caracteres.
 */
/**
 * {
 var branco = "preto";
 var preto = "cinza";
 var cinza = "branco";
 var carro = "preto";
 var valor = 30000;
 var prestacao = 750; 

 var resultado = (branco + preto + cinza + carro);

console.log(resultado)

}

 */
function obterPrestacao(){
var valor = 30000;
var prestacao = 750; 

let prestacoes = (valor / prestacao);

document.getElementById(prestacoes).innerHTML = "Prestações: ";

}
