const prompt = require("prompt-sync")()
class AtVirtual {

    constructor(amora) {

        this.amora = amora
    }
    //Inicio do atendimento virtual com a mensgem de apresentcao
    apresentacao() {
        console.log('Olá, eu sou Amora a atendente virtual')

    }

    //Perguntando o que o cliente quer fazer
    pergunta() {
        console.log('Em que eu posso ajudar? Escolha as opções a seguir para que posssamos continuar')

    }

    //Opcoes para 
    opcoes() {

        const pagamento = '1 - Pagamento'
        const cancelamento = '2 - Cancelamento'
        const atende = '3 - Atendimento'
        const pedido = '4 - Pedidos'
        const voltar = '5 - retornar ao menu anterior'

        console.log(`Escolha uma das opções a seguir para continuar o atendimento: \n ${pagamento}\n ${cancelamento}\n ${atende}\n ${pedido}\n ${voltar}`)
        const opcao = prompt('Escolha a opção desejada: ')

        if (opcao == 1) {
            pagamentos()
        }
        else if (opcao == 2) {
            cancelamento()
        }
        else if (opcao == 3) {
            atendimento()
        }
        else if (opcao == 4) {
            console.log('pedidos')
        }
        else if (opcao == 5) {
            voltaMenu()
        }
    }

}


const chat = new AtVirtual('Amora')
chat.apresentacao()
chat.pergunta()
chat.opcoes()


//pagamentos

function pagamentos() {

    const boleto = '1 - boleto'
    const pix = '2 - Pix'
    console.log(`Escolha a opção desejada: \n ${boleto}\n ${pix}\n `)
    const opcao = prompt('Escolha o tipo de pagamento: ')

    if (opcao == 1) {
        console.log('Leia o boleto')
        const sim = "y"
        const nao = "n"
        console.log('Deseja fazer mas algum pagamento?')
        const escolha = prompt("Digite Y ou N: ")

        if (escolha == sim) {
            console.log(`Escolha a opção desejada: \n ${boleto}\n ${pix}\n `)
            const opcao = prompt('Escolha o tipo de pagamento: ')
        }
        else {
            chat.opcoes()
        }

    }
    else if (opcao == 2) {
        console.log('digite a chave pix')
        const sim = "y"
        const nao = "n"
        console.log('Deseja fazer mas algum pagamento?')
        const escolha = prompt("Digite Y ou N: ")

        if (escolha == sim) {
            console.log(`Escolha a opção desejada: \n ${boleto}\n ${pix}\n `)
            const escolha = prompt("Digite Y ou N: ")
        }
        else {
            chat.opcoes()
        }

    }


}

//cancelamento

function cancelamento() {
    const cheque = '1 - Cheque'
    const boleto = '2 - boleto'
    console.log(`Escolha a opção que deseja cancelar \n${cheque} \n${boleto}`)
    const atendimento = prompt('Escolha opção que deseja cancelar: ')

    if (atendimento == cheque) {
        const numeroCheque = prompt('Digite o numero do cheque: ')
    } else {
        const numeroBoleto = prompt('Digite o numero do boleto: ')
    }

}

//Atendimento

function atendimento() {
    const nome = prompt('Digite seu nome: ')
    const valorfatura = '1 - Fatura'
    const debitoIndevido = '2 - Debito indevido'
    const pagamentoFatura = '3 - Pagamento de fatura'
    console.log(`Olá ${nome}, sou Margarida sua atendente virtual, no que posso te  ajudar? Escolha as opções a seguir para que possa da continuidade ao seu atendimento`)
    console.log(`Digite a opção desejada \n${valorfatura} \n${debitoIndevido} \n${pagamentoFatura}`)


}

function voltaMenu() {
    chat.opcoes()
}