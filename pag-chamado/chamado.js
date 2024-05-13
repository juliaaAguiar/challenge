document.addEventListener('DOMContentLoaded', function() {
    const parametros = new URLSearchParams(window.location.search);
    const alerta = parametros.get("alerta");
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
        let chamados = JSON.parse(localStorage.getItem('chamados')) || []; 
        chamados.push({ codigo: codigo, descricao: problema, equipe: equipe, status: 'ativo' }); 
        localStorage.setItem('chamados', JSON.stringify(chamados)); 
        form.reset();
        window.location.href = 'http://127.0.0.1:5500/pag-chamados/chamados.html';
    }
    

    function gerarIdAutoIncrement() {
        ultimoId++;
        return ultimoId;
    }
});
    