// sounds.js - Controle de efeitos sonoros

// Configuração inicial
const soundEffects = {
  click: new Audio('sounds/click.wav'),
  hover: new Audio('sounds/hover.wav') // Exemplo adicional
};

// Função para tocar efeitos sonoros
function playSound(soundName) {
  try {
    // Reinicia o som se já estiver tocando
    soundEffects[soundName].currentTime = 0;
    soundEffects[soundName].play();
  } catch (error) {
    console.error(`Erro ao reproduzir som ${soundName}:`, error);
  }
}

// Inicializa os listeners de som nos links
function initSoundEffects() {
  const navLinks = document.querySelectorAll('.nav-links a, .link');
  
  navLinks.forEach(link => {
    // Efeito ao clicar
    link.addEventListener('click', function(e) {
      e.preventDefault();
      playSound('click');
      
      // Navega após o som tocar
      setTimeout(() => {
        window.location.href = this.href;
      }, 150);
    });

    // Efeito ao passar o mouse (opcional)
    link.addEventListener('mouseenter', () => {
      playSound('hover');
    });
  });
}

// Exporta as funções se for usar como módulo
// export { playSound, initSoundEffects };

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initSoundEffects);