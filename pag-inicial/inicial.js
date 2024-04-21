document.addEventListener('DOMContentLoaded', function () {
    // Gráfico de dispersão
    var scatterCtx = document.getElementById('graph1').getContext('2d');
    var scatterChart = new Chart(scatterCtx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Incidentes',
                data: [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }],
                backgroundColor: '#1186F6',
                borderWidth: 1

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
            cutout: '70%', // Define a porcentagem de espessura da rosca
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
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Tabela
    var data = [
        { Status: 'Offline', Tipo: 30, cidade: 'São Paulo', novaColuna: 'Valor1', },
        { Status: 'Ausente', Tipo: 25, cidade: 'Rio de Janeiro', novaColuna: 'Valor2', },
        { Status: 'Offline', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor3', },
        { Status: 'Offline', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor4', },
        { Status: 'Ausente', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor5', },
        { Status: 'Offline', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor6', },
        { Status: 'Ausente', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor7', }
    ];

    // Criação da tabela
    var tableContainer = document.getElementById('table-container');
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    // Primeiro cabeçalho da tabela
    var firstHeadRow = document.createElement('tr');
    var th = document.createElement('th');
    th.textContent = 'Alertas mais recentes';
    th.setAttribute('colspan', Object.keys(data[0]).length);
    th.style.textAlign = 'center'; 
    firstHeadRow.appendChild(th);
    thead.appendChild(firstHeadRow);

    table.appendChild(thead);

    // Segundo cabeçalho da tabela
    var headRow = document.createElement('tr');
    for (var key in data[0]) {
        var th = document.createElement('th');
        if (key === 'Status') {
            th.textContent = 'Status';
        } else {
            th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        }
        headRow.appendChild(th);
    }
    thead.appendChild(headRow);

    // Dados estilização
    data.forEach(function (item) {
        var row = document.createElement('tr');
        for (var key in item) {
            var cell = document.createElement('td');
            if (key === 'Status') {
                var div = document.createElement('div');
                div.textContent = item[key];
                div.style.height = '25px';

                // Definindo a cor com base no valor da coluna "Status"
                if (item[key] === 'Offline') {
                    div.style.backgroundColor = '#F2383A';
                    div.style.color = '#FFFFFF';
                    div.style.cursor = 'pointer';
                    div.addEventListener('click', function() {
                        window.location.href = "../pag-erro/erro.html";
                    });

                } else if (item[key] === 'Ausente') {
                    div.style.backgroundColor = '#F4DB00';
                    div.style.cursor = 'pointer';
                    div.addEventListener('click', function() {
                        window.location.href = "../pag-erro/erro2.html";
                    }); // Remova o parêntese extra aqui
                }

                div.style.borderRadius = '5px'
                div.style.textAlign = 'center';
                cell.appendChild(div);
            } else {
                cell.textContent = item[key];
                cell.style.textAlign = 'center'; 
            }
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Adiciona a tabela ao container
    tableContainer.appendChild(table);
});
