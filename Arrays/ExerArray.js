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
//Você está criando um painel para um sistema de chamada escolar. 
// Você recebeu uma lista com os nomes das pessoas estudantes de uma 
//turma e precisa exibir um por um para fazer a chamada em sala. Escreva um programa que:
// Crie um array com os nomes das pessoas.
// Use o for...of para exibir cada nome individualmente.

const estudantes = ['Carla', 'João', 'Marina', 'Lucas', 'Beatriz'];

let contar = '';
    for(let i = 0; i < estudantes.length; i++){
    contar = console.log('Estudante:',estudantes[i]);
    }

//Resposta Alura
// const estudantes = ['Carla', 'João', 'Marina', 'Lucas', 'Beatriz'];

// for (const nome of estudantes) {
//   console.log("Estudante:", nome);
// }
console.log('\n');
console.log('--------------------------------------------------------------------------------------------------');
console.log('\n');
// Você recebeu a missão de desenvolver um sistema de envio de notificações.
// A cada nova mensagem cadastrada, o sistema deve exibir uma notificação no 
// console informando que a mensagem foi enviada. Escreva um programa que:

// Crie um array com uma lista de mensagens.
// Use o método forEach() para exibir uma mensagem no console para cada item da lista.

const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];

mensagens.forEach(function(mensagens){
    console.log(`Notificação: ${mensagens}`);
    });
console.log('\n');
mensagens.forEach(mensagens => console.log(`Notificação: ${mensagens}`)); //forma alternativa

//Resposta Alura
// const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];

// mensagens.forEach(msg => {
//   console.log("Notificação:", msg);
// });
console.log('\n');
console.log('--------------------------------------------------------------------------------------------------');
console.log('\n');

// Você está desenvolvendo um sistema de tarefas do dia a dia. 
// O sistema deve permitir que a pessoa usuária adicione uma nova 
// tarefa ao final da lista e, em seguida, remova a última tarefa que foi adicionada. 
// Escreva um programa que:

// Crie um array com três tarefas iniciais.
// Adicione uma nova tarefa no final da lista.
// Remova a última tarefa da lista.
// Exiba a lista após cada operação

const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];
tarefas.push('Pagar boletos');
console.log('Nova tarefa\n',tarefas);

const novastarefas = tarefas.filter(tarefa => tarefa !== 'Fazer compras');
console.log('Remover tarefa\n',novastarefas);

//Resposta Alura
// const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];

// tarefas.push('Pagar boletos');
// console.log("Lista após adicionar:", tarefas);

// tarefas.pop();
// console.log("Lista após remover a última tarefa:", tarefas);
console.log('\n');
console.log('--------------------------------------------------------------------------------------------------');
console.log('\n');
// Em certo momento, o sistema precisa criar uma cópia da lista de pedidos para simular alterações, 
// sem modificar o array original. Escreva um programa que:

// Crie um array com alguns pedidos.
// Faça uma cópia do array.
// Adicione um novo item apenas na cópia.
// Exiba os dois arrays para mostrar que o original não foi alterado.

const pedidos = ['camiseta', 'calça', 'tênis'];

const novopedido = pedidos.map((str) => {
    return str;
});
novopedido.push('bone');

console.log('Array original: ',pedidos);
console.log('Array copiado: ',novopedido);

//Resposta Alura
// const pedidos = ['camiseta', 'calça', 'tênis'];

// const pedidosCopia = pedidos.slice();

// pedidosCopia.push('boné');

// console.log("Array original:", pedidos);
// console.log("Array copiado:", pedidosCopia);
console.log('\n');
console.log('--------------------------------------------------------------------------------------------------');
console.log('\n');

// Quando a pessoa usuária digita o nome de um livro, o sistema precisa verificar se ele está 
// disponível na lista de títulos cadastrados. Escreva um programa que:

// Crie um array com nomes de livros.
// Crie uma variável com o nome de um livro procurado.
// Verifique se o livro está na lista.
// Exiba uma mensagem informando se o livro foi encontrado ou não.

const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
const livroProcurado = 'O Cortiço';

if (livros.indexOf(livroProcurado) !== -1) {
  console.log(`O livro "${livroProcurado}" está disponível.`);
} else {
  console.log(`O livro "${livroProcurado}" não foi encontrado.`);
}

console.log('\n');
console.log('--------------------------------------------------------------------------------------------------');
console.log('\n');


// Você está desenvolvendo um sistema de pagamento e todos os produtos 
// precisam receber um desconto de 10% antes de serem exibidos para 
// as pessoas. Escreva um programa que:

// Crie um array com os preços originais dos produtos.
// Use o método map() para aplicar 10% de desconto em cada item.
// Exiba o novo array com os preços já com o desconto aplicado.

const precos = [100, 80, 50, 120];

const descprecos = precos.map((num) => {
    return num - (num * 0.1);

}); console.log(descprecos);

//Resposta Alura
// const precos = [100, 80, 50, 120];

// const precosComDesconto = precos.map(preco => preco * 0.9);

// console.log("Preços com desconto:", precosComDesconto);
console.log('\n');
console.log('--------------------------------------------------------------------------------------------------');
console.log('\n');
