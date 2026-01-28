const botao = document.querySelector('.btn-topo');

function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

botao.onclick = voltarAoTopo;