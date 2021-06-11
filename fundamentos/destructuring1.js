//recurso novo do ES2015
//destrutura eu abtraio atributos de um objetos ou de um array

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

//destrutura
// tirar dois atrubitos de um objeto e usar como variáveis...
const {nome, idade} = pessoa;
console.log(nome, idade);
//estraindo as mesmas variáveis com nomes diferentes
const {nome: n, idade: i} = pessoa;
console.log(n, i);

//acessando atributo que não existe
const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero,cep);


