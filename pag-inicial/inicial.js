document.addEventListener('DOMContentLoaded', function () {
    // Dados para o gráfico de dispersão
    var newData = {
        datasets: [
            {
                label: 'Semana Atual',
                data: [
                    { x: '08:00', y: 15 },
                    { x: '10:00', y: 5 },
                    { x: '12:00', y: 8 },
                    { x: '14:00', y: 8 },
                    { x: '16:00', y: 13 },
                    { x: '18:00', y: 15 },
                    { x: '20:00', y: 10 },
                    { x: '22:00', y: 3},
                    { x: '00:00', y: 2 },
                ],
                backgroundColor: '#1186F6',
                borderColor: '#1186F6',
                borderWidth: 1,
                showLine: true,
                pointRadius: 2 // Define o tamanho dos pontos
            },
            {
                label: 'Semana Passada',
                data: [
                    { x: '08:00', y: 13 },
                    { x: '10:00', y: 4 },
                    { x: '12:00', y: 5 },
                    { x: '14:00', y: 5 },
                    { x: '16:00', y: 8 },
                    { x: '18:00', y: 10 },
                    { x: '20:00', y: 13 },
                    { x: '22:00', y: 6 },
                    { x: '00:00', y: 4 },
                ],
                backgroundColor: '#035AAC',
                borderColor: '#035AAC',
                borderWidth: 1,
                showLine: true,
                pointRadius: 2 // Define o tamanho dos pontos
            }
        ]
    };

    // Opções para o gráfico de dispersão
    var scatterOptions = {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'category', // Define o tipo do eixo x como "categoria"
                title: {
                    display: true,
                    text: 'Horário'
                },
                grid: {
                    display: false // Remove linhas do eixo X
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Fluxo'
                },
                grid: {
                    display: false // Remover linhas do eixo Y
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Comparação do Fluxo de Veículos',
                font: {
                    size: 16
                }
            }
        }
    };

    var scatterCtx = document.getElementById('graph1').getContext('2d');
    var scatterChart = new Chart(scatterCtx, {
        type: 'line', // Altera para tipo de gráfico de linha
        data: newData,
        options: scatterOptions
    });

    // Gráfico de rosca
    var doughnutCtx = document.getElementById('graph2').getContext('2d');
    var doughnutChart = new Chart(doughnutCtx, {
        type: 'doughnut',
        data: {
            labels: ['Caminhão', 'Carro', 'Moto', 'Ônibus'],
            datasets: [{
                label: 'Quantidade',
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
            },
            plugins: {
                title: {
                    display: true, // Exibir o título
                    text: 'Distribuição Fluxo de Veículos', 
                    font: {
                        size: 16 
                    }
                },
                legend: {
                    labels: {
                    }
                }
            }
        }
    });

    // Gráfico de barras
    var barOptions = {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Dias da Semana'
                },
                grid: {
                    display: false // Remover linhas do eixo X
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Número de Veículos'
                },
                grid: {
                    display: false // Remover linhas do eixo Y
                },
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true, // Exibir o título
                text: 'Fluxo de Veículos por Dia da Semana',
                font: {
                    size: 16
                }
            }
        }
    };

    var barCtx = document.getElementById('graph3').getContext('2d');
    var barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
            datasets: [{
                data: [12000, 3500, 7000, 11000, 9000, 13000, 5000],
                backgroundColor: [
                    '#035AAC',
                    '#37375C',
                    '#00519E'
                ],
                borderWidth: 1
            }]
        },
        options: barOptions
    });

    // Oculta a legenda do gráfico de barras
    barChart.options.plugins.legend.display = false;
    barChart.update();

    // Tabela
    var data = [
        { Identificação: 'CAM00175 ', Categoria: 'Equipamento', Data: '05/05/2024', Status: 'Erro', Id: 1},
        { Identificação : 'Evasão Pedágio', Categoria: 'Tarifa', Data: '04/05/2024', Status: 'Atenção', Id: 2},
        { Identificação: 'ANT02524 ', Categoria: 'Equipamento', Data: '03/05/2024', Status: 'Erro', Id: 3},
        { Identificação: 'Pórtico 4', Categoria: 'Pórtico', Data: '02/01/2024', Status: 'Erro', Id: 4},
    ];

    var tableContainer = document.getElementById('table-container');
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    // Primeiro cabeçalho da tabela
    var firstHeadRow = document.createElement('tr');
    var th = document.createElement('th');
    th.textContent = 'Alertas recentes';
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
        } else if (key === 'Id') {
            th.textContent = 'Ação'; // Renomeando a última coluna
        } else {
            th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        }
        th.style.textAlign = 'center';
        headRow.appendChild(th);
    }
    thead.appendChild(headRow);

    // Dados estilizados
    data.forEach(function (item) {
        var row = document.createElement('tr');
        for (var key in item) {
            var cell = document.createElement('td');
            if (key === 'Status') 
            {
                var div = document.createElement('div');
                div.textContent = item[key];
                div.style.height = '25px';

                // Definindo a cor com base no valor da coluna "Status"
                if (item[key] === 'Erro') {
                    div.style.backgroundColor = '#F2383A';
                    div.style.color = '#FFFFFF';
                    div.style.cursor = 'pointer';
                    div.addEventListener('click', function () {
                        window.location.href = "../pag-erro/erro.html";
                    });

                } else if (item[key] === 'Atenção') {
                    div.style.backgroundColor = '#F4DB00';
                    div.style.cursor = 'pointer';
                    div.addEventListener('click', function () {
                        window.location.href = "../pag-erro/erro2.html";
                    });
                }

                div.style.borderRadius = '5px'
                div.style.textAlign = 'center';
                cell.appendChild(div);
            } else if (key === 'Id') 
            {
                var button = document.createElement('button');
                button.setAttribute('id', `problema-${item[key]}`);
                button.textContent = 'Abrir Chamado';
                button.value = item[key];
                button.style.cursor = 'pointer';
                button.style.borderRadius = '5px';
                button.style.padding = '5px 10px'; 
                button.style.border = 'none'; 
                cell.appendChild(button);
                cell.style.textAlign = 'center';
            } 
            else 
            {
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

    data.forEach(item => {
        document.getElementById(`problema-${item.Id}`).addEventListener("click", function() {
            var valor = document.getElementById(`problema-${item.Id}`).value;
                navigator.clipboard.writeText(valor)
                    .then(function() {
                        window.location.href = "../pag-chamado/chamado.html?alerta=" + valor;
                    })
                    .catch(function(error) {
                        console.error("Erro ao copiar: ", error);
                    });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const painel = document.getElementById('painel');

    // Dados dos indicadores
    const indicatorsData = [
        { label: 'Incidentes Hoje', value: '23' },
        { label: 'Erros', value: '115/500' },
        { label: 'Congestionamento', value: '30%' },
        { label: 'Status Fluxo', value: 'Normal' }
    ];

    indicatorsData.forEach(data => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');

        const title = document.createElement('h2');
        title.textContent = data.label;
        indicator.appendChild(title);

        const value = document.createElement('p');
        value.textContent = data.value;
        indicator.appendChild(value);

        painel.appendChild(indicator);
    });
});
