function obterMedia(){

    let nota01 = Number(document.getElementById("nota1").value);
    let nota02 = Number(document.getElementById("nota2").value);
    let nota03 = Number(document.getElementById("nota3").value);
    let nota04 = Number(document.getElementById("nota4").value);

    let media = (nota01 + nota02 + nota03 + nota04) /4;

    
    document.getElementById("resultado").innerHTML ="Resultado: " + media.toFixed(2);
    document.getElementById("situacao").innerHTML = "Situação: "; 
    
}if (media > 8) {
        situacao = "Aprovado";
    } else{
        situacao = "reprovado";
    }
    

 
 
 
