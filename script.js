document.querySelectorAll('.nav-items a, #start-button').forEach(link => {
  link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Verifica se o link é um ID de seção da mesma página
      if (href.startsWith('#')) {
          e.preventDefault();
          document.querySelector(href).scrollIntoView({
              behavior: 'smooth'
          });
      } else {
          // Se for um arquivo HTML, permita o comportamento padrão
          window.location.href = href;
      }
  });
});
