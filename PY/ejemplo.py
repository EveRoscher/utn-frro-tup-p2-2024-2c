class Perro:
    def __init__(self, nombre, raza):
        self.nombre = nombre
        self.raza = raza

    def __str__(self):  # Método __str__ definido dentro de la clase
       return f"Perro(nombre: {self.nombre}, raza: {self.raza})"

# Crear instancias de Perro
perro1 = Perro("pepe", "Lassie")
perro2 = Perro("pipi", "Collie")

# Imprimir los objetos, esto llamará al método __str__
print(perro1)  # Output: Perro(nombre: pepe, raza: Lassie)
print(perro2)  # Output: Perro(nombre: pipi, raza: Collie)

