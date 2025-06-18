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
console.log('\n');

//calcular idade

pessoa.calculaidade = function calculaidade(){
    const anoNasc = parseInt(this.nascimento.slice(0, 4)); //parsInt converte para inteiro
    const idade = new Date().getFullYear() - anoNasc;
    console.log(`A idade é ${idade}`); // maneira forçada de fazer, sem usar parseInt, = 
    // log(idade - anoNasc) pois é um numero e uma string, respectivamente 
    
}

pessoa.calculaidade()