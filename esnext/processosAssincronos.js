// callback > promise > async/await
//callback chama de volta um bloco de códido depois que uma ação é executada (um afunção passada como argumento)


const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

console.log(1)
//callback
// fs.readFile("./n1.txt", (err, contents) => {
//    fs.readFile("./n2.txt", (erro2, conteudo2) => {
//         console.log(err, contents)
//         console.log(erro2, String(conteudo2))
//    })
// })

//promisse
// promise diferente de callback em vez de dizer que vai retornar algo, retorna de imediato uma promessa de retornar algum valor futuramente
const readFile = file => new Promise((resolve, reject) =>  {
    fs.readFileSync(file, (err, content) => {
        if (err) {
            reject(err)
        } else {
            resolve(content)
        }
    })
})
readFile('./n1.txt')
    .then(content => 
        console.log(content))

// async/await - açúcar sintático em cima promisse (sereja do bolo)
//camada por cima da promise

const init = async() => {
    try {
        const content = await readFile('./n1.txt')
        const content2 = await readFile('/n1.txt')

        console.log(content)
        console.log(content2)
    }catch(err) {
        console.log(err)
    }
}
console.log(2)

console.log(3)


