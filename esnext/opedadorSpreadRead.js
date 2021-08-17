//operador ... rest(JUNTAR)/epread(ESPALHAR)
//usar rest com paramêtro de função

//usar spread com objeto
const funcionario = {
    nome: "Maria",
    salario: 12348.99
}

const clone = {ativo: true, ...funcionario}
console.log(clone)
console.log()

//usar spread com array
const grupoA = ["João", "Pedro", "Gloria"]
console.log(grupoA)
const grupoFinal = ["Maria", ...grupoA, "Rafaela"]
console.log(grupoFinal)

