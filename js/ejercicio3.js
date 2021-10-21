document.getElementById ('ocultar').hidden = true;
document.getElementById ('act').hidden = true;

    function onClickIniciar() {
    document.getElementById('ocultar').hidden = false;
    }

function Persona(nombre, edad) {
    nombre = document.getElementById('nombre').value;
    edad = document.getElementById('edad').value;
    var div = document.getElementById('RES');
    var imprimir = document.createElement("span");
    div.appendChild(imprimir);
    if (nombre === "") {
        imprimir.innerHTML = ("Campo vacío, digite su nombre".fontcolor('red'));
    } else if (edad == "") {
        imprimir.innerHTML = ("Campo vacío, digite su edad".fontcolor('red'));
    } else if (edad >= 18 && edad < 120) {
        imprimir.textContent = ("Hola " + nombre + ",  " + "eres mayor de edad");
    } else if (edad > 0 && edad < 18 && edad % 1 == 0) {
        imprimir.textContent = ("Hola " + nombre + ",  " + "no eres mayor de edad");
    } else if (edad % 1 !== 0) {
        imprimir.innerHTML = ("No es una edad válida".fontcolor('red'));
    } else if (edad > 100) {
        imprimir.innerHTML = ("No es una edad válida".fontcolor('red'));
    } else {
        imprimir.innerHTML = ("No es una edad válida".fontcolor('red'));
    }

}
function mostrar() {
    Persona(nombre, edad);
    document.getElementById('resul').hidden = true;
    document.getElementById('act').hidden = false;

}
