document.addEventListener('DOMContentLoaded', function() {
    // Tamanho dos gráficos
    var graphWidth = 300;
    var graphHeight = 300;

    // Gráfico de dispersão
    var scatterCtx = document.getElementById('graph1').getContext('2d');
    var scatterChart = new Chart(scatterCtx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Incidentes',
                data: [{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 3}, {x: 4, y: 4}, {x: 5, y: 5}],
                backgroundColor: '#1186F6',
                borderColor: '#1186F6',
                borderWidth: 1

            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            width: graphWidth,
            height: graphHeight,
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

    // Gráfico de rosca
    var doughnutCtx = document.getElementById('graph2').getContext('2d');
    var doughnutChart = new Chart(doughnutCtx, {
        type: 'doughnut',
        data: {
            labels: ['Caminhão', 'Carro', 'Moto', 'Ônibus', 'Diversos'],
            datasets: [{
                label: 'Gráfico de Rosca',
                data: [10, 20, 30, 40, 50],
                backgroundColor: [
                    '#C7CEFF',
                    '#1186F6',
                    '#035AAC',
                    '#37375C',
                    '#00519E'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            width: graphWidth,
            height: graphHeight,
            scales: {
                x: {
                    display: false,
                },
                y: {
                    display: false,
                }
            }
        }
    });

    // Gráfico de barra
    var barCtx = document.getElementById('graph3').getContext('2d');
    var barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
            datasets: [{
                label: 'Fluxo de veículos',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    '#035AAC',
                    '#37375C',
                    '#00519E'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            width: graphWidth,
            height: graphHeight,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
