document.getElementById ('ocultar').hidden = true;
document.getElementById ('act').hidden = true;

function onClickIniciar() {
    document.getElementById('ocultar').hidden = false;
    }
function Num(numero) {

    numero = document.getElementById('numero').value;
    var div = document.getElementById('RES');
    var imprimir = document.createElement("span");
    div.appendChild(imprimir);
    // numero = parseInt(numero);
    if (numero == "") {
        imprimir.textContent = ("Campo vacío, por favor digite un número");
    } else if (numero % 2 == 0 && numero > 0) {
            imprimir.textContent = ("Par");
        } else if (numero % 2 == 1 && numero > 0) {
            imprimir.textContent = ("Impar");
        } else if (numero % 1 == 0 && numero < 0) {
            imprimir.textContent = ("Debe ingresar números positivos");
        } else if (numero % 1 !== 0 && numero > 0) {
            imprimir.textContent = ("Debe ingresar números enteros");
        } else if (numero % 1 !== 0 && numero < 0) {
            imprimir.textContent = ("Debe ingresar números enteros positivos");
        }
}
function mostrar() {
    Num(numero);
    document.getElementById('resul').hidden = true;
    document.getElementById('act').hidden = false;
}