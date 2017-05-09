console.log("hola");
var arrayBotones= document.getElementsByClassName("closebtn");
Array.prototype.forEach.call(arrayBotones,function(elemento){
  elemento.addEventListener("click",desaparece);
});



var botonRestaura= document.getElementById("restaura");
botonRestaura.addEventListener("click", restaura);
var contador=0;
function desaparece(){

  this.parentNode.style.display="none";
  contador++;
  if(contador >=4)
  {
    this.parentNode.parentNode.style.display="none";
  }

}

function restaura(){

  var contenedorPandas= document.getElementsByClassName("panda");
  var contenedor= document.getElementById("contenedor");
  contenedor.style.display="flex";
  Array.prototype.forEach.call(contenedorPandas,function(elemento){


    elemento.style.display="flex";
    // this.style.display="flex";

  });

}
function muestraPanda()
{
}
