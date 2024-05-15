document.addEventListener('DOMContentLoaded', function () {
    // Tabela
    var data = [
        { Identificação: 'CAM00175 ', Categoria: 'Camera', Status: 'Erro' },
        { Identificação: 'CAM00176 ', Categoria: 'Antena', Status: 'OK' },
        { Identificação: 'CAM00177', Categoria: 'Tag', Status: 'OK' },
        { Identificação: 'CAM00178 ', Categoria: 'Camera', Status: 'OK' },
        { Identificação: 'CAM00179 ', Categoria: 'Antena', Status: 'OK' },
        { Identificação: 'TAG50', Categoria: 'Tag', Status: 'OK' },
        { Identificação: 'TAG51 ', Categoria: 'Camera', Status: 'OK' },
        { Identificação: 'TAG52 ', Categoria: 'Antena', Status: 'OK' },
        { Identificação: 'TAG53', Categoria: 'Tag', Status: 'OK' },
        { Identificação: 'TAG54 ', Categoria: 'Camera', Status: 'OK' },
        { Identificação: 'ANT02524 ', Categoria: 'Antena', Status: 'OK' },
        { Identificação: 'ANT02525 ', Categoria: 'Tag', Status: 'OK' },
        { Identificação: 'ANT02526  ', Categoria: 'Camera', Status: 'OK' },
        { Identificação: 'ANT02526 ', Categoria: 'Antena', Status: 'OK' },
        { Identificação: 'ANT02528 ', Categoria: 'Tag', Status: 'OK' },
        { Identificação: 'ANT02529 ', Categoria: 'Camera', Status: 'OK' },
        { Identificação: 'ANT02530 ', Categoria: 'Antena', Status: 'OK' },
        { Identificação: 'ANT02531  ', Categoria: 'Tag', Status: 'OK' }
    ];

    var tableContainer = document.getElementById('table-container');
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    table.appendChild(thead);

    var mainHeadRow = document.createElement('tr');
    var mainHeadCell = document.createElement('th');
    mainHeadCell.textContent = 'Equipamentos Pórtico';
    mainHeadCell.setAttribute('colspan', '4');
    mainHeadCell.style.textAlign = 'center';
    mainHeadRow.appendChild(mainHeadCell);
    thead.appendChild(mainHeadRow);

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
                } else if (item[key] === 'OK') {
                    div.style.backgroundColor = '#149D52';
                    div.style.cursor = 'pointer'; // A chave final foi corrigida aqui
                    div.addEventListener('click', function () {
                        window.location.href = "";
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

    data.forEach(function (item) {
        addRow(item);
    });
});
