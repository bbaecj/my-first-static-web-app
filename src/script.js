const gameContainer = document.getElementById('game-container');
let numBalls = 10; // Anfangsanzahl der Bälle
let ballTimer; // Timer für das Generieren neuer Bälle

function createBall() {
  const ball = document.createElement('div');
  ball.classList.add('ball');
  ball.addEventListener('click', () => {
    ball.remove(); // Klick entfernt den Ball
    numBalls--; // Verringere die Anzahl der Bälle
    
    // Wenn alle Bälle entfernt wurden
    if (numBalls === 0) {
      showNotification(); // Benachrichtigung anzeigen
      clearInterval(ballTimer); // Timer stoppen
    }
  });
  
  // Zufällige vertikale Position für den Ball
  const randomTop = Math.floor(Math.random() * (gameContainer.clientHeight - 50)) + 'px';
  ball.style.top = randomTop;
  
  gameContainer.appendChild(ball);
  
  // Animation starten
  moveBall(ball);
}

function moveBall(ball) {
  const duration = Math.floor(Math.random() * 3000) + 2000; // Zufällige Dauer zwischen 2 und 5 Sekunden
  const randomLeft = Math.floor(Math.random() * (gameContainer.clientWidth - 50)) + 'px'; // Zufällige horizontale Position
  const randomTop = Math.floor(Math.random() * (gameContainer.clientHeight - 50)) + 'px'; // Zufällige vertikale Position
  
  ball.style.transition = `left ${duration}ms linear, top ${duration}ms linear`; // Bewegung mit einer linearen Übergangsfunktion
  ball.style.left = randomLeft;
  ball.style.top = randomTop;
  
  setTimeout(() => {
    moveBall(ball); // Animation erneut starten, nachdem sie beendet ist
  }, duration);
}

// Erstelle 10 Bälle zu Beginn des Spiels
for (let i = 0; i < numBalls; i++) {
  createBall();
}

function showNotification() {
  const notification = document.createElement('div');
  notification.textContent = 'Alle Bälle wurden entfernt! Neue Bälle werden in Kürze erzeugt.';
  notification.classList.add('notification');
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
    resetGame();
  }, 3000); // Benachrichtigung nach 3 Sekunden ausblenden und Spiel zurücksetzen
}

function resetGame() {
  numBalls = 10; // Anzahl der Bälle zurücksetzen
  for (let i = 0; i < numBalls; i++) {
    createBall();
  }
  
  // Starte Timer für das Generieren neuer Bälle alle 20 Sekunden
  ballTimer = setInterval(() => {
    if (numBalls < 10) {
      createBall();
      numBalls++;
    }
  }, 20000); // 20 Sekunden
}

// Starte Timer für das Generieren neuer Bälle alle 20 Sekunden
ballTimer = setInterval(() => {
  if (numBalls < 10) {
    createBall();
    numBalls++;
  }
}, 20000); // 20 Sekunden
