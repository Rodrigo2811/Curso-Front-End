
class AtVirtual {

    constructor(amora) {

        this.amora = amora
    }
    //Inicio do atendimento virtual com a mensgem de apresentcao
    apresentacao() {
        console.log(' Olá, eu sou Amora a atendente virtual')

    }

    //Perguntando o que o cliente quer fazer
    pergunta() {
        console.log(' Em que eu posso ajudar? Escolha as opções a seguir para que posssamos continuar')

    }

    //Opcoes para 
    opcoes() {

        const pg = '  01 - Pagamento'
        const can = ' 02 - Cancelamento'
        const atende = '  03 - Atendimento'
        const voltar = ' 04 - retornar ao menu anterior'


        console.log(` Escolha uma das opções a seguir para continuar o atendimento: \n ${pg}\n, ${can}\n, ${atende}\n, ${voltar}`)

    }


}

const chat = new AtVirtual('Amora')
chat.apresentacao()
chat.pergunta()
chat.opcoes()