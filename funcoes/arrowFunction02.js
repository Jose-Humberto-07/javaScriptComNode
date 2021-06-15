/**
 * o THIS numa função normal é igual ao global, para criar um this indepedente tem que usar o ARROW FUNCTION...
 */

let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

//this com arrow function

let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)
comparaComThisArrow(module.exports)

// no NODE cada arquivo é um módulo e um this criado numa arrow function vai pertencer a esse módulo e não ao objeto global