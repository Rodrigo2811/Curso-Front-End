function calcular() {
	let valor = Number(document.querySelector("#valor_conta").value);
	let gorjeta = Number(document.querySelector("#gorjeta").value);
	let qtdPessoas = Number(document.querySelector("#qtd_pessoas").value);

	

	//
	let valorPessoa = (valor * gorjeta) / qtdPessoas;



	document.querySelector("#valor_por_pessoa").innerHTML = "Valor por Pessoa R$ " + valorPessoa.toFixed(2);
}