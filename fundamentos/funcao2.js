//armazenando uma função em uma variável
const imprimirSoma = function (n1, n2) {
    console.log(n1 + n2)
}

imprimirSoma(2, 3);

//armazenando uma função arrow em uma variável
const soma = (n1, n2) => {
    return n1 + n2
}

console.log(soma(2,3));

//retorno implícito de uma função arrow
const subtracao = (n1, n2) => n1 - n2;
console.log(subtracao(2, 3));
