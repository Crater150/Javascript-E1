
//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
const ParOImpar = prompt("Ingrese un numero:");
if(ParOImpar % 2 == 0) {
    console.log("Este numero es par");
}
else {
  console.log("Este numero no es par");
}
//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
const a = prompt("Ingrese un numero:");
const b = prompt ("Ingrese un numero:");

if (a < b){
    console.log(`${a} es menor a ${b}`);
}
else if (a > b){
    console.log(`${a} es mayor a ${b}`);
}
else if (a === b){
    console.log(`${a} es igual a ${b}`);
}
else {
  console.log("ERROR INGRESE LOS DOS NUMEROS");
  }
//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
const Multiplo = prompt("Ingrese un numero:");
if(Multiplo % 5 == 0) {
    console.log("Si, el número "+Multiplo+ " es múltiplo de 5");
}
else {
    console.log("No, el número "+Multiplo+ " no es múltiplo de 5");
}
//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
function numero() {
  var numero = prompt ("ingrese")
  for (let i = 0; i <= numero; i ++) {
    console.log(i);
  }
}
numero();
//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
function repetirPalabra(palabra,veces) {
    for (let i = 0; i < veces; i++) {
  console.log(palabra);    
    }
  }
  
  repetirPalabra("JUAN",7)
//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
const frutas = ["Banana","Manzana","pera"]
console.log(frutas);
//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
const ListaNumerica  = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < ListaNumerica.length; i++) {
if (i === 5) {
  continue;
}
console.log(ListaNumerica[i]);  
}
//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
var num1 = prompt("Elegi un numero");
var cadena = [1,2,3,4,5];
for (let index = 0; index < cadena.length; index++) {
console.log(cadena[index]*num1);
 }