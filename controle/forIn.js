const notas = [6.7, 7.4, 9.8, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: "Ana",
    sobreNome: "Nascimento",
    idade: 29,
    peso: 62.9
}

for (let atributos in pessoa) {
    console.log(`${atributos} = ${pessoa[atributos]}`)
}