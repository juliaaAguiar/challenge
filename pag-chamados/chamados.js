document.addEventListener('DOMContentLoaded', function() {
   exibirChamados();
});

function exibirChamados() {
    const chamadosBody = document.getElementById('chamados');
    const chamados = JSON.parse(localStorage.getItem('chamados'));
    chamadosBody.innerHTML = '';
    if (chamados !== null) chamados.map((chamado) => montarNaTela(chamado, chamadosBody));
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