const moduloA = require("../../moduloA")

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

const http = require('http')
http.createServer((req, res) => {
    res.write("Bom dia")
    res.end()
}).listen(8080) 