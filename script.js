document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    let rect = card.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    let rotateX = (y / rect.height - 0.5) * -10;
    let rotateY = (x / rect.width - 0.5) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0) rotateY(0)`;
  });
});
