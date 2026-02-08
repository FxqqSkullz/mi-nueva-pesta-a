// Lista de URLs de tus imágenes de fondo
const backgrounds = [
    'ruta/a/tu/fondo1.jpg',
    'ruta/a/tu/fondo2.jpg',
    'ruta/a/tu/fondo3.jpg',
    'https://source.unsplash.com/random/1920x1080/?nature', // Ejemplo usando Unsplash
    'https://source.unsplash.com/random/1920x1080/?city'
];

let currentBgIndex = 0;
const changeBgBtn = document.getElementById('change-bg-btn');
const body = document.body;

// Función para cambiar el fondo
function changeBackground() {
    currentBgIndex = (currentBgIndex + 1) % backgrounds.length; // Cicla a través del array
    const newBg = backgrounds[currentBgIndex];
    body.style.backgroundImage = `url('${newBg}')`;
}

// Escucha el clic en el botón
changeBgBtn.addEventListener('click', changeBackground);

// Opcional: Cambiar fondo automáticamente cada cierto tiempo (ej. 10 segundos)
// setInterval(changeBackground, 10000);
