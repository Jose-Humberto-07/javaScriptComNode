//usando callbacks para fazer chamadas

setTimeout(() => {
    console.log("Executando ballback.......")

    setTimeout(() => {
        console.log("Executando ballback.......")

        setTimeout(() => {
            console.log("Executando ballback.......")
        }, 3000) 
    }, 3000) 
}, 3000) 

// usando promisses para fazer chamadas assíncronas

const esperarPor = (tempo = 2000) => {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Executando Promisse.......")
            resolve("Vishhhhhhhhh")
        }, tempo)
    })
}

esperarPor(3000).then(texto => console.log(texto))

console.log

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)