document.addEventListener('DOMContentLoaded', function () {
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
                data: [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }],
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

    // Dados para a tabela
    var data = [
        { nome: 'o', Tipo: 30, cidade: 'São Paulo' },
        { nome: 'o', Tipo: 25, cidade: 'Rio de Janeiro' },
        { nome: 'o', Tipo: 35, cidade: 'Belo Horizonte' }
    ];

    // Criação da tabela
    var tableContainer = document.getElementById('table-container');
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    // Criação do cabeçalho da tabela
    var headRow = document.createElement('tr');
    for (var key in data[0]) {
        var th = document.createElement('th');
        th.textContent = key.charAt(0).toUpperCase() + key.slice(1); 
        headRow.appendChild(th);
    }
    thead.appendChild(headRow);
    table.appendChild(thead);

    // Preenchimento da tabela com os dados
    data.forEach(function (item) {
        var row = document.createElement('tr');
        for (var key in item) {
            var cell = document.createElement('td');
            cell.textContent = item[key];
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Adiciona a tabela ao container
    tableContainer.appendChild(table);
});
