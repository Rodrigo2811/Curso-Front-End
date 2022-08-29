class Movimentacao {


    constructor(banco = 'padrao', nome = '', saldo = 0) {
        this.banco = banco,
            this.nome = nome,
            this.saldo = saldo
    }
}

class Registro {
    constructor(dia, mes, ano) {
        this.dia = dia,
            this.mes = mes,
            this.ano = ano
        this.movimentacoes = []
    }

    novaMovimentacao(...movimentacoes) {
        movimentacoes.forEach(lancamento => this.movimentacoes.push(lancamento)
        )
    }
    resumo() {
        let valorAtualizado = 0
        this.movimentacoes.forEach(lancamento => {
            valorAtualizado += lancamento.saldo
        })
        return valorAtualizado
    }
}

const m01 = new Movimentacao('Banco RL', 'Salario', 1800)
const m02 = new Movimentacao('Banco RL', 'comissão', 500)
const m03 = new Movimentacao('Banco RL', 'Despesas', -840)

const registro01 = new Registro(28, 08, 2022)
registro01.novaMovimentacao(m01, m02, m03)

const registro02 = new Registro(27, 08, 2022)
registro02.novaMovimentacao(m01)

const registro03 = new Registro(27, 08, 2022)
registro03.novaMovimentacao(m02)

const registro04 = new Registro(27, 08, 2022)
registro04.novaMovimentacao(m03)
console.log('Pagamento de salario R$ ' + registro02.resumo())
console.log('Pagamento de Comissão R$ ' + registro03.resumo())
console.log('Pagamento de Despesas R$ ' + registro04.resumo())
console.log('Saldo em conta ' + registro01.resumo())
