let frase = "Raphael Veiga é Brabo";
let palavras = frase.split(" ");
let contador = 0;


palavras.forEach(() => {
  contador++;
});

console.log(`Número de palavras: ${contador}`);
