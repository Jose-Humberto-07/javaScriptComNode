Array.prototype.forEach02 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) 
    }
}


const aprovados = ["Agatha", "Aldo", "Messi", "Neymar", "CR7"];

aprovados.forEach02(function(nome, indice) {
    console.log(`${indice + 1}- ${nome}`)
})