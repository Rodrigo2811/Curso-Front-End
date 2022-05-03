function validaCampo(frm){

    if (frm.nome.value == "" || frm.nome.value == null || frm.nome.value.length < 3){
        alert("Preencha seu nome.");
        frm.nome.focus();
        return false;
    }

    if (frm.email.value.indexOf("@") == -1 || frm.email.valueOf(".") == -1 || frm.email.value == "" || frm.email.value == null){

        alert ("Informe e-mail válido.");
        frm.email.focus();
        return false;

    }

    if(frm.telefone.value == "" || frm.telefone.value == null || frm.telefone.value [0-9]){

        alert("Informe o telefone");
        frm.telefone.focus();
        return false;

    }

    if(frm.mensagem.value =="" || frm.mensagem.value == length < 10){

        alert ("Digite sua mensagem");
        frm.mensagem.focus();
        return false;


    }

}
 





  
