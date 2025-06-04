// math.random - operacao para fazer numeros aleatorios entre 1 e 50
// math floor - ignora os numeros dps da virgula para trabalhar so com inteiros

//objetivo adivinhar o numero e dar a qntdd de tentativas
const numeroSecreto = 8;
let numAleat = 0;
let tentativas = 0;

while (numeroSecreto !== numAleat){
    numAleat = Math.floor(Math.random() * (50 - 1 + 1 ) + 1);
    tentativas++
}
console.log(`Adivinhou em ${tentativas} tentativas`);


//objetivo: num aleat de 1 a 50 e executa o laço enquanto n gerar num par

let num2 = 0;

do{
num2 = Math.floor(Math.random() * (50 - 1 + 1 ) + 1);
// console.log(num2); se inserido aqui ele mostra todos os numeros ate chegar no par 
} while(num2 % 2 !== 0 );
console.log(num2); //so mostra o numero par


//objetivo: ver se os textos são iguais de tras para frente (palindromo - ex: oruam/mauro)

const texto = 'Gusta';
const texto2 = 'arara'; 
const texto3 = 'luz azul';
let txtInve = '';

//console.log(texto.length); imprime a qntdd de caracteres
//console.log(texto[0]); imprime o caractere referente a posicao

for (let i = texto2.length - 1; i >=0; i--) {
     txtInve += texto2[i];
}
const result = texto2 === txtInve
? `${texto2} é palindromo`
: `${texto2} não é palindromo`;

console.log(result);
