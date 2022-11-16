const Hombres= prompt(`Ingrese número de hombres:`)
const Mujeres= prompt(`Ingrese número de mujeres:`)
const totalGrupo = parseInt(Mujeres) + parseInt(Hombres)
const porcentajeMujeres = (parseInt(Mujeres) / totalGrupo) * 100
const porcentajeHombres = (parseInt(Hombres) / totalGrupo) * 100
alert(`
    EJERCICIO N°1\n
    Cantidad total del grupo: ${totalGrupo}\n
    Porcentaje de mujeres: ${porcentajeMujeres}%\n
    Porcentaje de hombres: ${porcentajeHombres}%
`)