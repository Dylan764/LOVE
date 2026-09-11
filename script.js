const musica = document.getElementById("musica");

function cambiarPantalla(actual, siguiente) {
    document.getElementById(actual).classList.remove("activa");
    document.getElementById(siguiente).classList.add("activa");
}

function comenzar() {
    musica.play().catch(() => {
        console.log("El navegador bloqueó el autoplay.");
    });
    cambiarPantalla("inicio", "historia");
}

function mostrarCarta() {
    cambiarPantalla("historia", "carta");
}

let cartaAbierta = false;

function abrirCarta(event) {
    event.stopPropagation();
    const sobre = document.querySelector(".sobre");
    
    if (!cartaAbierta) {
        sobre.classList.add("abierto");
        cartaAbierta = true;
        document.querySelector(".toca").textContent = "Cuando termines de leer, toca cualquier parte ❤️";
        document.querySelector(".toca").style.opacity = "0.7";
    }
}

function continuarCarta() {
    cambiarPantalla("carta", "final");
}