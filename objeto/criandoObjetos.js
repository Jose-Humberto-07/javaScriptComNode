import { get } from "lodash";

//usando a notação literal
const objeto1 = {};
console.log(objeto1);


//Object em JS
console.log(typeof Object, typeof new Object);
const objeto2 = new Object();
console.log(objeto2);


//funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)  
    }
};

const p1 = new Produto("caneta", 7.99, 0.15);
const p2 = new Produto("notebook", 2999.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//função factory (fábrica de objetos, criar objetos no retorno da função)
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario("João", 7980, 4);
const f2 = criarFuncionario("Maria", 11400, 1);
console.log(f1.getSalario, f2.getSalario)
