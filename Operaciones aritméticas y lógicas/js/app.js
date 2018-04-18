/*
var Suma= 4+6
var Resta= 54-33
var Multiplicacion= 8*4
var Division= 48/4

console.log("Suma: ",Suma,"Resta: ",Resta,"Multiplicacion: ",Multiplicacion,"Division: ",Division)

var Modulo= 15%3
console.log(Modulo)

var Num=20
var Incremento= --Num
var Decremento= ++Num

console.log(Num,Incremento,Decremento);

var Num=20
var Unary=-Num
console.log(Unary);

var x=true
var Not=(!x)
console.log(Not);

var x=true
var y=false
console.log((x && y));

function evaluarPares(numero1,numero2){
  if ((numero1 % 2)==0 && (numero2 % 2)==0) {
    alert("Los numeros son Pares")
  }
}
evaluarPares(6,2)

var x=false
var y=true
console.log((x && y));

function evaluarPares2(numero1,numero2){
  if ((numero1 % 2)==0 || (numero2 & 2)==0) {
    alert("Alguno de los numeros es par")
  } else {
    alert("Ninguno de los 2 numeros es par")
  }
}
evaluarPares2(13,3)
*/
var respuesta = "";
respuesta = respuesta + "(6>5) && (5!=6) : " + ((6>5) && (5!=6)) + "\n";
respuesta = respuesta + "(3<8) || (8==7) : " + ((3<8) || (8==7)) + "\n";
respuesta​ ​=​ ​respuesta​ ​+​ ​"!(4>5)​ ​:​ ​"​ ​+​ ​(!(4>5))​ ​+​ ​"
";

var numero = 6;
numero++;
respuesta = respuesta + "número: " + (numero) + "\n";

var numero2 = --numero;
respuesta = respuesta + ("numero2 = " + numero2) + "\n";
respuesta = respuesta + ("numero = " + numero) + "\n";

var numero3 = numero--;
respuesta = respuesta + ("numero3= " + numero3) + "\n";
respuesta = respuesta + ("numero = " + numero) + "\n";

alert(respuesta);
