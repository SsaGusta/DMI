// Atividade: Crie uma função que recebe um nome como parâmetro e retorna uma saudação personalizada.
const nome = 'Gusta';
function saudacao (nome){
    if (nome.length === 0){
        console.log(`Olá! Bem vindo(a)!`);
    } else {
        console.log(`Olá, ${nome}! Bem vindo(a)!`);
    }
}

saudacao(nome);

// Resposta Alura:

// function saudacao(nome = "") {
//     if (nome) {
//       console.log(`Olá, ${nome}! Boas vindas!`);
//     } else {
//       console.log("Olá! Boas vindas!");
//     }
//   }
 
// saudacao("Lucas");    
// saudacao();


// Criar uma funcao que calcula desconto

function calculcaDesconto(preco, desconto){
    return preco - desconto;
}
console.log((`O valor descontado é: ${calculcaDesconto(100, 20)}`));

// Resposta Alura:
// function calcularDesconto(preco, desconto = 10) {
//     const valorFinal = preco - (preco * desconto / 100);
//     return valorFinal;
// }
 
// console.log(calcularDesconto(100, 20)); 
// console.log(calcularDesconto(100));

//Criar uma arrow function chamada calcularMedia que receba duas notas e retorne a média entre elas.

const calcularMedia = (a, b) => {
    let media = (a + b) / 2;
    return media;
}
console.log(`A média é: ${calcularMedia(7, 9)}`);

// Resposta Alura:
// const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2;
 
// console.log(calcularMedia(7, 10));

// Criar uma função que recebe um número e retorna se ele é par ou ímpar.
function verparimpar(num) {
    if (num % 2 === 0){
        console.log(`o número ${num} é par`);     
    } else {
        console.log(`o número ${num} é ímpar`);
    }

} 
verparimpar(8); 
verparimpar(5);

// Resposta Alura:
// const verificarParidade = (numero) => {
//   if (numero % 2 === 0) {
//     return "Par";
//   } else {
//     return "Ímpar";
//   }
// };
 
// console.log(verificarParidade(8));
// console.log(verificarParidade(5)); 

// const verificarParidade = (numero) => numero % 2 === 0 ? "Par" : "Ímpar";

