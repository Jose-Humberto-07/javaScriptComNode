// função FACTORY é uma função que retorna um objeto

//fábrica de objetos, posso criar vários objetos paprecidos com uma função

//Factory simples
function criarPessoa() {
    return {
        nome: "Ana",
        sobreNome: "Silva"
    }
}

console.log(criarPessoa())
console.log(criarPessoa())
console.log(criarPessoa())