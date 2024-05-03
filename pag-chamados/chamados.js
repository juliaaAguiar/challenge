var db; 

document.addEventListener('DOMContentLoaded', function() {
    var request = indexedDB.open("Tecsidel", 2);

    request.onsuccess = function(event) {
        db = event.target.result;
        exibirChamados(); 
    };

    request.onerror = function(event) {
        console.log("Erro ao abrir o banco de dados.");
    };
});

function exibirChamados() {
    var transaction = db.transaction(["chamados"]);
    var objectStore = transaction.objectStore("chamados");
    var request = objectStore.openCursor();

    var chamadosBody = document.getElementById("chamados");
    chamadosBody.innerHTML = '';

    request.onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
            var chamado = cursor.value;
            var row = chamadosBody.insertRow();
            row.insertCell(0).textContent = chamado.codigo;
            row.insertCell(1).textContent = chamado.descricao;
            row.insertCell(2).textContent = chamado.equipe; 
            row.insertCell(3).textContent = chamado.status;
            cursor.continue();
        }
    };

    request.onerror = function(event) {
        console.log("Erro ao exibir os chamados.");
    };
}