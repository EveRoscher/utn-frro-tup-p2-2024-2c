# Genera la tabla del "n"
def calcular(n = 1):
    tabla = []
    for i in range(0,11):
        tabla.append(f"{n}x{i}={n*i}")
    return tabla
# Muestra en terminal todas las tablas
def calcular_todas():
    for i in range(0,11):
       tabla = calcular(i)
    for j in tabla:
     print(j)
     print("-"*10) #separadores
#Programa principal
calcular_todas()