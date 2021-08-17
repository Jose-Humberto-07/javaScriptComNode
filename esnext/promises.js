const falarDepois = (segundos, frase) => {
    return new Promise((resolve, reject) => {
        selTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}


falarDepois(3, "Que legal!!!")
    .then(frase => frase.concat("?!?"))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))
