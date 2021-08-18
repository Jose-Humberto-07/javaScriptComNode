const funcionadoOuNao = (valor, chanceErro) => {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject("Ocorreu um erro!")
        } else {
            resolve(valor)
        }
    })
}

funcionadoOuNao("Tetando..........", 0.1)
.then(valor => console.log(valor))
.catch(erro => console.log(`${erro}`))
.then(() => console.log("FIM"))