document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('showPhotosBtn').addEventListener('click', function() {
    document.getElementById('photoCard').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Desabilita a rolagem do fundo
});

document.getElementById('closeCardBtn').addEventListener('click', function() {
    document.getElementById('photoCard').style.display = 'none';
    document.body.style.overflow = 'auto'; // Habilita a rolagem do fundo novamente
});
