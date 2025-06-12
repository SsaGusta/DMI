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

//o sistema precisa calcular o valor do frete com base na distância até o endereço do cliente. A regra é a seguinte:

// Até 5 km: frete fixo de R$ 5
// De 5.1 km até 20 km: R$ 0,50 por quilômetro
// Acima de 20 km: frete fixo de R$ 20
let valorfrete = 0.00;
function calculafrete(distancia) {
    if(distancia <= 5){
        valorfrete = 5;
        return console.log(`Frete fixo de R$ 5.00`);
    } else if (distancia > 5 && distancia <=20){
        valorfrete = distancia * 0.50;
        return console.log(`O valor do frete é R$ ${valorfrete}`);  
    }else {
        console.log(`Frete fixo de R$ 20.00`);
        return valorfrete = 20;
    }
}
calculafrete(3)
calculafrete(12);
calculafrete(25);

// Resposta Alura:
// function calcularFrete(distancia) {
//     if (distancia <= 5) {
//         return 5;
//     } else if (distancia <= 20) {
//         return distancia * 0.5;
//     } else {
//         return 20;
//     }
// }
 
// console.log(calcularFrete(3));
// console.log(calcularFrete(12));
// console.log(calcularFrete(25));

//Sua tarefa é criar uma função chamada processarPedido, que receba dois parâmetros:
//o nome do cliente, e
//uma função de callback responsável por exibir uma mensagem após o pedido ser processado.
console.log('\n');


function processarpedido(nome, tipo){
    if (tipo === 'vip'){
        console.log(`Processando pedido de ${nome}...\nObrigado pela preferência, ${nome}! Você ganhou frete grátis.\n`);
        
    }else if (tipo === 'novo'){
        console.log(`Processando pedido de ${nome}...\nBem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.\n`);
        
    }else {
        console.log(`Processando pedido de ${nome}...\nObrigado pela sua compra, João!\n`);
        
    }
} 

processarpedido('Gusta', 'vip');
processarpedido('Ana', 'novo');
processarpedido('João', 'comum');

// Resposta Alura:
// function processarPedido(nome, tipoCliente, callback) {
//     console.log(`Processando pedido de ${nome}...`);
//     callback(nome, tipoCliente);
// }
 
// function mensagemPersonalizada(nome, tipo) {
//     if (tipo === "vip") {
//         console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`);
//     } else if (tipo === "novo") {
//         console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
//     } else {
//         console.log(`Obrigado pela sua compra, ${nome}!`);
//     }
// }
 
// processarPedido("Lucas", "vip", mensagemPersonalizada);

console.log('\n');

//----------------------------------------------------------------------------------
//Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:
//o nome do usuário, e uma função de callback que será executada após 3 segundos.

// let nomeU = 'Gusta';
// console.log('Processando sua pergunta...');
// setTimeout((responderUsuario) => console.log(`Olá, ${nomeU} Aqui está a resposta para sua dúvida.`), 3000, nomeU );

//----------------------------------------------------------------------------------

// Resposta Alura:
// function responderUsuario(nome, callback) {
//     console.log("Processando sua pergunta...");
//     setTimeout(() => {
//         callback(nome);
//     }, 3000);
// }
 
// function mostrarResposta(nome) {
//     console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida.`);
// }
 
// responderUsuario("Camila", mostrarResposta);

// criar três funções separadas, com responsabilidades bem definidas:


const calculaConsumo = (potencia, horaspordia) => {
    let consumo = ((potencia * horaspordia * 30)/1000);
    return consumo;
}

const classifConsumo = (consumo) => {
    if(consumo < 50){
        return 'Baixo Consumo';
    } else if (consumo >= 50 && consumo < 200) {
       return  'Consumo Moderado';
    } else {
       return 'Alto Consumo';
    }
}


const exibirResumo = (nomeAparelho, consumo) => {
    console.log(`${nomeAparelho} tem um consumo de ${consumo} kWh/mês e é classificada como ${classificacao}`); 
}

