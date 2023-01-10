// Efecto de "Maquina de Escribir"

// Coleccion de Oraciones
const oraciones = [
    "Pasión por la programación.",
    "Desarrollo Web.",
    "HTML, CSS y JavaScript.",
    "Desarrollo de Videojuegos.",
    "Demos en SDL2.",
    "\"Tankes\" un juego Arcade Open Source. Escrito en C y reescrito en Rust.",
    "Don't have negative toughts. Remember your Mantra.",
]

// Variables
let intervaloID;
let reloj = 0;
let indice = 0;
let mensaje_oculto = 1;

const elementoHTML = document.querySelector("#custom_typer");

function escribe() {
    // Obten el string del elemento HTML
    let texto = elementoHTML.textContent;

    // Si el tamaño del string del elemento es menor al de la oracion
    if (texto.length < oraciones[indice].length) {
        // Agrega el caracter que sigue dentro del string
        let oracion_selecta = oraciones[indice];
        elementoHTML.textContent += oracion_selecta[texto.length];
    }
    else {
        // Cambia el intervalo
        clearInterval(intervaloID);
        intervaloID = setInterval(espera, 1000, 2, 30, borra);
    }
}

function borra() {
    // Obten el string del elemento HTML
    let texto = elementoHTML.textContent;

    // Revisa si el string no estavacio
    if (texto.length != 0) {
        // Recorta el ultimo caracter del string
        elementoHTML.textContent = texto.slice(0,texto.length - 1);
        //console.log(texto.slice(0,texto.length - 1))
    }
    else {
        // Cambia indice que apunte a la siguiente oracion
        if (++indice >= oraciones.length - mensaje_oculto) {
            indice = 0;
        }
        // Cambia el intervalo
        clearInterval(intervaloID);
        intervaloID = setInterval(espera, 500, 0, 50, escribe);
    }
}

function espera(segundos_reloj, segundos_intervalo, funcion) {
    // Cuenta los segundos que pasan
    if (reloj++ >= segundos_reloj) {
        // Reinicia el conteo
        reloj = 0;
        // Cambia el intervalo
        clearInterval(intervaloID);
        intervaloID = setInterval(funcion, segundos_intervalo);
    }
}

function main() {
    // Bora cualquier texto que esté escrito.
    elementoHTML.textContent = "";

    // Inicia Intervalo
    intervaloID = setInterval(escribe, 50);
}

main();