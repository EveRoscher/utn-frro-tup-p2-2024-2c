/*function tablaMultiplicar(hasta) {
  for (var i = 1; i <= hasta; i++) console.log("1 x", i, "=", 1 * i);
}

tablaMultiplicar(4);



function saludarDos(miNombre) {
  console.log("Hola " + miNombre);
}

saludarDos("Codo a Codo"); //Argumento fijo
var nombre = prompt("Ingrese su nombre");
saludarDos(nombre); //Argumento variable





function multiplicar(a, b) {
  return a * b;
}
console.log(multiplicar(5, 2)); // salida: 10
console.log(multiplicar(5)); // salida: 5


function sumarDos(num1, num2){
    var suma = num1 + num2
    return suma
    }
    n1 = 2
    n2 = 3
    var resultado = sumarDos(n1, n2)
    console.log("El resultado es: " + resultado)

function callback() {
  console.log("yo soy un callback");
}
function mensaje(fn) {
  fn();
}
mensaje(callback);



var persona = {
    nombre: "Juan", //variable del objeto. Par variable: valor,
    apellido: "Paz",
    dni: 11223344,
    //Método: es una propiedad más
    nombreCompleto: function () {
    return this.nombre + " " + this.apellido
    //El string que devuelve tiene información del propio objeto, por eso usamos “this”
    }
    }
    console.log(persona) // Imprimo el objeto
    console.log(persona.nombre) // Imprimo una propiedad del objeto: Juan
    console.log(persona.nombreCompleto()) // Imprimo el resultado del método: Juan Paz*/

var perro = {
  nombre: "Milo",
  edad: 12,
  vivo: true,
  quienSoy() {
    console.log("soy " + this.nombre, ", tengo " + this.edad + " años");
  },
  ladrar() {
    return this.nombre + " dice guau!";
  },
};

perro.quienSoy();

if (perro.vivo) {
  console.log(perro.ladrar());
}


