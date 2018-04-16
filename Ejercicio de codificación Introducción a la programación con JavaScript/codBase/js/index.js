
document.getElementById('boton-receta1').addEventListener('click', function(){
  var ingredientes= ["Claras de huevo", "Azucar Blanca", "Leche Condensada", "Gelatina sin sabor", "Limones"];
  var unidadesClaraDeHuevo = 5;
  var gramosAzucar = 150;
  var gramosLecheCondensada = 200;
  var sobresGelatina = 1;
  var unidadesLimon = 4;

  console.log("Adicionar las "+unidadesClaraDeHuevo+" "+ingredientes[0]+" en un Bol y batir con los "+gramosAzucar+" gramos de "+ingredientes[1]);

  console.log("Adicionar los "+gramosLecheCondensada+" gramos de "+ingredientes[2]+" y batir bien");

  console.log("Adicionar el zumo de "+unidadesLimon+" "+ingredientes[4]+" y "+sobresGelatina+" sobre de "+ingredientes[3]+" hidratada en agua tibia");

  console.log("Depositar la mezcla en moldes individuales y refrigerar");
})

document.getElementById('boton-receta2').addEventListener('click', function(){
  var ingredientes= ["Ginebra", "Vermouth Seco", "Aceituna"];
  var onzasGinebra= 2.5;
  var onzasVermouthSeco= 0.5;
  var unidadesAceituna= 1;

  console.log("Verter las "+onzasGinebra+" onzas de "+ingredientes[0]+" en una coctelera");

  console.log("Añadir "+onzasVermouthSeco+" onzas de "+ingredientes[1]);

  console.log("Servir en una copa tipo Martini y añadir "+unidadesAceituna+" "+ingredientes[2]);
})
