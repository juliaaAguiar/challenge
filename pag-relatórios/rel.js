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

    // Preencher os detalhes do gráfico
    var chartDetails = document.getElementById('chart-details');
    data.labels.forEach(function(label, index) {
        var detail = document.createElement('div');
        detail.innerHTML = `<strong>${label}:</strong> ${data.datasets[0].data[index]}%`;
        chartDetails.appendChild(detail);
    });
});
