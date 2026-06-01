let cliques = 0;

function contarClique() {
    cliques = cliques + 1;
    // Atualiza o texto na tela com o novo número
    document.getElementById("contador").innerText = cliques + " curtidas";
}