document.getElementById('ocultar').hidden = true;
function onClickIniciar() {
document.getElementById('ocultar').hidden = false;
}
function cont(){
setTimeout(function(){
    let valor=document.getElementById('cont');
    let cantidad=valor.value.length;
    document.getElementById('RES').innerHTML=cantidad+" caracteres";
});
}