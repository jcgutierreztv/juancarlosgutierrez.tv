// (Opcional) Pausar el carrusel al pasar el mouse
document.querySelectorAll('.carousel').forEach(c => {
  c.addEventListener('mouseenter', () => c.querySelector('.track').style.animationPlayState = 'paused');
  c.addEventListener('mouseleave', () => c.querySelector('.track').style.animationPlayState = 'running');
});