var contador=0;
var bandera=true;
var flagDos=true;
var arrayBotones= document.getElementsByClassName("closebtn");
console.log(arrayBotones);
Array.prototype.forEach.call(arrayBotones,function(elemento){
  elemento.addEventListener("click",desaparece);
});

var eventoClick= document.getElementById("columnaDerecha");
eventoClick.addEventListener("click",desapareceColumna);
var eventoHistoria= document.getElementById("historia");
eventoHistoria.addEventListener("click",desapareceColumnaIzq);
var columnas= document.getElementsByClassName("columna");
var botonRestaura= document.getElementById("restaura");
botonRestaura.addEventListener("click", restaura);
function desaparece(){
this.parentNode.style.display="none";
  contador++;
  if(contador >=4){
    contador=0;
    this.parentNode.parentNode.style.display="none";
  }
}

function restaura(){
  var contenedorPandas= document.getElementsByClassName("panda");
  var contenedor= document.getElementById("contenedor");
  contenedor.style.display="flex";
  Array.prototype.forEach.call(contenedorPandas,function(elemento){
    elemento.style.display="flex";
    // siblingNode.style.marginLeft="-100px";
  });
}
function desapareceColumna(){
  if(bandera===true){
    columnas[0].style.display="none";
    bandera=false;
  }else {
    columnas[0].style.display="flex";
  }
}
function desapareceColumnaIzq(){
  if(flagDos===true){
    columnas[1].style.display="none";
    flagDos=false;
  }else {
    columnas[1].style.display="flex";
  }
}
