const lista = ["Ney", "Messi", "Cr7"]

lista.forEach(nome => console.log(nome))

for (nome in lista) {
    console.log(nome)
}
console.log()
for (nome of lista) {
    console.log(nome)
}

lista.forEach((index, nome) => console.log(index, nome))

for (let letra of "back and") {
    console.log(letra)
}
console.log()
const assuntosMap = ["Map", "set", "promise"]

for (let assunto of assuntosMap) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ["Map", {abordado: true}],
    ["Set", {abordado: true}],
    ["Promisse"]
])

for (let chave of assuntosMap.keys) {
    console.log(chave)
}