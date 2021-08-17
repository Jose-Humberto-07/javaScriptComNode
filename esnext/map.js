const tecnologias = new Map()
tecnologias.set('React', {framework: false})
tecnologias.Map("Angular", {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('React').framework)