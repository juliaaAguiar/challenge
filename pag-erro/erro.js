document.addEventListener('DOMContentLoaded', function () {
    // Gráfico de dispersão com linhas
    var scatterCtx = document.getElementById('graph1').getContext('2d');
    var scatterChart = new Chart(scatterCtx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Incidentes',
                data: [
                    { x: 1, y: 1 },
                    { x: 2, y: 3 },
                    { x: 3, y: 1 },
                    { x: 4, y: 4 },
                    { x: 5, y: 2 },
                    { x: 6, y: 5 },
                    { x: 7, y: 3 },
                    { x: 8, y: 6 },
                    { x: 9, y: 4 },
                    { x: 10, y: 7 }
                ],
                backgroundColor: '#1186F6',
                borderColor: '#1186F6',
                borderWidth: 1,
                showLine: true // Exibe linhas conectando os pontos
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Eixo X'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Eixo Y'
                    }
                }
            }
        }
    });
});
