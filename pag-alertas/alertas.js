document.addEventListener('DOMContentLoaded', function () {
    // Tabela
    var data = [
        { Identificação: 'CAM00175 ', Categoria: 'Equipamento', Data: '2023-02-05', Status: 'Erro'},
        { Identificação: 'Evasão Pedágio', Categoria: 'Tarifa', novaColuna: 'Valor3', Status: 'Atenção' },
        { Identificação: 'ANT02524 ', Categoria: 'Equipamento', novaColuna: 'Valor2', Status: 'Erro' },
        { Identificação: 'Pórtico 0045', Categoria: 'Pórtico', novaColuna: 'Valor4', Status: 'Erro' },
        { Identificação: 'Evasão Pedágio', Categoria: 'Tarifa', novaColuna: 'Valor3', Status: 'Atenção' },
        { Identificação: 'Evasão Pedágio', Categoria: 'Tarifa', novaColuna: 'Valor3', Status: 'Atenção' },
        { Identificação: 'CAM00175 ', Categoria: 'Equipamento', novaColuna: 'Valor1', Status: 'Erro' },
        { Identificação: 'Evasão Pedágio', Categoria: 'Tarifa', novaColuna: 'Valor3', Status: 'Atenção' },
        { Identificação: 'ANT02524 ', Categoria: 'Equipamento', novaColuna: 'Valor2', Status: 'Erro' },
        { Identificação: 'Pórtico 0045', Categoria: 'Pórtico', novaColuna: 'Valor4', Status: 'Erro' },
        { Identificação: 'Evasão Pedágio', Categoria: 'Tarifa', novaColuna: 'Valor3', Status: 'Atenção' },
        { Identificação: 'Evasão Pedágio', Categoria: 'Tarifa', novaColuna: 'Valor3', Status: 'Atenção' },
        { Identificação: 'CAM00175 ', Categoria: 'Equipamento', novaColuna: 'Valor1', Status: 'Erro' },
        { Identificação: 'Evasão Pedágio', Categoria: 'Tarifa', novaColuna: 'Valor3', Status: 'Atenção' },
        { Identificação: 'ANT02524 ', Categoria: 'Equipamento', novaColuna: 'Valor2', Status: 'Erro' },
        { Identificação: 'Pórtico 0045', Categoria: 'Pórtico', novaColuna: 'Valor4', Status: 'Erro' },
        { Identificação: 'Evasão Pedágio', Categoria: 'Tarifa', novaColuna: 'Valor3', Status: 'Atenção' },
        { Identificação: 'Evasão Pedágio', Categoria: 'Tarifa', novaColuna: 'Valor3', Status: 'Atenção' },
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
        // Código para exportar para CSV
        // Observe que este trecho de código está correto e não precisa de alterações
    });

    applyFilters();
});
