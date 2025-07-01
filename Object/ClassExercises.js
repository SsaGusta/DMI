// Você está desenvolvendo um sistema para uma loja online. Cada produto do
// catálogo deve ser representado por um objeto com informações de nome, preco e disponivel.
// Escreva um programa que:

// Crie um objeto chamado produto.
// O objeto deve conter as propriedades: nome, preco, disponivel.
// Exiba o objeto no console.

const produto = {
  nome: "Fone de ouvido",
  preco: 149.9,
  disponivel: true,
};
console.log(
  `Nome: ${produto.nome}\nPreço: R$ ${produto.preco}\nDisponível: ${produto.disponivel}`
);

//Resposta Alura
// const produto = {
//   nome: 'Fone de ouvido',
//   preco: 149.9,
//   disponivel: true
// };

// console.log(produto);

console.log(
  "--------------------------------------------------------------------------------------------------"
);

// Escreva um programa que:

// Crie um objeto configuracoes com as propriedades de tema, notificacoes, idioma.
// Acesse tema usando notação de ponto.
// Acesse idioma usando notação de colchetes.
// Exiba os dois valores no console.

const configuracoes = {
  tema: "escuro",
  notificacoes: true,
  idioma: "pt-BR",
};

console.log("Tema:", configuracoes.tema);
console.log("Idioma:", configuracoes["idioma"]);

console.log(
  "--------------------------------------------------------------------------------------------------"
);

// Crie um objeto receita com as propriedades:
// nome, ingredientes (array com pelo menos 5 itens) e tempoPreparo.
// Acesse o índice 2 da lista que está dentro do objeto.
// Exiba no console a frase: "Ingrediente complementar: [ingrediente]".

const receita = {
  nome: "Pão",
  ingredientes: ["Ovos", "Leite", "Farinha de trigo", "Sal", "Queijo"],
  tempoPreparo: "1 horas",
};

console.log(`Ingrediente Complementar: ${receita.ingredientes[2]}`);

console.log(
  "--------------------------------------------------------------------------------------------------"
);

// Escreva um programa que:

// Crie um objeto carro com as propriedades: marca, modelo, ano, modeloAntigo;
// Remova a propriedade modeloAntigo;
// Exiba o objeto final no console.

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  modeloAntigo: "Corolla XEi",
};
delete carro.modeloAntigo;
console.log(carro);
console.log(
  "--------------------------------------------------------------------------------------------------"
);
// Escreva um programa que:

// Crie um array chamado dispositivos, contendo 3 objetos com as propriedades: nome e status.
// Use um loop para exibir no console o nome e status de cada dispositivo.

const dispositivos = [
  { nome: "Impressora", status: true },
  { nome: "Scanner", status: false },
  { nome: "Projetor", status: true },
];
for (const dispositivo of dispositivos) {
  const status = dispositivo.status ? "Ativo" : "Inativo";
  console.log(`Dispositivo: ${dispositivo.nome} | Status: ${status}`);
}

console.log(
  "--------------------------------------------------------------------------------------------------"
);

// Crie um objeto maquina com as propriedades: nome, funcionando.
// Adicione um método chamado exibirStatus que exibe no console:
// "A máquina [nome] está em funcionamento." ou "A máquina [nome] está parada.",
// dependendo do valor de funcionando.
// Chame o método exibirStatus.

const maquina = {
  nome: "Esteira transportadora",
  funcionando: true,
  exibirStatus: true,
};
if (maquina.exibirStatus == true) {
  console.log(`A máquina ${maquina.nome} está em funcionamento`);
} else {
  console.log(`A máquina ${maquina.nome} está parada`);
}

console.log(
  "--------------------------------------------------------------------------------------------------"
);
// Criar uma função chamada montarObjeto que receba como 
// parâmetro um array de pares chave-valor, como este:

const montarObjeto = [
  ['nome', 'João'],
  ['idade', 30],
  ['cidade', 'Curitiba']
]
const xmontarObjeto = [
  console.log(`${montarObjeto[0][0]}: ${montarObjeto[0][1]}`),
  console.log(`${montarObjeto[1][0]}: ${montarObjeto[1][1]}`),
  console.log(`${montarObjeto[2][0]}: ${montarObjeto[2][1]}`)
]
xmontarObjeto;

//Resposta Alura
// function montarObjeto(arrPares) {
//     const resultado = {};
 
