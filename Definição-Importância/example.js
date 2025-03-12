// Exemplo de código sem estrutura de dados
function somaElementos(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    return soma;
}

// Código otimizado usando uma estrutura de dados adequada
function somaElementosOtimo(lista) {
    return lista.reduce((a, b) => a + b, 0);
}

// Teste
const grandeLista = Array.from({length: 1000000}, (_, i) => i);

// Medindo o tempo do código sem estrutura de dados adequada
console.time("Tempo sem tratamento");
console.log("Soma sem tratamento: ", somaElementos(grandeLista));
console.timeEnd("Tempo sem tratamento");

// Medindo o tempo do código otimizado
console.time("Tempo com tratamento");
console.log("Soma com tratamento: ", somaElementosOtimo(grandeLista));
console.timeEnd("Tempo com tratamento");
