document.addEventListener('DOMContentLoaded', function () {
    // Gráfico tela Erro
    var dados = {
        labels: ['09/05/2023', '10/05/2023', '11/05/2023', '12/05/2023', '13/05/2023'], // Rótulos do eixo x (datas)
        datasets: [{
            label: 'Erros',
            data: [1, 0, 0, 0, 10],
            backgroundColor: '#F2383A',
            barPercentage: 0.5 
        }]
    };

    var maxDataValue = Math.max(...dados.datasets[0].data);

    // Opções do gráfico
    var opcoes = {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: ''
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Quantidade'
                },
                ticks: {
                    beginAtZero: true 
                },
                suggestedMax: maxDataValue + 5 // Definindo o valor máximo sugerido para a escala do eixo y
            }
        }
    };

    var ctx = document.getElementById('graficoBarras').getContext('2d');

    var grafico = new Chart(ctx, {
        type: 'bar',
        data: dados,
        options: opcoes
    });
});
