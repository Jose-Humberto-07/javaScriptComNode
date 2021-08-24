const esperaPor = (tempo = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo)
    })
}

esperaPor(2000)
    .then(() => console.log("Executando promise 1......"))
    .then(esperaPor)
    .then(() => console.log("Executando promise 2......"))
    .then(esperaPor)
    .then(() => console.log("Executando promise 3......"))

const retornarValor = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

const executar = async() => {
    let valor = await retornarValor()

    await esperaPor(1500)
    console.log(`Async/await ${valor}.....`)

    await esperaPor(1500)
    console.log(`Async/await ${valor + 1}.....`)

    await esperaPor(1500)
    console.log(`Async/await ${valor + 2}.....`)
}

executar()