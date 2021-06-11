function tratarErroELancar() {


    throw {
        nome: erro.name,
        msg: erro.menssage,
        date: new Date
    }
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() )
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("final")
    }
}

const obj = {nome: "Roberto"}
imprimirNomeGritando(obj)