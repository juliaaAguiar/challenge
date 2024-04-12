document.addEventListener('DOMContentLoaded', function() {
    // Dados dos gráficos
    var data1 = [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 3, 4, 5],
        type: 'scatter',
        name: 'Gráfico 1' // Nome do gráfico
        
    }];

    var data2 = [{
        labels: ['A', 'B', 'C', 'D', 'E'],
        values: [10, 20, 30, 40, 50],
        type: 'pie',
        hole: 0.4, // Ajuste o tamanho do buraco para criar um gráfico de rosca
        name: 'Gráfico 2' // Nome do gráfico
    }];

    var data3 = [{
        x: [1, 2, 3, 4, 5],
        y: [2, 3, 2, 3, 2],
        type: 'bar',
        name: 'Gráfico 3' // Nome do gráfico
    }];

    // Layout dos gráficos
    var layout1 = {
        width: 400, // Largura do gráfico
        height: 300, // Altura do gráfico
        title: 'Gráfico de Dispersão', // Título do painel
        xaxis: {
            title: 'Eixo X' // Título do eixo X
        },
        yaxis: {
            title: 'Eixo Y' // Título do eixo Y
        },
        config: { displayModeBar: false } // Desabilitar as configurações do gráfico
    };

    var layout2 = {
        width: 400, // Largura do gráfico
        height: 300, // Altura do gráfico
        title: 'Gráfico de Rosca', // Título do painel
        hole: 0.4, // Ajuste o tamanho do buraco para criar um gráfico de rosca
        config: { displayModeBar: false } // Desabilitar as configurações do gráfico
    };

    var layout3 = {
        width: 400, // Largura do gráfico
        height: 300, // Altura do gráfico
        title: 'Gráfico de Barra', // Título do painel
        xaxis: {
            title: 'Categorias' // Título do eixo X
        },
        yaxis: {
            title: 'Valores' // Título do eixo Y
        },
        config: { displayModeBar: false } // Desabilitar as configurações do gráfico
    };

    // Renderizando os gráficos
    Plotly.newPlot('graph1', data1, layout1, { displayModeBar: false });
    Plotly.newPlot('graph2', data2, layout2, { displayModeBar: false });
    Plotly.newPlot('graph3', data3, layout3, { displayModeBar: false });
    

    // Criando uma tabela
    var tableData = [
        ['Nome', 'Idade', 'Profissão'],
        ['João', 30, 'Engenheiro'],
        ['Maria', 25, 'Designer'],
        ['Carlos', 35, 'Programador']
    ];

    var table = document.createElement('table');
    table.classList.add('table');

    for (var i = 0; i < tableData.length; i++) {
        var row = table.insertRow();
        for (var j = 0; j < tableData[i].length; j++) {
            var cell = row.insertCell();
            cell.textContent = tableData[i][j];
        }
    }

    document.getElementById('table').appendChild(table);
});
