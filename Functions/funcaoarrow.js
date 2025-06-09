const calculaJuros = (valor, juros, tempo) => {
    let taxaJuros = (juros/100) + 1;
    return valor * Math.pow(taxaJuros, tempo);
}

console.log((calculaJuros(100,5,2))); // 110.25

