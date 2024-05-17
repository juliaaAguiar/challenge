// Criação "Armazenamento" Chamado
document.addEventListener('DOMContentLoaded', function() {
    exibirChamados();

    const criarChamadoBtn = document.createElement('button');
    criarChamadoBtn.id = 'create-chamado-btn';
    criarChamadoBtn.innerHTML = '<a href="/pag-chamado/chamado.html">Criar chamado</a>';
    criarChamadoBtn.addEventListener('click', function() {
        window.location.href = '/pag-chamado/chamado.html';
    });

    document.body.appendChild(criarChamadoBtn);
});

function exibirChamados() {
    const chamadosBody = document.getElementById('chamados');
    const chamados = JSON.parse(localStorage.getItem('chamados'));
    chamadosBody.innerHTML = '';
    if (chamados !== null) {
        chamados.map((chamado) => montarNaTela(chamado, chamadosBody));
    }
}   

function montarNaTela(chamado, chamadosBody) {
    const tr = document.createElement('tr');
    for (const key in chamado) {
        const td = document.createElement('td');
        td.innerText = chamado[key];
        tr.appendChild(td);
    }
    chamadosBody.appendChild(tr);
}
