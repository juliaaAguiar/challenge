// Inicializa o mapa
var map = L.map('map').setView([-23.5505, -46.6333], 10); // Coordenadas de São Paulo e nível de zoom inicial

// Adiciona o mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adiciona marcadores de exemplo
var porticos = [
    { nome: 'Pórtico 1', lat: -23.5605, lng: -46.6433 },
    { nome: 'Pórtico 2', lat: -23.5705, lng: -46.6533 },
    { nome: 'Pórtico 3', lat: -23.5705, lng: -46.6633 },
    { nome: 'Pórtico 4', lat: -23.5805, lng: -46.6733 }
    // Adicione mais pórticos conforme necessário
];

porticos.forEach(function(portico) {
    L.marker([portico.lat, portico.lng]).addTo(map)
        .bindPopup(portico.nome);
});

document.addEventListener('DOMContentLoaded', function () {
    // Tabela
    var data = [
        { Identificação: 'CAM00175 ', Categoria: 'Camera', Status: 'OK'},
        { Identificação: 'ANT02524 ', Categoria: 'Antena', Status: 'OK' },
        { Identificação: 'TAG56', Categoria: 'Tag', Status: 'Erro' },
        { Identificação: 'CAM00175 ', Categoria: 'Camera', Status: 'OK'},
        { Identificação: 'ANT02524 ', Categoria: 'Antena', Status: 'OK' },
        { Identificação: 'TAG56', Categoria: 'Tag', Status: 'OK' },
        { Identificação: 'CAM00175 ', Categoria: 'Camera', Status: 'OK'},
        { Identificação: 'ANT02524 ', Categoria: 'Antena', Status: 'Atenção' },
        { Identificação: 'TAG56', Categoria: 'Tag', Status: 'OK' },        { Identificação: 'CAM00175 ', Categoria: 'Camera', Status: 'OK'},
        { Identificação: 'ANT02524 ', Categoria: 'Antena', Status: 'OK' },
        { Identificação: 'TAG56', Categoria: 'Tag', Status: 'Erro' },
        { Identificação: 'CAM00175 ', Categoria: 'Camera', Status: 'OK'},
        { Identificação: 'ANT02524 ', Categoria: 'Antena', Status: 'OK' },
        { Identificação: 'TAG56', Categoria: 'Tag', Status: 'OK' },
        { Identificação: 'CAM00175 ', Categoria: 'Camera', Status: 'OK'},
        { Identificação: 'ANT02524 ', Categoria: 'Antena', Status: 'Atenção' },
        { Identificação: 'TAG56', Categoria: 'Tag', Status: 'OK' },
    ];

    var tableContainer = document.getElementById('table-container');
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    table.appendChild(thead);

    var headRow = document.createElement('tr');
    for (var key in data[0]) {
        var th = document.createElement('th');
        if (key === 'Status') {
            th.textContent = 'Status';
        } else if (key === 'Data') {
            th.textContent = 'Data';
        } else {
            th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        }
        headRow.appendChild(th);
        th.style.textAlign = 'center';
    }
    thead.appendChild(headRow);

    tableContainer.appendChild(table);
    table.appendChild(tbody);

    function addRow(item) {
        var row = document.createElement('tr');
        for (var key in item) {
            var cell = document.createElement('td');
            if (key === 'Status') {
                var div = document.createElement('div');
                div.textContent = item[key];
                div.style.height = '25px';
                div.style.borderRadius = '5px';
                div.style.textAlign = 'center';

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
                }else if (item[key] === 'OK') {
                    div.style.backgroundColor = '#149D52';
                    div.style.cursor = 'pointer';
                    div.addEventListener('click', function () {
                        window.location.href = "../pag-erro/erro2.html";
                    });
                }

                cell.appendChild(div);
            } else if (key === 'Data') {
                var dateParts = item[key].split('-');
                var formattedDate = dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0];
                cell.textContent = formattedDate;
                cell.style.textAlign = 'center';
            } else {
                cell.textContent = item[key];
                cell.style.textAlign = 'center';
            }
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }

    data.forEach(function(item) {
        addRow(item);
    });
});