const nomeAparelho = "Geladeira";
const consumo = calculaConsumo(150, 4);
const classificacao = classifConsumo(consumo);
exibirResumo(nomeAparelho, consumo, classificacao);

//Resposta Alura

// function calcularConsumo(potencia, horasPorDia) {
//     return (potencia * horasPorDia * 30) / 1000;
// }

// function classificarConsumo(consumo) {
//     if (consumo < 50) {
//         return "Baixo consumo";
//     } else if (consumo < 200) {
//         return "Consumo moderado";
//     } else {
//         return "Alto consumo";
//     }
// }

// function exibirResumo(nomeAparelho, consumo, classificacao) {
//     console.log(`${nomeAparelho} tem consumo de ${consumo.toFixed(1)} kWh/mês e é classificada como ${classificacao}.`);
// }

// const nomeAparelho = "Geladeira";
// const consumo = calcularConsumo(150, 4);
// const classificacao = classificarConsumo(consumo);
// exibirResumo(nomeAparelho, consumo, classificacao);

console.log( '\n');

const arr = ['Gusta', 'Vic', 'Moisa'];
const arr2 = [92, 67, 44];
let sorteado = 0;

console.log('Sorteando...');

// setTimeout(() => {
//     sorteado = sorteio(0, 2);
//     console.log(`Participante sorteado: ${arr[sorteado]}`);
//     pontuacao(sorteado);
//     console.log(`Pontuação: ${arr2[sorteado]}`);
// }, 2000);


const sorteio = (min, max) => {
    sorteado = Math.floor(Math.random() * (max - min + 1 ) + min);
    return sorteado;

}

const pontuacao = (sorteado) => {
    if (arr2[sorteado] > 80){
        console.log('Parabéns, você foi premiado!');
    } else if (arr2[sorteado] <= 80 && arr2[sorteado] >= 50){
        console.log('Você quase conseguiu! Fique de olho nos próximos sorteios.');
    } else {
        console.log('Infelizmente, não foi dessa vez.');
    } 
}

//Resposta Alura

// const sortearParticipante = (lista) => {
//     const indice = Math.floor(Math.random() * lista.length);
//     return lista[indice];
// };
 
// const avaliarPontuacao = (pontuacao) => {
//     if (pontuacao > 80) {
//         return "Parabéns, você foi premiado!";
//     } else if (pontuacao >= 50) {
//         return "Você quase conseguiu! Fique de olho nos próximos sorteios.";
//     } else {
//         return "Infelizmente, não foi dessa vez.";
//     }
// };
 
// const exibirResultado = (participante) => {
//     console.log("Sorteando...");
//     setTimeout(() => {
//         console.log(`Participante sorteado: ${participante.nome}`);
//         console.log(`Pontuação: ${participante.pontuacao}`);
//         console.log(avaliarPontuacao(participante.pontuacao));
//     }, 2000);
// };
 
// function realizarSorteio(lista) {
//     const sorteado = sortearParticipante(lista);
//     exibirResultado(sorteado);
// }
 
// const participantes = [
//     { nome: "Laura", pontuacao: 92 },
//     { nome: "Pedro", pontuacao: 67 },
//     { nome: "Clara", pontuacao: 44 }
// ];
 
// realizarSorteio(participantes);


//Sua missão é criar uma função chamada contagemRegressiva que:
// Receba um número inteiro positivo (ex: 5)
// Imprima esse número e, a cada chamada, reduza em 1
// Quando chegar em 0, exiba a mensagem: "Lançamento!"

console.log('\n');


function contarAte(num) {
  if (num === 0) return
  console.log(num);
  contarAte(num - 1); // chamada recursiva
    if (num === 1) console.log('Lançamento!');

}

contarAte(5);

//Resposta Alura
// function contagemRegressiva(numero) {
//   if (numero > 0) {
//     console.log(numero);
//     contagemRegressiva(numero - 1);
//   } else {
//     console.log("Lançamento!");
//   }
// }
 
// contagemRegressiva(5);

