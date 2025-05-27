document.addEventListener("mousemove", (event) => {
    const moveX = (event.clientX / window.innerWidth) * 10 - 5;
    const moveY = (event.clientY / window.innerHeight) * 10 - 5;

    document.querySelector("h1").style.transform = `translate(${moveX}px, ${moveY}px)`;
});
