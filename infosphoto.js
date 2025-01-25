// script.js

const cube = document.querySelector('.cube');

// Change la vitesse de rotation au clic
cube.addEventListener('click', () => {
    const currentAnimation = cube.style.animation;
    if (currentAnimation === 'rotate 5s infinite linear') {
        cube.style.animation = 'rotate 10s infinite linear'; // Ralentir la rotation
    } else {
        cube.style.animation = 'rotate 5s infinite linear'; // Accélérer la rotation
    }
});
