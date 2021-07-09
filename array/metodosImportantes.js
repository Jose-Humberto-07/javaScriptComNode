const pilotos = ["Vettel", "Alonso", "Raikkonem", "Massa"]
pilotos.pop()// remove o último elemeto da lista
console.log(pilotos);

pilotos.push("Verstappen"); //adiciona um elemento na última posição
console.log(pilotos);

pilotos.shift() //remove o primeiro elemento
console.log(pilotos);

pilotos.unshift("Hamilton")// adiciona um elemento na primeira posição



// splice pode adcionar e remover elementos simultaneamente

//adcionar
pilotos.splice(2, 0, "Bottas", "Massa");
console.log()


//remover
pilotos.splice(3, 1)
console.log(pilotos);
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos);
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
