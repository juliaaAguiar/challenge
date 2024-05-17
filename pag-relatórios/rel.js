document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um listener para o botão de filtragem
    document.getElementById("filtrarBtn").addEventListener("click", filtrarTabela);
    // Adiciona um listener para o botão de limpar
    document.getElementById("clearBtn").addEventListener("click", limparFiltro);
    // Adiciona um listener para o botão de exportar CSV
    document.getElementById("exportCsvBtn").addEventListener("click", exportToCSV);
});

function filtrarTabela() {
    var input, filter, tables, rows, cells, i, j, txtValue;
    input = document.getElementById("date-filter");
    filter = input.value.toUpperCase();
    tables = document.querySelectorAll(".report-container .report-table");

    tables.forEach(function(table) {
        rows = table.getElementsByTagName("tr");
        for (i = 0; i < rows.length; i++) {
            // Ignorar os cabeçalhos na hora de filtrar, para que continuem visiveis 
            if (rows[i].getElementsByTagName("th").length > 0) {
                continue;
            }
            cells = rows[i].getElementsByTagName("td");
            let found = false;
            for (j = 0; j < cells.length; j++) {
                txtValue = cells[j].textContent || cells[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                    break;
                }
            }
            if (found) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    });
}

function limparFiltro() {
    document.getElementById("date-filter").value = "";
    filtrarTabela(); // Após limpar, refiltrar a tabela para mostrar todos os resultados
}

function exportToCSV() {
    var data = [];
    var headers = [];
    var rows = document.querySelectorAll(".report-container .report-table tbody tr");

    // Obtém os cabeçalhos da tabela
    document.querySelectorAll(".report-container .report-table thead th").forEach(function(th) {
        headers.push(th.textContent.trim());
    });

    // Obtém os dados das linhas da tabela
    rows.forEach(function(row) {
        var rowData = [];
        row.querySelectorAll("td").forEach(function(cell) {
            rowData.push(cell.textContent.trim());
        });
        data.push(rowData.join(","));
    });

    // Cria o conteúdo CSV
    var csvContent = "\uFEFF"; 
    csvContent += headers.join(",") + "\n";
    csvContent += data.join("\n");

    var blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    var link = document.createElement("a");
    var url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "rel_VisaoGeral.csv"); 
    document.body.appendChild(link);
    link.click();

    URL.revokeObjectURL(url);
    document.body.removeChild(link);
}

