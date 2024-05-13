document.addEventListener('DOMContentLoaded', function () {
    // Tabela
    var data = [
        { Identificacao: 'CAM00175', Categoria: 'Equipamento', Data: '2023-02-05', Status: 'Erro'},
        { Identificacao: 'Evasão Pedágio', Categoria: 'Tarifa', NovaColuna: 'Valor3', Status: 'Atenção' },
        { Identificacao: 'ANT02524', Categoria: 'Equipamento', NovaColuna: 'Valor2', Status: 'Erro' },
        { Identificacao: 'Pórtico 0045', Categoria: 'Pórtico', NovaColuna: 'Valor4', Status: 'Erro' },
        { Identificacao: 'Evasão Pedágio', Categoria: 'Tarifa', NovaColuna: 'Valor3', Status: 'Atenção' },
        { Identificacao: 'Evasão Pedágio', Categoria: 'Tarifa', NovaColuna: 'Valor3', Status: 'Atenção' },
        { Identificacao: 'CAM00175', Categoria: 'Equipamento', NovaColuna: 'Valor1', Status: 'Erro' },
        { Identificacao: 'Evasão Pedágio', Categoria: 'Tarifa', NovaColuna: 'Valor3', Status: 'Atenção' },
        { Identificacao: 'ANT02524', Categoria: 'Equipamento', NovaColuna: 'Valor2', Status: 'Erro' },
        { Identificacao: 'Pórtico 0045', Categoria: 'Pórtico', NovaColuna: 'Valor4', Status: 'Erro' },
        { Identificacao: 'Evasão Pedágio', Categoria: 'Tarifa', NovaColuna: 'Valor3', Status: 'Atenção' },
        { Identificacao: 'Evasão Pedágio', Categoria: 'Tarifa', NovaColuna: 'Valor3', Status: 'Atenção' },
        { Identificacao: 'CAM00175', Categoria: 'Equipamento', NovaColuna: 'Valor1', Status: 'Erro' },
        { Identificacao: 'Evasão Pedágio', Categoria: 'Tarifa', NovaColuna: 'Valor3', Status: 'Atenção' },
        { Identificacao: 'ANT02524', Categoria: 'Equipamento', NovaColuna: 'Valor2', Status: 'Erro' },
        { Identificacao: 'Pórtico 0045', Categoria: 'Pórtico', NovaColuna: 'Valor4', Status: 'Erro' },
        { Identificacao: 'Evasão Pedágio', Categoria: 'Tarifa', NovaColuna: 'Valor3', Status: 'Atenção' },
        { Identificacao: 'Evasão Pedágio', Categoria: 'Tarifa', NovaColuna: 'Valor3', Status: 'Atenção' },
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

    function applyFilters() {
        var categoryFilter = document.getElementById('category-filter').value;
        var dateFilter = document.getElementById('date-filter').value;

        tbody.innerHTML = '';

        data.forEach(function (item) {
            if ((categoryFilter === 'Todos' || item.Categoria === categoryFilter) &&
                (dateFilter === '' || item.Data === dateFilter)) {
                addRow(item);
            }
        });
    }

    document.getElementById('category-filter').addEventListener('change', applyFilters);
    document.getElementById('date-filter').addEventListener('change', applyFilters);

    document.getElementById('search-button').addEventListener('click', function () {
        var searchText = document.getElementById('search-input').value.toLowerCase();
        var filteredData = data.filter(function (item) {
            for (var key in item) {
                if (item[key].toLowerCase().includes(searchText)) {
                    return true;
                }
            }
            return false;
        });
        tbody.innerHTML = '';
        filteredData.forEach(function (item) {
            addRow(item);
        });
    });

    document.getElementById('clear-button').addEventListener('click', function () {
        document.getElementById('search-input').value = '';
        applyFilters();
    });

    document.getElementById('export-csv').addEventListener('click', function () {
        exportToCSV(data);
    });

    applyFilters();
});

function exportToCSV(data) {
    var csvContent = "data:text/csv;charset=utf-8,";
    csvContent += Object.keys(data[0]).join(",") + "\n";
    data.forEach(function (item) {
        var row = Object.values(item).join(",");
        csvContent += row + "\n";
    });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
}
