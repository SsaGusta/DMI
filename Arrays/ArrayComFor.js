function criaArrnum(inicio,fim) {
    const arr = [];
    let elemento = inicio;

    for(let i = 0, j = 0; j < fim; i++, elemento++) {
        arr[i] = elemento;
        j = elemento;
    }
    return arr;
}

console.log(criaArrnum(12, 300));
