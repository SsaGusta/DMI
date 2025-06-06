const idade = 18;

if (idade >= 18){
    console.log('Acesso permitido');
} else {
    console.log('Acesso negado');
}

const temperatura = -20;

if (temperatura <15){
    console.log('Frio');
} else if (temperatura >=15 && temperatura <=25){
    console.log('Agradável');
}else{
    console.log('Quente');
}

const idade2 = 20;

if (idade2 <12){
    console.log('Infantil');
} else if (idade2 >=12 && idade2 <18){
    console.log('Juvenil');
}else {
    console.log('Adulto');
}


const diadaSemana = 0;

switch (diadaSemana){
    case 0:
        console.log('Domingo');
        console.log('A loja está aberta em horário especial: 10h às 14h.');
        break;
    case 1:
        console.log('Segunda-feira');
        console.log('A loja está aberta no horário normal: 9h às 18h.');
        break;
    case 2:
        console.log('Terça-feira');
        console.log('A loja está aberta no horário normal: 9h às 18h.');
        break;
    case 3:
        console.log('Quarta-feira');
        console.log('A loja está aberta no horário normal: 9h às 18h.');
        break;
    case 4:
        console.log('Quinta-feira');
        console.log('A loja está aberta no horário normal: 9h às 18h.');
        break;
    case 5:
        console.log('Sexta-feira');
        console.log('A loja está aberta no horário normal: 9h às 18h.');
        break;
    case 6:
        console.log('Sábado');
        console.log('A loja está aberta em horário especial: 10h às 16h.');
        break;
}

// Exemplo da Alura

/*

const diaSemana = 6;
 
/if (diaSemana === 6 || diaSemana === 0) {
  console.log("A loja está aberta em horário especial: 10h às 14h.");
} else {
  console.log("A loja está aberta no horário normal: 9h às 18h.");
} 

*/

const admin = true;

if (admin === true){
    console.log('Login bem-sucedido!');
} else {
    console.log('Usuário inválido.');
}

// Exemplo da Alura
/*

const usuario = "admin";

const mensagem = (usuario === "admin") ? "Login bem-sucedido!" : "Usuário inválido.";

console.log(mensagem);

*/

const fruta = 'maçã';

if (fruta === 'laranja' || fruta === 'abacaxi'){
    console.log(`A fruta ${fruta} é compatível para a receita.`);
} else {
    console.log(`A Fruta ${fruta} é incompatível para a receita.`);
}

// Exemplo da Alura

/*

const fruta = "maçã";
 
if (fruta !== "laranja" && fruta !== "abacaxi") {
  console.log("Fruta incompatível para a receita.");
} else {
  console.log("Fruta compatível para a receita.");
}

*/

const carrinhovazio = false;

if (carrinhovazio === false){
    console.log('Compra finalizada com sucesso!');
} else {
    console.log('Não é possível finalizar a compra: carrinho vazio.');
}

// Exemplo da Alura

/*

const carrinhoVazio = false;

if (!carrinhoVazio) {
  console.log("Compra finalizada com sucesso!");
} else {
  console.log("Não é possível finalizar a compra: carrinho vazio.");
}

*/

const pagamento = 1;

switch (pagamento) {
    case 1:
        console.log('Pagamento aprovado');
        break;
    case 2:
        console.log('Pagamento pendente');
        break;
    case 3:
        console.log('Pagamento recusado');
        break;
    default:
        console.log('Opção de pagamento inválida');
}

/*if (status === 'Aprovado'){
    console.log('Pagamento Aprovado');
} else if (status === 'Pendente') {
    console.log('Pagamento Pendente');
} else {
    console.log('Pagamento Recusado');
}*/

//------------------------------------------------------------------

// Exemplo da Alura

/*
const status = "aprovado";
 
switch (status) {
  case "pendente":
    console.log("Pagamento pendente.");
    break;
  case "aprovado":
    console.log("Pagamento aprovado.");
    break;
  case "recusado":
    console.log("Pagamento recusado.");
    break;
  default:
    console.log("Status inválido.");
    break;
}

*/

const pontos = 60;
const vidas = 1;

if (pontos >= 50 && vidas >0){
    console.log('Próximo nível liberado!');
} else {
    console.log('Não pode avançar para o próximo nível.');
}


const bateria = 65;
const mensagem = (bateria < 20) ? 'Crítica': (bateria >=20 && bateria < 80) ? 'Moderada' : 'Cheia';
console.log(`Bateria: ${mensagem}`);

