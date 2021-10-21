function NOTAS(nombre, materia, nota1, nota2, nota3) {

    nombre = document.getElementById('nombre').value;
    materia = document.getElementById('materia').value;
    nota1 = document.getElementById('nota1').value;
    nota2 = document.getElementById('nota2').value;
    nota3 = document.getElementById('nota3').value;
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);
    var div = document.getElementById('C');
    var imprimir = document.createElement("span");
    div.appendChild(imprimir);
    if (nombre === "") {
        imprimir.innerHTML = ("Digite su nombre ");
    } else if (materia === "") {
        imprimir.innerHTML = ("Digite la materia ");
    }
    function nota(n1, n2, n3) {
        this.n1 = n1;
        this.n2 = n2;
        this.n3 = n3;

    }
    var notass = new nota(nota1, nota2, nota3);
    var PROM = ((notass.n1 + notass.n2 + notass.n3) / 3);
    var div = document.getElementById('C');
    var imprimir = document.createElement("span");
    div.appendChild(imprimir);
    if (PROM < 0 || PROM > 5 || nota1 < 0 || nota1 > 5 || nota2 < 0 || nota2 > 5 || nota3 < 0 || nota3 > 5) {//|| PROM < .0 || PROM > .5 |||| nota1 > .0 || nota1 < .5 || nota2 > .0 || nota2 < .5 || nota3 > .0 || nota3 < .5 
        imprimir.innerHTML = ("Nota no valida".fontcolor('red'));
    } else if (PROM >= 0 && PROM < 3) {
        imprimir.innerHTML = ("Lo siento  " + nombre + " su nota es ".fontcolor('red') + PROM.toFixed(2).fontcolor('red') + " no pasaste la materia " + materia + " ");
    } else if (PROM >= 3 && PROM <= 5) {
        imprimir.innerHTML = ("FELICIDADES  " + nombre + "su nota es  ".fontcolor('green') + PROM.toFixed(2).fontcolor('green') + " pasaste la materia " + materia + " ");
    }

}
function mostrar() {
    NOTAS(nombre, materia, nota1, nota2, nota3);

}