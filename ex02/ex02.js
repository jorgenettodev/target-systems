// Função para verificar se um número pertence à sequência de Fibonacci
let ehFibonacci = (num) => {
    let a = 0;
    let b = 1;
    
    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    
    return b === num;
}

// Número hardcoded para verificar
let verificaSeEhFibonacci = (num) => {
    // Verificar se o número pertence à sequência de Fibonacci
    if (ehFibonacci(num)) {
        console.log(`${num} faz parte da sequência de Fibonacci.`);
    } else {
        console.log(`${num} não faz parte da sequência de Fibonacci.`);
    }
}

// testes
verificaSeEhFibonacci(3); // output esperado: 3 faz parte da sequência de Fibonacci.
