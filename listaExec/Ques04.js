/**
 * Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.

 */

const divisao = (n1, n2) =>  {
    console.log("Divisão: " + (n1 / n2))
    console.log(`Resto da divisão: ${n1 % n2}`)
}

divisao(10, 5)
divisao(9, 3)
divisao(7, 3)