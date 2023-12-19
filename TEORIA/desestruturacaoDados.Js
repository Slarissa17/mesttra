// Destructuring -- Desestrução de dados

let vetorA = [99, 88, "dhasuik", 55.3 ];

let[valor1, valor2, valor3, valor4] = vetorA ;
// caso queira omitir uma posição

let[valor5, valor6, , valor7] = vetorA;

console.log(valor6);

let palavra = "mesttra";
let [letra1, letra2] = palavra;
console.log(letra1, letra2);
console.log(palavra.charAt(2))
