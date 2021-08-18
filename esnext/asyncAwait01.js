const esperaPor = (tempo = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo)
    })
}

esperaPor(2000)
.then(() => console.log("Executando promise 1......"))
.then(esperaPor)
.then(() => console.log("Executando promise 2......"))
then(esperaPor)
.then(() => console.log("Executando promise 3......"))