function obterMedia(){
    let vl1 = Number(document.getElementById("valor_1").value);
    let vl2 = Number(document.getElementById("valor_2").value);
    let vl3 = Number(document.getElementById("valor_3").value);

    let media = (vl1 + vl2 + vl3) /3;

    document.getElementById("resultado").innerHTML = "Resultado: " + media.toFixed(2);
}