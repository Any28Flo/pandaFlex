var contador=0;
var arrayBotones= document.getElementsByClassName("closebtn");
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
    console.log(elemento);
    elemento.style.display="flex";

  });
}
function desapareceColumna(){

  columnas[0].style.display="none";

}
function desapareceColumnaIzq(){
  columnas[1].style.display="none";
}
