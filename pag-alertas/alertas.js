document.addEventListener('DOMContentLoaded', function () {
    // Tabela
    var data = [
        { Status: 'Offline', Tipo: 30, cidade: 'São Paulo', novaColuna: 'Valor1', },
        { Status: 'Ausente', Tipo: 25, cidade: 'Rio de Janeiro', novaColuna: 'Valor2', },
        { Status: 'Offline', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor3', },
        { Status: 'Offline', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor4', },
        { Status: 'Ausente', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor5', },
        { Status: 'Offline', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor6', },
        { Status: 'Ausente', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor7', },
        { Status: 'Ausente', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor7', },
        { Status: 'Ausente', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor7', },
        { Status: 'Ausente', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor7', },
        { Status: 'Ausente', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor7', },
        { Status: 'Ausente', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor7', },
        { Status: 'Ausente', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor7', },
        { Status: 'Ausente', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor7', },
        { Status: 'Ausente', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor7', },
        { Status: 'Ausente', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor7', },
        { Status: 'Ausente', Tipo: 35, cidade: 'Belo Horizonte', novaColuna: 'Valor7', },
    ];

    // Criação da tabela
    var tableContainer = document.getElementById('table-container');
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

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
        headRow.appendChild(th);
    }
    thead.appendChild(headRow);

    // Dados estilização
    data.forEach(function (item) {
        var row = document.createElement('tr');
        for (var key in item) {
            var cell = document.createElement('td');
            if (key === 'Status') {
                var div = document.createElement('div');
                div.textContent = item[key];
                div.style.height = '25px';

                // Definindo a cor com base no valor da coluna "Status"
                if (item[key] === 'Offline') {
                    div.style.backgroundColor = '#F2383A';
                    div.style.color = '#FFFFFF';
                    div.style.cursor = 'pointer';
                    div.addEventListener('click', function() {
                        window.location.href = "../pag-erro/erro.html";
                    });

                } else if (item[key] === 'Ausente') {
                    div.style.backgroundColor = '#F4DB00';
                    div.style.cursor = 'pointer';
                    div.addEventListener('click', function() {
                        window.location.href = "../pag-erro/erro2.html";
                    }); // Remova o parêntese extra aqui
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
