// Dados de faturamento por estado
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  // Calcula o valor total
  let valorTotal = 0;
  Object.values(faturamentoPorEstado).forEach(valor => {
    valorTotal += valor;
  });
  
  // Calcula e exibe o percentual para cada estado
  console.log("Percentual de representação por estado:");
  Object.entries(faturamentoPorEstado).forEach(([estado, valor]) => {
    const percentual = (valor / valorTotal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  });