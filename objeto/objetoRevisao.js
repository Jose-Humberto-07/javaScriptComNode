const produto = new Object()
produto.nome = "cadeira";
produto["marca do produto"] = "Genérica";
produto.preco = 330;

console.log(produto);
delete produto.preco;
delete produto["marca do produto"];
console.log(produto)

const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco: {
            logradouro: "Rua ABC",
            numero: 123456,
        }
    },
    condutores: [
        {
            nome: "Júnior",
            idade: 19,
        },
        {
            nome: "Ana",
            idade: 42,
        }
    ],
    calcularValorSeguro: (n1, n2) => {
        return (n1 + n2) / 2 
    }
}

carro.proprietario.endereco.numero = 1000;
carro["proprietario"] ["endereco"] ["logradouro"] = "Rua nova";

console.log(carro);

delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length);