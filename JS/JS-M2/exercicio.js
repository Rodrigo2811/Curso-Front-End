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
 */

 function obterSoma() {

    var branco = "preto";
    var preto = "cinza";
    var cinza = "branco";
    var carro = "preto";
        
    var branco = String(document.getElementById("cor_01").value);
    var preto = String(document.getElementById("cor_02").value);
    var cinza = String(document.getElementById("cor_03").value);
    var carro = String(document.getElementById("cor_04").value);


    let qtd = (branco + preto + cinza + carro);

    Number(document.getElementById("resultado02").innerHTML = "Quantidade Caracteres: " + qtd.length);
   
}


function obterPrestacao() {

    var valor = Number(document.getElementById("valor_carro").value);
    var prestacao = Number(document.getElementById("valor_prestacao").value);
    var entrada = Number(document.getElementById("valor_entrada").value);

    let prestacoes = (valor - entrada) / prestacao;

   Number(document.getElementById("resultado").innerHTML = "Prestações: " + prestacoes);

}

