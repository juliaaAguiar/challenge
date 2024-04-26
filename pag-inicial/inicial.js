document.addEventListener('DOMContentLoaded', function () {
    // Dados atualizados para o gráfico de dispersão
    var newData = {
        datasets: [{
            label: 'Novos Incidentes',
            data: [{ x: 1, y: 1 }, { x: 2, y: 3 }, { x: 3, y: 2 }, { x: 4, y: 4 }, { x: 5, y: 5 }],
            backgroundColor: '#FF5733',
            borderColor: '#FF5733',
            borderWidth: 1,
            showLine: true
        }]
    };

    // Opções para o gráfico de dispersão atualizado
    var scatterOptions = {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Eixo X'
                },
                grid: {
                    display: false // Remover linhas de grade do eixo X
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Eixo Y'
                },
                grid: {
                    display: false // Remover linhas de grade do eixo Y
                }
            }
        }
    };

    // Atualizar o gráfico de dispersão
    var scatterCtx = document.getElementById('graph1').getContext('2d');
    var scatterChart = new Chart(scatterCtx, {
        type: 'scatter',
        data: newData,
        options: scatterOptions
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
    var barOptions = {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Eixo X'
                },
                grid: {
                    display: false // Remover linhas de grade do eixo X
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Eixo Y'
                },
                grid: {
                    display: false // Remover linhas de grade do eixo Y
                },
                beginAtZero: true
            }
        }
    };

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
        options: barOptions
    });

    // Tabela
    var data = [
        { Identificação: 'CAM00175 ', Categoria: 'Equipamento', novaColuna: 'Valor1', Status: 'Erro' },
        { Identificação: 'Evasão Pedágio', Categoria: 'Tarifa', novaColuna: 'Valor3', Status: 'Atenção' },
        { Identificação: 'ANT02524 ', Categoria: 'Equipamento', novaColuna: 'Valor2', Status: 'Erro' },
        { Identificação: 'Pórtico 0045', Categoria: 'Pórtico', novaColuna: 'Valor4', Status: 'Erro' },
    ];

    // Criação da tabela
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
            if (key === 'Status') {
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

document.addEventListener('DOMContentLoaded', function () {
    const panel = document.getElementById('panel');

    // Dados dos indicadores
    const indicatorsData = [
        { label: 'Incidentes', value: '10.000' },
        { label: 'Fluxo', value: 'R$ 10%' },
        { label: 'Congestionamento', value: '100' },
        { label: 'Taxa de Erros', value: '25%' }
    ];

    // Criar indicadores
    indicatorsData.forEach(data => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');

        const title = document.createElement('h2');
        title.textContent = data.label;
        indicator.appendChild(title);

        const value = document.createElement('p');
        value.textContent = data.value;
        indicator.appendChild(value);

        panel.appendChild(indicator);
    });
});
