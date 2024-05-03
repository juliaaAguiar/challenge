import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('chamado-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const idAlerta = document.getElementById('id-alerta').value;
        const equipe = document.getElementById('equipe').value;
        const problema = document.getElementById('problema').value;

        enviarChamado(idAlerta, equipe, problema);
        salvarChamado(equipe, problema);
    });

    function enviarChamado(idAlerta, equipe, problema) {
        console.log('Chamado enviado:');
        console.log('ID do Alerta:', idAlerta);
        console.log('Equipe:', equipe);
        console.log('Problema:', problema);

        alert('Chamado enviado com sucesso! Entraremos em contato.');

        form.reset();
    }

    function salvarChamado(equipe, problema) {
        var codigo = nanoid();
        var tipo = document.getElementById("identificacao").value;
        var transaction = db.transaction(["chamados"], "readwrite");
        var objectStore = transaction.objectStore("chamados");
        var request = objectStore.add({ codigo: codigo, descricao: problema, equipe: equipe, tipo: tipo, status: 'ativo' });

        request.onsuccess = function(event) {
            console.log("Chamado salvo com sucesso.");
            form.reset();
            exibirChamados();
        };

        request.onerror = function(event) {
            console.log("Erro ao salvar o chamado.");
        };
    }
});
