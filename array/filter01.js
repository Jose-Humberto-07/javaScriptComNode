const produtos = [
    {nome: "Notebook", preco: 2500, fragil: true},
    {nome: "ipade pro", preco: 4200, fragil: true},
    {nome: "copo vidro", preco: "12.50", fragil: true},
    {nome: "copo plástico", preco: 20, fragil: false}

]


console.log(produtos.filter((p) => {
    return true
}))
console.log(produtos.filter((p) => {
    return false
}))
console.log(produtos.filter((p) => {
    return p.preco > 2500
}))
