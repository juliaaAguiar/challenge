document.addEventListener('DOMContentLoaded', function () {
    // Tabela
    var data = [
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
        { Identificação: 'CAM00175 ', Categoria: 'Equipamento', novaColuna: 'Valor1', Status: 'Erro' },
        { Identificação: 'Evasão Pedágio', Categoria: 'Tarifa', novaColuna: 'Valor3', Status: 'Atenção' },
        { Identificação: 'ANT02524 ', Categoria: 'Equipamento', novaColuna: 'Valor2', Status: 'Erro' },
        { Identificação: 'Pórtico 0045', Categoria: 'Pórtico', novaColuna: 'Valor4', Status: 'Erro' },
        { Identificação: 'Evasão Pedágio', Categoria: 'Tarifa', novaColuna: 'Valor3', Status: 'Atenção' },
        { Identificação: 'Evasão Pedágio', Categoria: 'Tarifa', novaColuna: 'Valor3', Status: 'Atenção' },
        
    ];

    // Criação da tabela
    var tableContainer = document.getElementById('table-container');
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    table.appendChild(thead);

    // Cabeçalho da tabela
    var headRow = document.createElement('tr');
    for (var key in data[0]) {
        var th = document.createElement('th');
        if (key === 'Status') {
            th.textContent = 'Status';
        } else {
            th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        }
        headRow.appendChild(th);
        th.style.textAlign = 'center';
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
                if (item[key] === 'Erro') {
                    div.style.backgroundColor = '#F2383A';
                    div.style.color = '#FFFFFF';
                    div.style.cursor = 'pointer';
                    div.addEventListener('click', function() {
                        window.location.href = "../pag-erro/erro.html";
                    });

                } else if (item[key] === 'Atenção') {
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
