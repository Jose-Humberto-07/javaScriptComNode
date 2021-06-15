function Pessoa(nome, idade) {
    
        this.nome = nome
        this.idade = idade
    

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("João")
p1.falar()