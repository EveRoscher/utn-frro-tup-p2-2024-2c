#Crea un programa que le pida al usuario ingresar dos números enteros y un número flotante. 
#Luego muestra la suma de los dos enteros y el producto del entero con el flotante

primerEntero=int(input("Ingrese un entero: "))
segundoEntero=int(input("Ingrese otro entero: "))
flotante=float(input("Ingrese un decimal: "))

suma=primerEntero+segundoEntero
producto=suma*flotante

print("\nLa suma de enteros es: ", suma)
print("El producto es: ", producto)