document.querySelectorAll('.nav-items a, #start-button').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
      });
  });
});