
const nomes = ["João", "Maria", "Carlos", "Ana"];
nomefinal = [];

nomes.forEach(function (prefixo) {
  
    nomefinal.unshift('Sr(a)' + prefixo )
})

console.log(nomefinal)
