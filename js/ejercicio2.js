let tipo;
function Texto(tipo){
    tipo = document.getElementById('tipo').value;
    var div = document.getElementById('B');
    var imprimir = document.createElement("span");
    div.appendChild(imprimir);
     if(tipo==="") {
        imprimir.innerHTML = ("Campo vacío".fontcolor('red'));
     }else if(tipo<=0||tipo>=0){
        imprimir.textContent = ("Número");
    }
    else {//if (tipo='a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z')
        imprimir.innerHTML = ("Texto");
    }
}
    
function mostrar() {
    Texto(tipo);
}