//     for (const [chave, valor] of arrPares) {
//         resultado[chave] = valor;
//     }
 
//     return resultado;
// }
 
// const dados = [
//     ['nome', 'João'],
//     ['idade', 30],
//     ['cidade', 'Curitiba']
// ];
 
// console.log(montarObjeto(dados));
console.log(
  "--------------------------------------------------------------------------------------------------"
);
// Exibir todas as categorias avaliadas;
// Exibir todos os valores registrados;
// Percorra todas as medições (pares categoria/valor) e imprima um detalhamento com 
// status, seguindo a seguinte lógica:
// Se o valor for maior que 50, mostre a mensagem (alerta)
// Caso contrário, mostre (ok)
const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30
};

const categorias = Object.keys(relatorio);
const valores = Object.values(relatorio);
const entradas = Object.entries(relatorio);

console.log("Categorias avaliadas:", categorias);
console.log("Valores registrados:", valores);

console.log("\nDetalhamento:");
for (let [chave, valor] of entradas) {
  const status = valor > 50 ? "alerta" : "ok";
  console.log(`${chave}: ${valor} (${status})`);
}
console.log(
  "--------------------------------------------------------------------------------------------------"
);
// Agora, o sistema precisa gerar um relatório que exiba:

// O total de dias parados no ano.
// A quantidade de meses com manutenção (ou seja, com valor maior que zero).
// Um alerta caso o total de dias parados seja maior que 20 dias: Status: Atenção! Acima do limite anual. 
// ou Status: Dentro do limite anual.

const manutencao = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7
};

let soma = 0;
let cont = 0; 
const val = Object.values(manutencao);
for(let i = 0; i < val.length; i++){
  soma += val[i];
    if(val[i] > 0){
      cont++
    }
}
let stt = soma < 20 ? 'Dentro do limite anual' : 'Atenção! Acima do limite anual.';

console.log(`Total de dias parados: ${soma}`);
console.log(`Meses com manunetenção registrada: ${cont}`);
console.log(`Status ${stt}`);

// Resposta Alura

// const manutencao = {
//   jan: 2,
//   fev: 0,
//   mar: 5,
//   abr: 4,
//   mai: 0,
//   jun: 7
// };

// let totalDias = 0;
// let mesesComParada = 0;

// for (let mes in manutencao) {
//   const dias = manutencao[mes];
//   totalDias += dias;

//   if (dias > 0) {
//     mesesComParada++;
//   }
// }

// console.log(`Total de dias parados: ${totalDias}`);
// console.log(`Meses com manutenção registrada: ${mesesComParada}`);

// if (totalDias > 20) {
//   console.log("Status: Atenção! Acima do limite anual.");
// } else {
//   console.log("Status: Dentro do limite anual");
// }
console.log(
  "--------------------------------------------------------------------------------------------------"
);
// Você deve escrever um programa que:

// Crie um objeto chamado curso, com as seguintes propriedades:

// titulo: string com o nome do curso;
// estudantes: um array de objetos, cada um com nome e progresso (número de 0 a 100);
// Um método interno chamado gerarRelatorio.
// O método gerarRelatorio deve:

// Percorrer o array de estudantes;
// Exibir no console o nome de cada estudante e sua situação:
// Se o progresso for igual ou maior que 70, mostrar "Aprovado";
// Senão, mostrar "Em andamento";
// Ao final, mostrar:
// A quantidade total de estudantes;
// A média geral de progresso da turma.

const curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "João", progresso: 85 },
    { nome: "Ana", progresso: 40 },
    { nome: "Juliano", progresso: 72 },
    { nome: "Patrícia", progresso: 60 }
  ],

  gerarRelatorio: function () {
    let totalProgresso = 0;

    for (let estudante of this.estudantes) {
      const situacao = estudante.progresso >= 70 ? "Aprovado" : "Em andamento";
      console.log(`Estudante: ${estudante.nome} | Progresso: ${estudante.progresso}% | Situação: ${situacao}`);
      totalProgresso += estudante.progresso;
    }

    const media = (totalProgresso / this.estudantes.length).toFixed(2);

    console.log(`\nTotal de estudantes: ${this.estudantes.length}`);
    console.log(`Média geral da turma: ${media}%`);
  }
};

curso.gerarRelatorio();