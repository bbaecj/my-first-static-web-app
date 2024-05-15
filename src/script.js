const gameContainer = document.getElementById('game-container');

function createBall() {
  const ball = document.createElement('div');
  ball.classList.add('ball');
  ball.addEventListener('click', () => {
    ball.remove(); // Klick entfernt den Ball
    createBall(); // Einen neuen Ball erstellen
  });
  
  // Zufällige vertikale Position für den Ball
  const randomTop = Math.floor(Math.random() * (gameContainer.clientHeight - 50)) + 'px';
  ball.style.top = randomTop;
  
  gameContainer.appendChild(ball);
}

// Erstelle 5 Bälle zu Beginn des Spiels
for (let i = 0; i < 5; i++) {
  createBall();
}
