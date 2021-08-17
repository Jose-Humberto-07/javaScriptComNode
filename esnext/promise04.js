// chmar vários promisses ao mesmo tempo

const gerarNumeroENtre = (min, max, tempo) => {
    if (min > max) [max, min] = [min, max]
    
    return new Promise(resolve => {
       setTimeout(function() {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
       }, tempo)
    })
} 

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumeroENtre(1, 60, 4000),
        gerarNumeroENtre(1, 60, 1000),
        gerarNumeroENtre(1, 60, 500),
        gerarNumeroENtre(1, 60, 3000),
        gerarNumeroENtre(1, 60, 100),
        gerarNumeroENtre(1, 60, 1500)
    ])
}

gerarVariosNumeros()
    .then(numeros => console.log(numeros))


