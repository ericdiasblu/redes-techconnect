document.querySelectorAll('.nav-items a, #start-button').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Verifica se o link é um ID de seção da mesma página
        if (href.startsWith('#')) {
            e.preventDefault(); // Previne o comportamento padrão
            const section = document.querySelector(href); // Seleciona a seção pelo ID
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth', // Rola suavemente até a seção
                    block: 'start' // Alinha a parte superior da seção ao topo da página
                });
            }
        } else {
            // Se for um arquivo HTML, permita o comportamento padrão
            window.location.href = href;
        }
    });
});