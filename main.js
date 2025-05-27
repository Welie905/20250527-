const bgPicker = document.getElementById('bgColorPicker');
bgPicker.addEventListener('input', () => {
    document.body.style.backgroundColor = bgPicker.value;
});
const pets = document.querySelectorAll('img');

function moveRandom(pet) {
    const maxX = window.innerWidth - pet.offsetWidth;
    const maxY = window.innerHeight - pet.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    pet.style.position = "absolute";
    pet.style.left = `${x}px`;
    pet.style.top = `${y}px`;
}

setInterval(() => {
    pets.forEach(pet => moveRandom(pet));
}, 2000);