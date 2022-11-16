const entradasGeneral = prompt('Ingrese cantidad de entradas vendidas Tipo General:')
const entradasMayores = prompt('Ingrese cantidad de entradas vendidas para mayores de 65:')
const entradasMenores = prompt('Ingrese cantidad de entradas vendidas para menores de edad:')

const totalGeneral = parseInt(entradasGeneral) * 150
const totalMayores = parseInt(entradasMayores) * 50
const totalMenores = parseInt(entradasMenores) * 80

const totalEntradas = totalGeneral + totalMayores + totalMenores
alert(`
    EJERCICIO N°3\n
    Cantidad Entrada General(S/150): ${entradasGeneral}\n
    Cantidad Entrada Mayores de 60(S/50): ${entradasMayores}\n
    Cantidad Entrada General(S/80): ${entradasMenores}\n
    Recaudación total: ${totalEntradas}
`)