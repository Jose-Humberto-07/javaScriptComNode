const times = new Set()
times.add("Vasco")
times.add("São paulo").add("Palmeiras").add("Corinthias")
times.add("FLamengo")
times.add("Vasco")


console.log(times)
console.log(times.size)
console.log(times.has("Vasco"))
console.log(times.has("Vasco"))
times.delete("Flamengo")
console.log(times.has("Flamengo"))

const nomes = ["Raquel", "Lucas", "Julia", "Lucas"]
const nomesSet = new Set(nomes)
console.log(nomesSet)