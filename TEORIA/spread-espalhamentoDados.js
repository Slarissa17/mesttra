console.clear();

let nome = "mesttra";
let vetorA = [5, 55];
let vetorB = [2, 33];

let matriz = [vetorA, vetorB];

matriz = [...vetorA, ...vetorB]

let y = [...nome];


// Exemplo 

let media = calcularMedia(2, 4)
console.log(media)

function calcularMedia (...valores){
    let soma= 0; 
    let qtItens = valores.length;
    let media = 0;
    for(let valor of valores){
        soma+= valor
    }

    media = soma / qtItens

    return media
}
    