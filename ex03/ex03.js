document.getElementById('calcular').addEventListener('click', () => {
    // usa o fetch para pegar o arquivo json local
    fetch('dados.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar arquivo json')
            }
            return response.json();
        })
        .then(faturamentoData => {
            processarFaturamento(faturamentoData)
        })
        .catch(error => {
            console.log('erro: ', error);
        });
});

// func para processar os dados do faturamento
let processarFaturamento = (faturamentos) => {
    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;
    let diasAcimaDaMedia = 0;

    // itera pelos dias para fazer os calculos do menor, maior e somar faturamento
    faturamentos.forEach(dia => {
        if (dia.valor > 0) { // ignora os dias sem faturamento
            if (dia.valor < menorFaturamento) {
                menorFaturamento = dia.valor;
            }

            if (dia.valor > maiorFaturamento) {
                maiorFaturamento = dia.valor;
            }

            // calcula a media
            somaFaturamento += dia.valor;
            diasComFaturamento++;
        }

        
    });

    // calcula a media
    const mediaMensal = somaFaturamento / diasComFaturamento;

    // conta os dias com faturamento acima da media mensal
    faturamentos.forEach(dia => {
        if (dia.valor > mediaMensal) {
            diasAcimaDaMedia++;
        }
    });

    // exibir os resultados na pagina
    const resultado =  `
    <p>Menor faturamento: ${menorFaturamento.toFixed(2)}</p>
    <p>Maior faturamento: ${maiorFaturamento.toFixed(2)}</p>
    <p>Numero de dias com faturamento acima da media: ${diasAcimaDaMedia}</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
};