document.getElementById ('ocultar').hidden = true;
document.getElementById ('act').hidden = true;

function onClickIniciar() {
    document.getElementById('ocultar').hidden = false;
    }
document.getElementById('button').onclick=function(){
    let palabra=document.getElementById('palabra').value;
    let re=new RegExp(palabra,'g');//RegExp se utiliza para hacer coincidir texto con un patrón. la g de global
    let texto=document.getElementById('texto').value;
    let resultado=texto.replace(re,'<span class="encontrado">$&</span>')
    document.getElementById('RES').innerHTML=resultado;
    if(palabra===""){
        var div = document.getElementById('RES');
    var imprimir = document.createElement("span");
        imprimir.textContent = ("Campo vacío, por favor ingrese texto a buscar");
    div.appendChild(imprimir);

    }else if(texto===""){
        var div = document.getElementById('RES');
    var imprimir = document.createElement("span");
        imprimir.textContent = ("Campo vacío, por favor ingrese un párrafo o una oración");
    div.appendChild(imprimir);

    }
    document.getElementById('resul').hidden = true;
    document.getElementById('act').hidden = false;
}