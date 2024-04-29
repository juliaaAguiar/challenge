document.addEventListener('DOMContentLoaded', function() {
    // Dados do gráfico de rosca
    var data = {
        labels: ['Caminhão', 'Carro', 'Moto', 'Ônibus', 'Diversos'],
        datasets: [{
            label: 'Distribuição de Veículos',
            data: [10, 20, 30, 40, 50],
            backgroundColor: ['#C7CEFF', '#1186F6', '#035AAC', '#37375C', '#00519E'],
            borderWidth: 1
        }]
    };

    // Opções do gráfico de rosca
    var options = {
        responsive: true,
        maintainAspectRatio: false
    };

    // Obter o contexto do canvas
    var ctx = document.getElementById('doughnut-chart').getContext('2d');

    // Criar o gráfico de rosca
    var doughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });

    // Adicionar evento de clique aos botões de veículo
    var buttons = document.querySelectorAll('.vehicle-button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Atualizar o gráfico para destacar apenas o tipo de veículo selecionado
            var type = button.getAttribute('data-type');
            var index = data.labels.indexOf(type);
            var dataset = doughnutChart.data.datasets[0];
            dataset.backgroundColor = dataset.backgroundColor.map(function(color, i) {
                return i === index ? color : 'rgba(0, 0, 0, 0.1)';
            });
            doughnutChart.update();
        });
    });
});
