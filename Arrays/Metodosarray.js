const arrNum = [12,23,34,45,56];

arrNum.push(67); // insere um elemento no array
console.log(arrNum);

arrNum.pop(); //retira um elemento do array
console.log(arrNum);

const elem = arrNum.indexOf(12); //busca um elemento dentro do array
console.log(elem);

const novoarr = arrNum.slice(2); // pega uma parte de um array p outro contando apartir do indice posto
//em parametro, nesse caso 2. Os valores do indice 2 em diante sao selecionado: 34, 45, 56
console.log(novoarr);

const arrCalculado = arrNum.map((num) =>{ //percorre todos os elemntos e retorna os novos valores para
    //um novo array
    return num * 10;
});

console.log(arrCalculado);

arrNum.forEach((num, i) => { // ele apenas executa e nao retorna nada
    console.log(`O numero ${num} está no indice ${i}`);
});

const arrFiltrado = arrNum.filter(num => num % 5 === 0); // filtra o array de acordo com a condição
//nesse caso se o numero for divisivel por 5 de resto 0: 45
console.log(arrFiltrado );

//como clonar array com deppe copy

const arr1 = [[1,2], 2, 3];

const copiaArr = (arr1) => {
    const copia = [];
    arr1.forEach((elem) => {
        if (Array.isArray(elem)) {
            copia.push(copiaArr(elem));
        } else {
            copia.push(elem);
        }
    })
    return copia;

}

const arr2 = copiaArr(arr1);
arr1 [0][0] = 5;

console.log(arr1);
console.log(arr2);
