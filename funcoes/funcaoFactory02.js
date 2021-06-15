function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Notebook", 2199.49))
console.log(criarProduto("Hilux", 100000))
console.log(criarProduto("note*", 1200.49))