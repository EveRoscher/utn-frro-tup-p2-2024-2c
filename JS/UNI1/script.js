var nombre = prompt("Cuál es tu nombre?");
var num1 = parseFloat(prompt("Ingresa el primer número:"));
var num2 = parseFloat(prompt("Ingresa el segundo número:"));
var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;
document.write("<h2>Hola, " + nombre + "</h2>");
document.write("<div class='result'>");
document.write("<p>Suma: " + num1 + " + " + num2 + " = " + suma + "</p>");
document.write("<p>Resta: " + num1 + " - " + num2 + " = " + resta + "</p>");
document.write(
  "<p>Multiplicación: " + num1 + " * " + num2 + " = " + multiplicacion + "</p>"
);
document.write(
  "<p>División: " + num1 + " / " + num2 + " = " + division + "</p>"
);
document.write("</div>");
