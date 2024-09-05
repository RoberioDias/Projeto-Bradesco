'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    
    // Função para alternar entre os temas
    const toggleTheme = () => {
        document.body.classList.toggle('dark-theme');
        // Atualiza o texto do botão com base no tema atual
        if (document.body.classList.contains('dark-theme')) {
            toggleButton.textContent = 'Mudar para Claro';
        } else {
            toggleButton.textContent = 'Mudar para Escuro';
        }
    };

    // Adiciona um evento de clique ao botão
    toggleButton.addEventListener('click', toggleTheme);
});
