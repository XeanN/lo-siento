let poemRotationInterval; // Almacenar el intervalo de rotación de poemas
let stopRotation = false; // Variable de control para detener la rotación

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

    // Mostrar el botón para la canción después de los poemas
    setTimeout(() => {
        console.log('Mostrando el botón de la canción'); // Depuración
        document.getElementById('songButton').classList.remove('hidden');
    }, 25000); // Mostrar el botón después de 25 segundos (aproximadamente cuando terminen los poemas)
});

// Función para rotar los poemas
function rotatePoems() {
    const poems = document.querySelectorAll('.poem');
    let currentPoem = 0;

    console.log('Rotación de poemas iniciada'); // Depuración

    poems[currentPoem].classList.add('active'); // Mostrar el primer poema

    poemRotationInterval = setInterval(() => {
        if (stopRotation) {
            clearInterval(poemRotationInterval); // Detener la rotación si se ha activado stopRotation
            return;
        }
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

// Mostrar la letra de la canción
document.getElementById('songButton').addEventListener('click', function() {
    document.getElementById('lyrics').classList.remove('hidden');
    document.getElementById('songButton').classList.add('hidden'); // Ocultar el botón cuando se muestre la canción

    // Detener la rotación de los poemas
    stopRotation = true; // Marcar la variable para detener la rotación de poemas
    
    // Ocultar todos los poemas
    const poems = document.querySelectorAll('.poem');
    poems.forEach(poem => {
        poem.classList.remove('active'); // Asegurar que los poemas estén ocultos
    });

    // Continuar mostrando los corazones
    generateHearts();
});

// Llamamos a la función para que los corazones aparezcan desde el inicio en los poemas
generateHearts();
