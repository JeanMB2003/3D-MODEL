const texto = document.getElementById('texto');

document.addEventListener('mousemove', (event) => {
    texto.style.left = `${event.clientX}px`;
    texto.style.top = `${event.clientY}px`;
});
