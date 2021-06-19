const saberPar = (num) => {
    pares = []
    impares = []
    totPar = 0
    totImpar = 0
    for (c = 0; c <= num; c++) {
        if (c % 2 == 0) {
            pares.push(c)
            totPar++
        }else {
            impares.push(c)
            totImpar++
        }
    }

    console.log("Impares " + impares)
    console.log()
    console.log("Pares " + pares)
    console.log()
    console.log("Total pares: " + totPar)
    console.log()
    console.log("Total ímpares: " + totImpar)
}

saberPar(10)