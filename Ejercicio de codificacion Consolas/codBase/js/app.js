var calendario = document.getElementById('calendario');
calendario.addEventListener("click",function(event){
  var mensaje = "Hiciste click en la posicion x: "+event.clientX+" y: "+event.clientY;
  console.log(mensaje);
});
