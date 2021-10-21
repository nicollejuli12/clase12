function Persona(nombre, edad) {
    nombre = document.getElementById('nombre').value;
    edad = document.getElementById('edad').value;
    var div = document.getElementById('A');
    var imprimir = document.createElement("span");
    div.appendChild(imprimir);
    if (nombre === "") {
        imprimir.innerHTML = ("Campo vacío, digite su nombre");
    } else if (edad == "") {
        imprimir.innerHTML = ("Campo vacío, digite su edad");
    } else if (edad >= 18 && edad < 120) {
        imprimir.textContent = ("| Hola " + nombre + ",  " + "es mayor de edad");
    } else if (edad > 0 && edad < 18 && edad % 1 == 0) {
        imprimir.textContent = ("| Hola " + nombre + ",  " + "es menor de edad");
    } else if (edad % 1 !== 0) {
        imprimir.innerHTML = ("Edad no válida".fontcolor('red'));
    } else if (edad > 100) {
        imprimir.innerHTML = ("Edad no válida".fontcolor('red'));
    } else {
        imprimir.innerHTML = ("Edad no válida".fontcolor('red'));
    }

}
function mostrar() {
    Persona(nombre, edad);
}
