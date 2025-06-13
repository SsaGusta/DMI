// Escreva um programa que:

// Crie um array com os itens iniciais da lista de compras.
// Acesse e exiba o segundo item da lista.
// Modifique o último item da lista para um novo valor.
console.log('\n');

const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];
console.log('Segundo item da lista:',listaDeCompras[1]);
listaDeCompras.pop('tomate');
listaDeCompras.push('fruta');
console.log('Lista após modificação:',listaDeCompras);


console.log('\n');

//Resposta Alura
// const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];
 
// console.log("Segundo item da lista:", listaDeCompras[1]);
 
// listaDeCompras[listaDeCompras.length - 1] = 'fruta';
 
// console.log("Lista após modificação:", listaDeCompras);
console.log('--------------------------------------------------------------------------------------------------');
console.log('\n');

// Escreva um programa que:

// Crie um array com os valores das despesas.
// Use um loop for para somar os valores.
// Exiba o total gasto.

const despesas = [120, 80, 45.5, 200, 60];
let somar = 0;
    for(i = 0; i < despesas.length; i++){
    somar += despesas[i];
    }
console.log('Total de despesas: R$',somar);

//Resposta Alura
// const despesas = [120, 80, 45.5, 200, 60];
 
// let total = 0;
 
// for (let i = 0; i < despesas.length; i++) {
//   total += despesas[i];
// }
 
// console.log(`Total de despesas: R$ ${total}`);
console.log('\n');
console.log('--------------------------------------------------------------------------------------------------');
console.log('\n');

