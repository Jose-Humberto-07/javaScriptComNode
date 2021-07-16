/**
 *  Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */

const juroSimples = (capitalInicial, taxaJuros, tempoAplicacao) => {
    let juros = (capitalInicial * (taxaJuros / 100)) * tempoAplicacao
    return capitalInicial + juros
}

console.log("Juros simples: " + juroSimples(1000, 1, 12));


const juroComposto = (capitalInicial, taxaJuros, tempoAplicacao) => {
    let montante = 0
    let juros = (capitalInicial * (taxaJuros / 100)) * tempoAplicacao
    for (i = 0; i < tempoAplicacao; i++) {
         montante = capitalInicial + juros
    }
    return montante
}

console.log("Juros Composto: " + juroComposto(1000, 1, 12));