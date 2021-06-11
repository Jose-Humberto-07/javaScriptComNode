//constante não da pra alterar o valor
//let pode ser de escopo global ou local
//var pode ser de global e local ao mesmo tempo, por isso é melhor usar o let

const peso1 = 1.0;
const peso2 = Number('2.8')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const nota1 = 9.871;
const nota2 = 6.871;

const total = nota1 * peso1 + nota2 * peso2;
const media = total / (peso1 + peso2);
console.log(media.toFixed(2)); //casas decimais
console.log(media.toString()); //converter para string
console.log(media.toString(2)); //converter para binário
console.log(typeof media); //saber a tipagem
console.log(typeof Number);
