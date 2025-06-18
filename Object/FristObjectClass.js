const pessoa = {
    nome: 'Gusta O',
    nascimento: '2001-03-11',
    cpf: '40028922',
    pontuacao: 9999,
    trofeus: ['speedrunner', 'indie']
};

//imprima no terminal o nome da pessoa e um dos trofeus
console.log(pessoa.nome);
console.log(pessoa.trofeus[0]);


//exclua uma propriedade do objeto
delete pessoa.cpf;
console.log(pessoa);


//criar uma funcao para iterar os trofeus
function exibetrofeus(listaTrofeu) {
    for (const trofeu of listaTrofeu){
        console.log(`Tem o troféu ${trofeu} `);
    }
}
exibetrofeus(pessoa.trofeus);