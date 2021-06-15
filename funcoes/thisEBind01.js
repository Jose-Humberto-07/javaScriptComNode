// a função BIND resolve o this no java script, que se for chamado fora de um componente (um objeto por exempo, ele não vai ser acessado), mas se chamar com o BIND ele será acessado...

const pessoa = {
    saudacao: "Bom Dia",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //paradigmas em conflito: funcional x POO

//

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

