const gameContainer = document.getElementById('game-container');

function createBall() {
  const ball = document.createElement('div');
  ball.classList.add('ball');
  ball.addEventListener('click', () => {
    ball.remove(); // Klick entfernt den Ball
  });
  gameContainer.appendChild(ball);
}

// Erstelle 10 Bälle zu Beginn des Spiels
for (let i = 0; i < 10; i++) {
  createBall();
}
