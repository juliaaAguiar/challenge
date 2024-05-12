document.addEventListener('DOMContentLoaded', function() {
    var parametros = new URLSearchParams(window.location.search);
    var alerta = parametros.get("alerta");

    const form = document.getElementById('chamado-form');
    const idAlerta = document.getElementById('id-alerta');
    if (alerta != null || alerta !== '') idAlerta.value = alerta; 
    let ultimoId = localStorage.getItem('codigoChamado') ?? 0;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const equipe = document.getElementById('equipe').value;
        const problema = document.getElementById('problema').value;

        salvarChamado(equipe, problema);
    });

    function salvarChamado(equipe, problema) {
        let codigo = gerarIdAutoIncrement();
        localStorage.setItem('codigoChamado', codigo);
        let request = indexedDB.open("Tecsidel", 2);

        request.onerror = function(event) {
            console.log("Erro ao abrir o banco de dados.");
        };

        request.onupgradeneeded = function(event) {
            let db = event.target.result;
            if (!db.objectStoreNames.contains("chamados")) {
                console.log("Store de objetos 'chamados' não encontrada. Criando...");
                let objectStore = db.createObjectStore("chamados", { keyPath: 'codigo' });
                console.log("Store de objetos 'chamados' criada com sucesso.");
            }
        };

        request.onsuccess = function(event) {
            let db = event.target.result;
            let transaction = db.transaction(["chamados"], "readwrite");
            console.log("Transação iniciada...");
            let objectStore = transaction.objectStore("chamados");
            let addRequest = objectStore.add({ codigo: codigo, descricao: problema, equipe: equipe, status: 'ativo' });

            addRequest.onsuccess = function(event) {
                console.log("Chamado salvo com sucesso.");
                form.reset();
                window.location.href = 'http://127.0.0.1:5500/pag-chamados/chamados.html';
            };

            addRequest.onerror = function(event) {
                console.log("Erro ao salvar o chamado.");
            };
        };
    }

    function gerarIdAutoIncrement() {
        ultimoId++;
        return ultimoId;
    }
});
    