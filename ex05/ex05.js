function inverterString(str) {
    // Transforma a string em um array de caracteres
    const caracteres = str.split('');
    
    // Inicializa uma string vazia para armazenar o resultado
    let stringInvertida = '';
    
    // Usa forEach para iterar sobre os caracteres em ordem reversa
    caracteres.forEach((char, index) => {
      // Adiciona cada caractere no início da nova string
      stringInvertida = char + stringInvertida;
    });
    
    return stringInvertida;
  }
  
  // Exemplo de uso
  const input = "batata";
  const resultado = inverterString(input);
  
  console.log(`String original: ${input}`);
  console.log(`String invertida: ${resultado}`);