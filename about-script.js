let isAnimating = false; // Controle de animação

function showText(scenario) {
    if (isAnimating) return; // Evita cliques duplos rápidos
    isAnimating = true; // Bloqueia novas animações durante o fade
    
    // Oculta o texto atual com fade out
    const currentText = document.querySelector('.fade-in');
    if (currentText) {
        currentText.classList.remove('fade-in');
        currentText.classList.add('fade-out');
        
        setTimeout(() => {
            currentText.classList.add('hidden');
            currentText.classList.remove('fade-out');
        }, 500); // Duração da transição (0.5s)
    }

    // Mostra o novo texto com fade in após o fade out terminar
    setTimeout(() => {
        const displayText = document.getElementById(`${scenario}-text`);
        if (displayText) {
            displayText.classList.remove('hidden');
            displayText.classList.add('fade-in');
        }
        isAnimating = false; // Libera novas animações
    }, 500); // Aguardar a transição para trocar o texto
}
