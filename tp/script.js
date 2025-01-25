// Sélection de l'élément du compteur de score
const scoreDisplay = document.querySelector('.score');
let score = 0;

// Fonction pour créer une bulle
function createBubble() {
  const bubble = document.createElement('span');
  bubble.classList.add('bubble');
  document.body.appendChild(bubble);

  // Position et taille aléatoires
  const size = Math.random() * 100 + 50 + 'px';
  bubble.style.width = size;
  bubble.style.height = size;
  bubble.style.left = Math.random() * 100 + '%';

  // Animation de la bulle
  bubble.style.animationDuration = Math.random() * 2 + 3 + 's';

  // Événement de clic sur la bulle
  bubble.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    bubble.remove();
  });

  // Suppression de la bulle après l'animation
  bubble.addEventListener('animationend', () => {
    bubble.remove();
  });
}

// Génération de bulles à intervalles réguliers
setInterval(createBubble, 1000);
