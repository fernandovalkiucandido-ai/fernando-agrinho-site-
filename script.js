// Seleciona o botão no HTML
const botaoComemorar = document.getElementById('btn-comemorar');

// Adiciona um evento de clique no botão
botaoComemorar.addEventListener('click', function() {
    
    // Mostra um alerta na tela
    alert('🏆 BRASIL SIL SIL!!! O HEXA É NOSSO! 🎉');
    
    // Faz o fundo da tela piscar em amarelo e verde para comemorar
    document.body.style.backgroundColor = '#ffdf00'; // Amarelo
    
    setTimeout(function() {
        document.body.style.backgroundColor = '#009c3b'; // Verde
    }, 500);
    
    setTimeout(function() {
        document.body.style.backgroundColor = '#f8f9fa'; // Volta ao normal
    }, 1000);
    
    // Muda o texto do botão
    botaoComemorar.innerText = "SOMOS CAMPEÕES! 🌟";
});