const num1 = 5;
const num2 = 4;
const operacao = 'soma'; 

if (operacao === 'soma') {
    console.log(num1 + num2); 
}else if (operacao === 'multiplicação') {
    console.log(num1 * num2); 
}else {
    console.log('Operação não identificada');
}

const salario = 10000;
if (salario >=11000){
    console.log('Bonus de 3%');
} else if (salario < 11000 && salario >=7000){
    console.log('Bonus de 5%');
}else if (salario <7000 && salario >4000){
    console.log('Bonus de 7%');
}else {
    console.log('Bonus de 9%');
}

const ano = 2024;
if ((ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 === 0)){
    console.log(`${ano} é bissexto`);
} else {
    console.log(`${ano} não é bissexto`);
}

const nome = 'Gusta';
const nota = 8;
const faltas = 3;

const recebeBonus = (nota >= 8) && (faltas <= 2) ? `${nome} recebe bonus` : `${nome} não recebe bonus`;

const user = 'premium';

switch (user) {
    case 'free':
        console.log('Acesso limitado');
        break;
    case 'premium':
        console.log('Acesso total ao app');
        break;
    case 'super premium':
        console.log('Acesso total ao app e bônus');
        break;
    default:
        console.log('Tipo de usaário desconhecido');
        break;
}