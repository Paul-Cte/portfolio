const rond = document.getElementById('rond');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
let scale = 1;

document.addEventListener('mousemove', (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

document.addEventListener('click', () => {
  scale = 1.5;
  rond.style.transition = 'transform 0.2s ease';
  rond.style.transform = `translate(-50%, -50%) scale(${scale})`;

  setTimeout(() => {
    scale = 1;
    rond.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }, 200);
});

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function animate() {
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  const scrollX = window.scrollX || window.pageXOffset;
  const scrollY = window.scrollY || window.pageYOffset;

  const maxX = scrollX + window.innerWidth - 25;
  const clampedX = clamp(currentX, 0, maxX);

  rond.style.left = `${clampedX}px`;
  rond.style.top = `${currentY}px`;

  // Disparaitre si la souris est dans la zone des 10px à droite
  if (mouseX > maxX) {
    rond.style.opacity = '0';
  } else {
    rond.style.opacity = '1';
  }

  if (scale === 1) {
    rond.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  requestAnimationFrame(animate);
}

animate();