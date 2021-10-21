document.getElementById('button').onclick=function(){
    let palabra=document.getElementById('palabra').value;
    let re=new RegExp(palabra,'g');//RegExp se utiliza para hacer coincidir texto con un patrón.
    let texto=document.getElementById('texto').value;
    let resultado=texto.replace(re,'<span class="encontrado">$&</span>')
    document.getElementById('resultado').innerHTML=resultado;
}