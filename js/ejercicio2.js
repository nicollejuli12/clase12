document.getElementById ('ocultar').hidden = true;
document.getElementById ('act').hidden = true;

function onClickIniciar() {
    document.getElementById('ocultar').hidden = false;
    }
    
let tipo;
function Texto(tipo){
    tipo = document.getElementById('tipo').value;
    var div = document.getElementById('RES');
    var imprimir = document.createElement("span");
    div.appendChild(imprimir);
     if(tipo==="") {
        imprimir.innerHTML = ("Campo vacío".fontcolor('red'));
     }else if(tipo<=0||tipo>=0){
        imprimir.textContent = ("Número");
    }
    else {
        imprimir.innerHTML = ("Texto");
    }
}
    
function mostrar() {
    Texto(tipo);
    document.getElementById('resul').hidden = true;
    document.getElementById('act').hidden = false;

}
