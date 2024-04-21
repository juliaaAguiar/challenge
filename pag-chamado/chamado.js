document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('chamado-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const idAlerta = document.getElementById('id-alerta').value;
        const equipe = document.getElementById('equipe').value;
        const problema = document.getElementById('problema').value;

        enviarChamado(idAlerta, equipe, problema);
    });

    function enviarChamado(idAlerta, equipe, problema) {
        console.log('Chamado enviado:');
        console.log('ID do Alerta:', idAlerta);
        console.log('Equipe:', equipe);
        console.log('Problema:', problema);

        alert('Chamado enviado com sucesso! Entraremos em contato.');

        form.reset();
    }
});
