// Dados do gráfico
var data = [{
    x: [1, 2, 3, 4, 5],
    y: [1, 4, 9, 16, 25],
    type: 'scatter',
}];

// Layout do gráfico
var layout = {
    title: 'Gráfico de Dispersão Simples',
    xaxis: {
        title: 'Eixo X',
    },
    yaxis: {
        title: 'Eixo Y',
    },
};

// Renderizando o gráfico
Plotly.newPlot('myPlot', data, layout);
