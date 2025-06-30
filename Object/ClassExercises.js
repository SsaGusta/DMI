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
