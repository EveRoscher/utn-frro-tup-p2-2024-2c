function Persona(nombre, edad) {
    this.nombre = nombre; 
    this.edad = edad;     
}

  let nombreUsuario = prompt("Ingrese el nombre de la persona:");
  let edadUsuario = prompt("Ingrese la edad de la persona:");
  
  let nuevaPersona = new Persona(nombreUsuario, edadUsuario);

  console.log("La nueva persona es "+ nuevaPersona.nombre +" y tiene "+ nuevaPersona.edad +" ahora debajo voy a imprimir el listado de objeto");

console.log(Persona)