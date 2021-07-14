const porta = 3003

const express = require("express")
const app = express()


app.get("/produtos", (require, response, next) => {
    response.send({
        nome: "Notebook",
        preco: 1299.99 
    }) // converter para JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})