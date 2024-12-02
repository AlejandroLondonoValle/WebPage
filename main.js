// main.js
document.getElementById("animateBtn").addEventListener("click", function() {
    let body = document.body;
    body.style.backgroundColor = "#fff3e6"; // Color suave de Navidad

    // Crear animación de destello
    let sparkle = document.createElement('div');
    sparkle.style.position = "absolute";
    sparkle.style.top = Math.random() * window.innerHeight + "px";
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.width = "50px";
    sparkle.style.height = "50px";
    sparkle.style.backgroundColor = "#ffcc00";
    sparkle.style.borderRadius = "50%";
    sparkle.style.boxShadow = "0 0 15px #ffcc00";
    sparkle.style.animation = "sparkleAnim 1s ease-out forwards";

    document.body.appendChild(sparkle);

    // Eliminar el destello después de la animación
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
});

