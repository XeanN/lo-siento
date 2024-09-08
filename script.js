// Primer botón
document.getElementById('startButton').addEventListener('click', function() {
    console.log('Botón "Click aquí" presionado'); // Depuración
    document.getElementById('overlay').style.display = 'none'; // Oculta el overlay con el botón inicial
    document.getElementById('message').style.display = 'flex'; // Muestra el mensaje con el siguiente botón
});

// Segundo botón
document.getElementById('nextButton').addEventListener('click', function() {
    console.log('Botón "Cada vez más cerca" presionado'); // Depuración
    document.getElementById('message').style.display = 'none'; // Oculta el mensaje
    document.getElementById('content').style.display = 'flex'; // Muestra los poemas

    // Forzamos a mostrar el primer poema inmediatamente
    const firstPoem = document.querySelector('.poem');
    firstPoem.classList.add('active');

    // Inicia la rotación de poemas
    rotatePoems(); 

    // Generar corazones aleatorios
    generateHearts();
});

// Función para rotar los poemas
function rotatePoems() {
    const poems = document.querySelectorAll('.poem');
    let currentPoem = 0;

    console.log('Rotación de poemas iniciada'); // Depuración

    poems[currentPoem].classList.add('active'); // Mostrar el primer poema

    setInterval(() => {
        poems[currentPoem].classList.remove('active'); // Ocultar el poema actual
        currentPoem = (currentPoem + 1) % poems.length; // Cambiar al siguiente poema
        poems[currentPoem].classList.add('active'); // Mostrar el nuevo poema
    }, 8000); // Cambia el poema cada 8 segundos
}

// Función para generar corazones aleatorios
function generateHearts() {
    const heartsContainer = document.getElementById('heartsContainer');

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Tiempo de animación aleatorio
        heartsContainer.appendChild(heart);

        // Eliminar corazones después de que hayan flotado fuera de la pantalla
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 500); // Crear un nuevo corazón cada medio segundo
}
