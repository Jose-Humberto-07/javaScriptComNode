const gerarNumeroEntre = (min, max, numerosProibidos) => {
    if (min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject("Número repetido!")
        } else {
            resolve(aleatorio)
        }
        
    })
} 

gerarNumeroEntre(1, 10, [2, 4, 5, 7, 8])
.then(valor => console.log(valor))
.catch(valor => console.log(valor))

const gerarMegaSena = async(qtdDeNumeros) => {
   try {
    const numeros = []
    for (let _ of Array(qtdDeNumeros).fill()) {
        numeros.push(await gerarNumeroEntre(1, 60, numeros))
    }
    return numeros
   } catch(e) {
       throw "Que chato!!!"
   }
}

gerarMegaSena(7)
.then(console.log)
.catch(console.log)