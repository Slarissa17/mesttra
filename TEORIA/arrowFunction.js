console.clear();

let resultado = somar(2, 3)
console.log(resultado)



function somar(a, b) {
    return a+b;
}

// Uma função anônima é aquela que não tem nome
// precisamos associar uma função anônima a uma variável

const soma = (a, b) => {return a+b}

console.log(soma(10,5))


setTimeout(function(){console.log("executou")}, 5000);

// callback é uma função quem tem como parâmetro outra função


let vetor = ["23", "34","2", "22"];


console.log(vetor.map(
                    function(valor)
                    {
                        return Number(valor)
                    }
));


// ARROW FUNCTION (é uma forma simplificada de escrever uma função anonima)


console.log(vetor.map(
     (valor) => Number(valor))); // se a função tiver mais de uma linha de comando é necessário add o return

console.log(vetor.map((valor) => 
                {
                    let x = valor + 10;
                     return valor
                }
));


