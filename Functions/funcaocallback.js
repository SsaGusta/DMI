function soma(a, b){ return a + b };
function multiplica(a, b){ return a * b };

function calcula(fnOperacao, valorA, valorB) {
    return fnOperacao(valorA, valorB);
}

console.log(calcula(soma, 5, 5));
console.log(calcula(multiplica, 5, 5));

// funcao emite uma msg caso o usuário X esteja invativo por Y tempo

const userId = '12345';
const avisaUsuario = userId => console.log(`Sessão de ${userId} está inativa`);
setTimeout(avisaUsuario,2000, userId);

// Outra forma de fazer a mesma coisa
setTimeout((userId) => console.log(`Sessão de ${userId} está inativa`), 2000, userId);
